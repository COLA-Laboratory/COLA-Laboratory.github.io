(function () {
  const board = document.getElementById("deadline-board");
  const dataElement = document.getElementById("deadline-board-data");

  if (!board || !dataElement) {
    return;
  }

  const payload = JSON.parse(dataElement.textContent);
  const subjects = payload.subjects || [];
  const conferences = payload.conferences || [];
  const subjectMap = new Map(subjects.map((subject) => [subject.code, subject]));
  const allSubjectCodes = subjects.map((subject) => subject.code);

  const filtersElement = document.getElementById("deadline-filters");
  const resetElement = document.getElementById("deadline-reset");
  const summaryElement = document.getElementById("deadline-summary");
  const messageElement = document.getElementById("deadline-message");
  const upcomingSection = document.getElementById("deadline-upcoming-section");
  const upcomingCount = document.getElementById("deadline-upcoming-count");
  const upcomingGrid = document.getElementById("deadline-upcoming");
  const pastSection = document.getElementById("deadline-past-section");
  const pastCount = document.getElementById("deadline-past-count");
  const pastGrid = document.getElementById("deadline-past");
  const pastToggle = document.getElementById("deadline-past-toggle");

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });

  let selectedSubjects = getInitialSubjectSelection();
  let archiveExpanded = false;

  const normalizedConferences = conferences
    .map(normalizeConference)
    .filter((conference) => conference.deadlines.length > 0);

  renderFilters();
  renderBoard();
  updateLiveCountdowns();
  window.setInterval(updateLiveCountdowns, 1000);

  resetElement.addEventListener("click", function () {
    selectedSubjects = new Set(allSubjectCodes);
    syncUrl();
    renderFilters();
    renderBoard();
  });

  pastToggle.addEventListener("click", function () {
    archiveExpanded = !archiveExpanded;
    renderBoard();
  });

  function getInitialSubjectSelection() {
    const params = new URLSearchParams(window.location.search);
    const requested = (params.get("sub") || "")
      .split(",")
      .map((value) => value.trim().toUpperCase())
      .filter((value) => subjectMap.has(value));

    return new Set(requested.length ? requested : allSubjectCodes);
  }

  function normalizeConference(conference) {
    const locations = normalizeStringArray(conference.locations || conference.location);
    const conferenceDates = normalizeStringArray(conference.conference_dates);
    const schedule = normalizeSchedule(conference.schedule, locations, conferenceDates);
    const deadlines = (conference.deadlines || [])
      .map(function (deadline) {
        const timeLabel = deadline.time_label || "11:59PM AOE";
        const time24 = deadline.time_24 || "23:59";
        const utcOffset = deadline.utc_offset || "-12:00";
        const displayDateObject = new Date(deadline.date + "T00:00:00");
        const dateObject = buildDeadlineDateObject(deadline.date, time24, utcOffset);

        return {
          label: deadline.label || "Deadline",
          date: deadline.date,
          timeLabel: timeLabel,
          hasExactTime: true,
          dayTimestamp: displayDateObject.getTime(),
          displayDateObject: displayDateObject,
          dateObject: dateObject,
          timestamp: dateObject.getTime()
        };
      })
      .filter(function (deadline) {
        return !Number.isNaN(deadline.timestamp);
      })
      .sort(function (left, right) {
        return left.timestamp - right.timestamp;
      });

    return {
      id: conference.id,
      title: conference.title,
      subjects: conference.subjects || [],
      website: conference.website || "",
      schedule: schedule,
      note: conference.note || "",
      deadlines: deadlines
    };
  }

  function renderFilters() {
    filtersElement.innerHTML = "";

    subjects.forEach(function (subject) {
      const button = document.createElement("button");
      const active = selectedSubjects.has(subject.code);

      button.type = "button";
      button.className = "deadline-filter" + (active ? " is-active" : "");
      button.textContent = subject.label;
      button.title = subject.name;
      button.setAttribute("aria-pressed", active ? "true" : "false");
      button.style.setProperty("--subject-color", subject.color);
      button.style.setProperty("--subject-soft", hexToRgba(subject.color, 0.14));
      button.addEventListener("click", function () {
        toggleSubject(subject.code);
      });

      filtersElement.appendChild(button);
    });

    resetElement.disabled = selectedSubjects.size === allSubjectCodes.length;
  }

  function toggleSubject(code) {
    if (selectedSubjects.has(code) && selectedSubjects.size === 1) {
      return;
    }

    if (selectedSubjects.has(code)) {
      selectedSubjects.delete(code);
    } else {
      selectedSubjects.add(code);
    }

    syncUrl();
    renderFilters();
    renderBoard();
  }

  function syncUrl() {
    const params = new URLSearchParams(window.location.search);

    if (selectedSubjects.size === allSubjectCodes.length) {
      params.delete("sub");
    } else {
      params.set("sub", Array.from(selectedSubjects).join(","));
    }

    const nextQuery = params.toString();
    const nextUrl = window.location.pathname + (nextQuery ? "?" + nextQuery : "") + window.location.hash;

    window.history.replaceState({}, "", nextUrl);
  }

  function renderBoard() {
    const now = new Date();

    const visibleConferences = normalizedConferences
      .filter(function (conference) {
        return conference.subjects.some(function (subject) {
          return selectedSubjects.has(subject);
        });
      })
      .map(function (conference) {
        const nextDeadline =
          conference.deadlines.find(function (deadline) {
            return deadline.timestamp >= now.getTime();
          }) || null;
        const latestDeadline = conference.deadlines[conference.deadlines.length - 1] || null;

        return Object.assign({}, conference, {
          nextDeadline: nextDeadline,
          latestDeadline: latestDeadline,
          isPast: nextDeadline === null
        });
      });

    const upcoming = visibleConferences
      .filter(function (conference) {
        return !conference.isPast;
      })
      .sort(function (left, right) {
        return left.nextDeadline.timestamp - right.nextDeadline.timestamp;
      });

    const archived = visibleConferences
      .filter(function (conference) {
        return conference.isPast;
      })
      .sort(function (left, right) {
        return right.latestDeadline.timestamp - left.latestDeadline.timestamp;
      });

    renderSummary(visibleConferences.length, upcoming.length, archived.length);
    renderSection(upcomingSection, upcomingGrid, upcomingCount, upcoming, false, now);
    renderSection(pastSection, pastGrid, pastCount, archived, true, now);
    renderMessage(visibleConferences.length, upcoming.length, archived.length);
  }

  function renderSummary(totalVisible, upcomingCountValue, archivedCountValue) {
    summaryElement.innerHTML =
      createStat(totalVisible, "venues visible") +
      createStat(upcomingCountValue, "upcoming") +
      createStat(archivedCountValue, "archived");
  }

  function createStat(value, label) {
    return (
      '<div class="deadline-board__stat">' +
      '<span class="deadline-board__stat-value">' + value + "</span>" +
      '<span class="deadline-board__stat-label">' + label + "</span>" +
      "</div>"
    );
  }

  function renderSection(sectionElement, gridElement, countElement, items, archived, now) {
    sectionElement.hidden = items.length === 0;
    countElement.textContent = items.length ? countLabel(items.length, archived ? "venue" : "deadline set") : "";
    gridElement.innerHTML = items.map(function (conference) {
      return renderConferenceCard(conference, now);
    }).join("");

    if (archived) {
      pastToggle.hidden = items.length === 0;
      pastToggle.setAttribute("aria-expanded", archiveExpanded ? "true" : "false");
      pastToggle.textContent = archiveExpanded ? "Hide archive" : "Show archive";
      gridElement.hidden = !archiveExpanded;
    } else {
      gridElement.hidden = false;
    }
  }

  function renderMessage(totalVisible, upcomingCountValue, archivedCountValue) {
    if (!totalVisible) {
      messageElement.hidden = false;
      messageElement.textContent = "No venues match the current filters. Try adding another research area.";
      return;
    }

    if (!upcomingCountValue && archivedCountValue) {
      messageElement.hidden = false;
      messageElement.textContent =
        "No upcoming deadlines are in the current selection yet, so the archive below is shown for next-cycle planning.";
      return;
    }

    messageElement.hidden = true;
    messageElement.textContent = "";
  }

  function renderConferenceCard(conference, now) {
    const accent = getPrimarySubjectColor(conference.subjects);
    const subjectChips = conference.subjects
      .map(function (code) {
        const subject = subjectMap.get(code);

        return (
          '<span class="deadline-chip" style="--subject-color: ' +
          subject.color +
          "; --subject-soft: " +
          hexToRgba(subject.color, 0.14) +
          '" title="' +
          escapeHtml(subject.name) +
          '">' +
          escapeHtml(subject.label) +
          "</span>"
        );
      })
      .join("");

    const deadlineItems = conference.deadlines
      .map(function (deadline) {
        const countdownLabel = getCountdownLabel(deadline, now);
        const countdownBadge = countdownLabel
          ? '<span class="deadline-card__deadline-badge" data-deadline-timestamp="' +
            deadline.timestamp +
            '" data-day-timestamp="' +
            deadline.dayTimestamp +
            '" data-has-exact-time="' +
            (deadline.hasExactTime ? "true" : "false") +
            '">' +
            escapeHtml(countdownLabel) +
            "</span>"
          : "";
        const timeLabel = deadline.timeLabel
          ? '<span class="deadline-card__deadline-time">' + escapeHtml(deadline.timeLabel) + "</span>"
          : "";

        return (
          '<div class="deadline-card__deadline">' +
          '<span class="deadline-card__deadline-content">' +
          '<span class="deadline-card__deadline-label">' +
          escapeHtml(deadline.label) +
          "</span>" +
          '<span class="deadline-card__deadline-separator" aria-hidden="true">|</span>' +
          '<span class="deadline-card__deadline-date">' +
          '<time datetime="' +
          deadline.date +
          '">' +
          dateFormatter.format(deadline.displayDateObject) +
          "</time>" +
          timeLabel +
          "</span>" +
          "</span>" +
          countdownBadge +
          "</div>"
        );
      })
      .join("");

    const note = conference.note
      ? '<p class="deadline-card__note">' + escapeHtml(conference.note) + "</p>"
      : "";

    const statusLabel = conference.isPast ? "Archived" : "Upcoming";
    const statusClass = conference.isPast ? "deadline-card__status deadline-card__status--past" : "deadline-card__status deadline-card__status--upcoming";
    const scheduleItems = conference.schedule
      .map(function (entry) {
        const parts = [];

        if (entry.location) {
          parts.push(
            '<span class="deadline-card__schedule-part deadline-card__schedule-part--location">' +
            iconMapPin() +
            '<span>' + escapeHtml(entry.location) + "</span>" +
            "</span>"
          );
        }

        if (entry.dates) {
          parts.push(
            '<span class="deadline-card__schedule-part deadline-card__schedule-part--dates">' +
            iconCalendar() +
            '<span>' + escapeHtml(entry.dates) + "</span>" +
            "</span>"
          );
        }

        return parts.length
          ? '<div class="deadline-card__schedule-item">' + parts.join("") + "</div>"
          : "";
      })
      .filter(Boolean)
      .join("");

    const metaRow = scheduleItems
      ? '<div class="deadline-card__meta">' + scheduleItems + "</div>"
      : "";

    return (
      '<article class="deadline-card deadline-card--' +
      (conference.isPast ? "past" : "upcoming") +
      '" style="--deadline-accent: ' +
      accent +
      "; --deadline-accent-soft: " +
      hexToRgba(accent, conference.isPast ? 0.06 : 0.12) +
      '">' +
      '<div class="deadline-card__header">' +
      "<div>" +
      '<div class="deadline-card__subjects">' +
      subjectChips +
      "</div>" +
      '<h4 class="deadline-card__title">' +
      (conference.website
        ? '<a href="' + escapeHtml(conference.website) + '" target="_blank" rel="noopener">' + escapeHtml(conference.title) + "</a>"
        : escapeHtml(conference.title)) +
      "</h4>" +
      "</div>" +
      '<span class="' +
      statusClass +
      '">' +
      statusLabel +
      "</span>" +
      "</div>" +
      metaRow +
      '<div class="deadline-card__deadlines">' +
      deadlineItems +
      "</div>" +
      note +
      "</article>"
    );
  }

  function getPrimarySubjectColor(subjectCodes) {
    const first = subjectMap.get(subjectCodes[0]);

    return first ? first.color : "#0055bb";
  }

  function countLabel(value, noun) {
    return value + " " + noun + (value === 1 ? "" : "s");
  }

  function getCountdownLabel(deadline, now) {
    if (deadline.hasExactTime) {
      const totalSeconds = Math.ceil((deadline.timestamp - now.getTime()) / 1000);

      if (totalSeconds <= 0) {
        return "";
      }

      const days = Math.floor(totalSeconds / 86400);
      const hours = Math.floor((totalSeconds % 86400) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      if (days > 0) {
        return days + "d " + formatClock(hours) + ":" + formatClock(minutes) + ":" + formatClock(seconds);
      }

      return formatClock(hours) + ":" + formatClock(minutes) + ":" + formatClock(seconds);
    }

    const startOfToday = new Date(now);
    startOfToday.setHours(0, 0, 0, 0);
    const daysLeft = Math.round((deadline.dayTimestamp - startOfToday.getTime()) / 86400000);

    if (daysLeft < 0) {
      return "";
    }

    if (daysLeft === 0) {
      return "Today";
    }

    if (daysLeft === 1) {
      return "Tomorrow";
    }

    return createCountdownPart(daysLeft, "d");
  }

  function buildDeadlineDateObject(date, time24, utcOffset) {
    return new Date(date + "T" + time24 + ":00" + utcOffset);
  }

  function updateLiveCountdowns() {
    const badges = board.querySelectorAll(".deadline-card__deadline-badge[data-deadline-timestamp]");
    const now = new Date();
    let needsRerender = false;

    badges.forEach(function (badge) {
      const deadline = {
        timestamp: Number(badge.dataset.deadlineTimestamp),
        dayTimestamp: Number(badge.dataset.dayTimestamp),
        hasExactTime: badge.dataset.hasExactTime === "true"
      };
      const nextLabel = getCountdownLabel(deadline, now);

      if (!nextLabel) {
        needsRerender = true;
        return;
      }

      if (badge.textContent !== nextLabel) {
        badge.textContent = nextLabel;
      }
    });

    if (needsRerender) {
      renderBoard();
    }
  }

  function createCountdownPart(value, unit) {
    return value + unit;
  }

  function formatCountdownParts(parts) {
    return parts.filter(Boolean).join(" ");
  }

  function formatClock(value) {
    return String(value).padStart(2, "0");
  }

  function normalizeStringArray(value) {
    if (Array.isArray(value)) {
      return value.filter(Boolean);
    }

    if (typeof value === "string" && value.trim()) {
      return [value.trim()];
    }

    return [];
  }

  function normalizeSchedule(scheduleValue, locations, conferenceDates) {
    if (Array.isArray(scheduleValue) && scheduleValue.length) {
      return scheduleValue
        .map(function (entry) {
          return {
            location: entry.location || "",
            dates: entry.dates || ""
          };
        })
        .filter(function (entry) {
          return entry.location || entry.dates;
        });
    }

    const count = Math.max(locations.length, conferenceDates.length);
    const result = [];

    for (let index = 0; index < count; index += 1) {
      const location = locations[index] || (count === 1 ? locations[0] : "");
      const dates = conferenceDates[index] || (count === 1 ? conferenceDates[0] : "");

      if (location || dates) {
        result.push({ location: location, dates: dates });
      }
    }

    return result;
  }

  function iconMapPin() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-6-5.33-6-11a6 6 0 1 1 12 0c0 5.67-6 11-6 11Z"></path><circle cx="12" cy="10" r="2.5"></circle></svg>';
  }

  function iconCalendar() {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3.5" y="5" width="17" height="15.5" rx="2.2"></rect><path d="M7.5 3.5v3"></path><path d="M16.5 3.5v3"></path><path d="M3.5 9.5h17"></path></svg>';
  }

  function hexToRgba(hex, alpha) {
    const trimmed = hex.replace("#", "");
    const normalized = trimmed.length === 3
      ? trimmed.split("").map(function (part) { return part + part; }).join("")
      : trimmed;

    const red = parseInt(normalized.slice(0, 2), 16);
    const green = parseInt(normalized.slice(2, 4), 16);
    const blue = parseInt(normalized.slice(4, 6), 16);

    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }
})();
