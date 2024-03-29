
function OnloadBubble(){

// set the dimensions and margins of the graph
var margin = {top: 30, right: 10, bottom:100, left: 70},
    width = 1200 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform","translate(" + margin.left + "," + margin.top + ")");

//Read the data
//d3.csv("/data/Bubble_Top5HighestStudentInEachIncomeGroup_CSV.csv"
d3.csv("/DataVisFinalProject/data/Bubble_Top5HighestStudentInEachIncomeGroup_CSV.csv"
, function(data) {
  // ---------------------------//
  //       AXIS  AND SCALE      //
  // ---------------------------//

  data.forEach(function(d) {
              d.phd_granting= parseInt(d.phd_granting)==1?3:parseInt(d.m_granting)==1?2:1;
              d.students5_estimated_Int=parseInt(d.students5_estimated_Int);
              d.unique_fields=parseInt(d.unique_fields);
            });

  // Add X axis Unique Count Of Course type
  var x = d3.scaleLinear()
    .domain([0, 110])
    .range([ 0, 800 ]);
  svg.append("g")
    .attr("transform", "translate(0," + 550+ ")")
   .call(d3.axisBottom(x).ticks(10));

  // Add X axis label
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", 1050)
      .attr("y",550 )
      .attr("class","Font_For_Title_And_Headings")
      .style("font", "13px times")
      .text("Unique Count Of Course Type");

  // Add Y axis Student Population
  var y = d3.scaleLinear()
    .domain([0, 2675000])
    .range([ 550, 1]);
  svg.append("g")
    .call(d3.axisLeft(y).ticks(15));


  // Add Y axis label:
  svg.append("text")
      .attr("text-anchor", "end")
      .attr("x", 0)
      .attr("y", -20 )
      .style("font", "13px times")
      .text("Student Population")
      .attr("class","Font_For_Title_And_Headings")
      .attr("text-anchor", "start")


  // Add a scale for bubble size which Studey Levels
  var z = d3.scaleSqrt()
    .domain([1, 400])
    .range([ 1,3]);

  // Add a scale for bubble color
  var myColor = d3.scaleOrdinal()
    .domain(["High income", "Upper middle income", "Lower middle income", "Low income"])
    .range(d3.schemeSet1);


  // ---------------------------//
  //      TOOLTIP               //
  // ---------------------------//

  // -1- Create a tooltip div that is hidden by default:
  var tooltip = d3.select("#my_tooltip")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .attr("class","Font_For_Title_And_Headings")
      .style("color", "white")

  // -2- Create 3 functions to show / update (when mouse move but stay on same circle) / hide the tooltip
  var showTooltip = function(d) {
 debugger;
 
    tooltip
      .transition()
      .duration(400)
    tooltip
      .style("opacity", 1)
      .attr("class","Font_For_Title_And_Headings")
      .attr("class", "padding_Top")
      .html("University Of :"+ d.eng_name+ ", In "+d.country+", With Income Level Of : " + d.incomegroup
      + ", Has "+d.students5_estimated_Int +" Studens in "+d.unique_fields+" ,Course Type"+ " ,In Study Levels Of "
      +d.Title_Of_StudyLevel )
      .duration(200)
    }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }


  // ---------------------------//
  //       HIGHLIGHT GROUP      //
  // ---------------------------//

  // What to do when one group is hovered
  var highlight = function(d){
    // reduce opacity of all groups
    d3.selectAll(".bubbles").style("opacity", .05)
    // expect the one that is hovered
    d3.selectAll("."+d).style("opacity", 1)
  }

  // And when it is not hovered anymore
  var noHighlight = function(d){
    d3.selectAll(".bubbles").style("opacity", 1)
  }


  // ---------------------------//
  //       CIRCLES              //
  // ---------------------------//

  // Add dots
  
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("class", function(d) { return "bubbles " + d.incomegroup })
      .attr("cx", function (d) { return x(d.unique_fields); } )
      .attr("r", function (d) { return z(d.phd_granting*6450); } )
      .attr("cy", function (d) { return y(d.students5_estimated_Int); } )
      .style("fill", function (d) { return myColor(d.incomegroup); } )
    // -3- Trigger the functions for hover
    .on("mouseover", showTooltip )
    .on("mousemove", moveTooltip )
    .on("mouseleave", hideTooltip )



    // ---------------------------//
    //       LEGEND              //
    // ---------------------------//

    //Add legend: circles and Lines
    var valuesToShow = [1,2,3]
    var xCircle = 500
    var xLabel = 500
    var LeftLegentStart=890;
    svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("circle")
        .attr("cx", LeftLegentStart)
        .attr("cy", function(d){ return 350 - z(d) } )
        .attr("r", function(d){ return z(d*6450) })
        .style("fill", "none")
        .attr("stroke", "black")

    // Add legend: line
    svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("line")
        .attr('x1', function(d){ return 900 + z(d) } )
        .attr('x2', xLabel+480)
        .attr('y1', function(d){ return 350 - z(d) } )
        .attr('y2', function(d){ return 350+(d*15) } ) 
        .attr('stroke', 'black')
        .style('stroke-dasharray', ('2,2'))

    // Add legend: labels
    svg
      .selectAll("legend")
      .data(valuesToShow)
      .enter()
      .append("text")
        .attr('x', xLabel+480)
        .attr('y', function(d){ return 350+(d*15)}) 
        .text( function(d){ return d } )
        .style("font-size", 10)
        .attr("class","Font_For_Title_And_Headings")
        .attr('alignment-baseline', 'middle')

    // Legend title
    svg.append("text")
      .attr('x', LeftLegentStart-20)
      .attr("y", 320)
      .text("Study Level Amount")
      .attr("class","Font_For_Title_And_Headings")
      .attr("text-anchor", "Start")

    // Add one dot in the legend for each name.
    ///Color on yop right
    var size = 20
    var allgroups = [ "High income","Upper middle income", "Lower middle income", "Low income"]
    svg.selectAll("myrect")
      .data(allgroups)
      .enter()
      .append("circle")
        .attr("cx", LeftLegentStart-10)
        .attr("cy", function(d,i){ return 100 + i*(size+5)})
        .attr("r", 7)
        .style("fill", function(d){ return myColor(d)})
       

    // Add labels beside legend dots With Colors
    svg.selectAll("mylabels")
      .data(allgroups)
      .enter()
      .append("text")
        .attr("x", LeftLegentStart + size*.5)
        .attr("y", function(d,i){ return i * (size + 5)+90 + (size/2)})
        .style("fill", function(d){ return myColor(d)})
        .text(function(d){ return d})
        .attr("text-anchor", "left")
        .attr("class","Font_For_Title_And_Headings")
        .style("alignment-baseline", "middle")
      
         // Legend title
    svg.append("text")
      .attr('x', LeftLegentStart-20)
      .attr("y", 80)
      .text("Color Of Income")
      .attr("class","Font_For_Title_And_Headings")
      .attr("text-anchor", "Start")
  })
}
