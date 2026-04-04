(function () {
  function normalizeLine(text) {
    return text.replace(/\s+/g, " ").trim();
  }

  function getEntryContentRoot(listItem) {
    return listItem.querySelector(":scope > p") || listItem;
  }

  function getEntryLines(listItem) {
    const contentRoot = getEntryContentRoot(listItem).cloneNode(true);

    contentRoot.querySelectorAll("pre").forEach(function (node) {
      node.remove();
    });

    return contentRoot.innerText
      .split(/\n+/)
      .map(normalizeLine)
      .filter(Boolean);
  }

  function getSectionLabel(listItem) {
    const list = listItem.closest("ul");
    if (!list) {
      return "";
    }

    let node = list.previousElementSibling;
    while (node) {
      if (node.matches("h3")) {
        return normalizeLine(node.textContent || "");
      }

      if (node.matches("h2, hr")) {
        break;
      }

      node = node.previousElementSibling;
    }

    return "";
  }

  function classifyMixedEntry(venueLine) {
    if (/^(Proc\.|Proceedings\b|CoRR\b|arXiv\b)/i.test(venueLine)) {
      return "conference";
    }

    return venueLine ? "journal" : null;
  }

  function getEntryKind(listItem) {
    if (listItem.closest("blockquote")) {
      return null;
    }

    const contentRoot = getEntryContentRoot(listItem);
    if (contentRoot.querySelectorAll("br").length < 2) {
      return null;
    }

    const lines = getEntryLines(listItem);

    if (lines.length < 3) {
      return null;
    }

    const sectionLabel = getSectionLabel(listItem);
    const venueLine = lines[2];

    if (/\bJournal\b/i.test(sectionLabel)) {
      return "journal";
    }

    if (/\bConference\b/i.test(sectionLabel)) {
      return "conference";
    }

    if (/\bTechnical Report\b/i.test(sectionLabel)) {
      return "report";
    }

    if (/\bIn press\b/i.test(sectionLabel)) {
      return classifyMixedEntry(venueLine);
    }

    return null;
  }

  function applyIndices(items, className, prefix) {
    const total = items.length;

    items.forEach(function (listItem, index) {
      listItem.classList.add(className);
      listItem.setAttribute("data-pub-index", prefix + String(total - index));
    });
  }

  function addPublicationIndices() {
    const article = document.querySelector("article.markdown");
    if (!article) {
      return;
    }

    const allItems = Array.from(article.querySelectorAll("ul > li"));
    allItems.forEach(function (listItem) {
      listItem.classList.remove("pub-journal-item", "pub-conference-item", "pub-report-item");
      listItem.removeAttribute("data-pub-index");
    });

    const classifiedItems = allItems
      .map(function (listItem) {
        return { listItem: listItem, kind: getEntryKind(listItem) };
      })
      .filter(function (entry) {
        return entry.kind;
      });

    const journalItems = classifiedItems
      .filter(function (entry) {
        return entry.kind === "journal";
      })
      .map(function (entry) {
        return entry.listItem;
      });

    const conferenceItems = classifiedItems
      .filter(function (entry) {
        return entry.kind === "conference";
      })
      .map(function (entry) {
        return entry.listItem;
      });

    const reportItems = classifiedItems
      .filter(function (entry) {
        return entry.kind === "report";
      })
      .map(function (entry) {
        return entry.listItem;
      });

    applyIndices(journalItems, "pub-journal-item", "J");
    applyIndices(conferenceItems, "pub-conference-item", "C");
    applyIndices(reportItems, "pub-report-item", "R");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addPublicationIndices);
  } else {
    addPublicationIndices();
  }
})();
