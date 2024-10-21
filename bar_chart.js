d3.csv("/publication_statistics.csv").then(function(data){
    plot(data);
});

function plot(data){
    var svg = d3.select("svg"),
        top_margin = 40,
        left_margin = 200;
        width = svg.attr("width"),
        height = svg.attr("height");

    const X = d3.map(data, d=>d.year);
    const Y = d3.map(data, d=>d.conference);

    xDomain = X;
    yDomain = [0, 14];
    zDomain = [0,140];
    xDomain = new d3.InternSet(xDomain)


    var xScale = d3.scaleBand(xDomain, [0, width-2*left_margin]).padding(0.4);
        yScale = d3.scaleLinear(yDomain,[height-top_margin, top_margin]);
        zScale = d3.scaleLinear(zDomain, [height-top_margin, top_margin]);
        xxScale = d3.scaleLinear([d3.min(X), d3.max(X)], [3*left_margin-0.5*xScale.bandwidth(), width-2*left_margin-0.5*xScale.bandwidth()]);
        xzScale = d3.scaleBand([0,1],[0, xScale.bandwidth()]).padding(0.08)

    var g = svg.append("g")
            .attr("transform", "translate(" + left_margin + "," + 0 + ")")

    // axis
    g.append("g")
        .attr("transform", "translate(0," + (height-top_margin) + ")")
        .call(d3.axisBottom(xScale).tickFormat(function(d){
            return d;
        }))
        .call(g=>g.selectAll(".tick line").clone()
            .attr("y2", -height+2*top_margin)
            .attr("stroke", "#e8e8e8")
            .attr("stroke-opacuty", 0.1))
        .attr("font-family","Oxygen Mono")
        .selectAll("text")
        .style("text-anchor", "start")
        .attr("transform", "rotate(30)")
        .select(".domain")
        .attr("stroke", "#black")
        .attr("stroke-width", "1")
        .attr("opacity", "1")

    g.append("g")
        .call(d3.axisLeft(yScale).ticks(6))
        .attr("font-family","Oxygen Mono")
        .call(g=>g.selectAll(".tick line").clone()
            .attr("x2", width-2*left_margin)
            .attr("stroke", "#e8e8e8")
            .attr("stroke-opacuty", 0.1))
        .call(g => g.append("text")
            .attr("x", -20)
            .attr("y", 30)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("Annual Statistics")
            .attr("font-family","Oxygen Mono"));

    g.append("g")
    .attr("transform", "translate("+(width-2*left_margin)+","+0+")")
    .call(d3.axisRight(zScale).ticks(4))
    .attr("font-family","Oxygen Mono")
    .call(g => g.append("text")
            .attr("x", -70)
            .attr("y", 30)
            .attr("fill", "currentColor")
            .attr("text-anchor", "start")
            .text("Total Statistics")
            .attr("font-family","Oxygen Mono"));

    g.append("line")
        .attr("x1", 0)
        .attr("y1", top_margin)
        .attr("x2", width-2*left_margin)
        .attr("y2", top_margin)
        .attr("stroke", "black")
        .attr("stroke-width", "1");

    g.append("line")
        .attr("x1", 0)
        .attr("y1", height-top_margin)
        .attr("x2", width-2*left_margin)
        .attr("y2", height-top_margin)
        .attr("stroke", "black")
        .attr("stroke-width", "1");

    //line chart
    var line = d3.line()
        .x(function(d) { return xScale(d.year)+left_margin+0.5*xScale.bandwidth(); })
        .y(function(d) { return zScale(d.sum); })
        .curve(d3.curveMonotoneX)

    svg.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .style("fill", "none")
        .style("stroke", "black")
        .style("stroke-width", "1.0");

    svg.selectAll("dot")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d.year)+left_margin+0.5*xScale.bandwidth(); } )
        .attr("cy", function (d) { return zScale(d.sum); } )
        .attr("r", 4)
        .style("fill", "black")
        .append("title").text(i => `Sum:${i.sum}`);

    //bar chart
    g.append('defs')
        .append('pattern')
        .attr('id', 'diagonalHatch')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', 4)
        .attr('height', 4)
        .append('path')
        .attr('d', 'M-1,1 l2,-2 M0,4 l4,-4 M3,5 l2,-2')
        .attr('stroke', '#000000')
        .attr('stroke-width', 1.0);

    g.selectAll(".bar")
        .data(data)
        .enter().append("rect")

        .attr("class", "bars")
        .attr("x", function(d){return xScale(d.year)+xzScale(0);})
        .attr("y", function(d){return yScale(d.journal);})
        .attr("width", xzScale.bandwidth())
        .attr("height", i=> yScale(0)-yScale(i.journal))
        .attr("fill", "url(#diagonalHatch)")
        .style("stroke", "black")
        .append("title").text(i => `Journal:${i.journal}`);

    g.append('defs')
        .append('pattern')
            .attr('id', 'dots')
            .attr('patternUnits', 'userSpaceOnUse')
            .attr('width', 2)
            .attr('height', 2)
        .append('circle')
            .attr('cx', 0.5)
            .attr('cy', 0.5)
            .attr('r', 0.7)
            .attr('fill', 'black');

    const bar = g.selectAll(".bar")
        .data(data)
        .enter().append("rect")
        .attr("class", "bars")
        .attr("x", function(d){return xScale(d.year)+xzScale(1);})
        .attr("y", function(d){return yScale(d.conference);})
        .attr("width", xzScale.bandwidth())
        .attr("height", i=> yScale(0)-yScale(i.conference))
        .attr("fill", "url(#dots)")
        .style("stroke", "black")
        .append("title")
        .text(i => `Conference:${i.conference}`);

    //legend
    svg.append("rect").attr("x",205).attr("y",45).attr("width",145).attr("height",50).attr("fill","white").style("stroke", "black")

    svg.append("rect").attr("x",210).attr("y",50).attr("width",20).attr("height",10).attr("fill","url(#diagonalHatch)").style("stroke", "black")

    svg.append("rect").attr("x",210).attr("y",65).attr("width",20).attr("height",10).attr("fill","url(#dots)").style("stroke", "black")
    svg.append("text").attr("x", 240).attr("y", 55).text("Journal").style("font-size", "10px").attr("font-family","Oxygen Mono").attr("alignment-baseline","middle")
    svg.append("text").attr("x", 240).attr("y", 70).text("Conference").style("font-size", "10px").attr("font-family","Oxygen Mono").attr("alignment-baseline","middle")

    svg.append("circle").attr("cx",220).attr("cy",85).attr("r", 3).style("fill", "black")
    svg.append("line").attr("x1", 210).attr("y1",85).attr("x2",230).attr("y2", 85).attr("stroke","black").attr("stroke-width","1.5")
    svg.append("text").attr("x", 240).attr("y", 85).text("Total Statistics").attr("alignment-baseline","middle").style("font-size", "10px").attr("font-family","Oxygen Mono")

}
