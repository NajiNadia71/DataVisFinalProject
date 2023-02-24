
function HistogramTwo(){
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
   // d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })   // I need to give the vector of value
      .domain(x.domain())  // then the domain of the graphic
      .thresholds(x.ticks(40)); // then the numbers of bins

  // And apply twice this function to data to get the bins.
  var bins1 = histogram(data.filter( function(d){return d.region === "North America"} ));
  var bins2 = histogram(data.filter( function(d){return d.region === "Latin America and Caribbean"} ));
  var bins3 = histogram(data.filter( function(d){return d.region === "East Asia and Pacific"} ));
  var bins4 = histogram(data.filter( function(d){return d.region === "Europe and Central Asia"} ));
  var bins5 = histogram(data.filter( function(d){return d.region === "Middle East and North Africa"} ));
  var bins6 = histogram(data.filter( function(d){return d.region === "South Asia"} ));
  var bins7 = histogram(data.filter( function(d){return d.region === "Sub-Saharan Africa"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

  svg.selectAll("rect1")
      .data(bins1)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
       .style("fill", "#7624AC")
        .attr("class","North_America_C")
        .attr("id","North_America_C")
     .on("click", onGraphClick )
        .style("opacity", 0.6)    


  // // append the bars for series 2
  svg.selectAll("rect2")
      .data(bins2)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#FF5E03")
        .attr("id","Latin_America_And_Caribbean_C")
        .attr("class","Latin_America_And_Caribbean_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)

          // // append the bars for series 1
  svg.selectAll("rect3")
      .data(bins3)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#E01429")
        .attr("id","East_Asia_and_Pacific_C")
        .attr("class","East_Asia_and_Pacific_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)
      
  // append the bars for series 2
  svg.selectAll("rect4")
      .data(bins4)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#6467F1")
        .attr("class","Europe_and_Central_Asia_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)

  // append the bars for series 1
  svg.selectAll("rect5")
      .data(bins5)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#6AF688")
        .attr("class","Middle_East_and_North_Africa_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)

  // append the bars for series 2
  svg.selectAll("rect6")
      .data(bins6)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#FFF300")
        .attr("class","South_Asia_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)

          // append the bars for series 2
  svg.selectAll("rect7")
      .data(bins7)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#F061C2")
        .attr("class","Sub_Saharan_Africa_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)

  
});

}
    function ShowNorthAmerica()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
   // d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })   
      .domain(x.domain()) 
      .thresholds(x.ticks(40)); 
  // And apply twice this function to data to get the bins.
  var bins1 = histogram(data.filter( function(d){return d.region === "North America"} ));
  
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

      svg.selectAll("rect1")
      .data(bins1)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
       .style("fill", "#7624AC")
        .attr("class","North_America_C")
        .attr("id","North_America_C")
     .on("click", onGraphClick )
        .style("opacity", 0.6) 



});

    }
    function ShowLatinAmericaAndCaribbean()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
  //  d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })   
      .domain(x.domain())  
      .thresholds(x.ticks(40)); 

  // And apply twice this function to data to get the bins.
  var bins2 = histogram(data.filter( function(d){return d.region === "Latin America and Caribbean"} ));
  
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));


  // // append the bars for series 2
  svg.selectAll("rect2")
      .data(bins2)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#FF5E03")
        .attr("id","Latin_America_And_Caribbean_C")
        .attr("class","Latin_America_And_Caribbean_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)



 } );
    }
    function ShowEastAsiaAndPacific()
    {
      
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          
          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
 //   d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     // can use this instead of 1000 to have the max of data: d3.max(data, function(d) { return +d.price })
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })   // I need to give the vector of value
      .domain(x.domain())  // then the domain of the graphic
      .thresholds(x.ticks(40)); // then the numbers of bins

  // And apply twice this function to data to get the bins.
  var bins3 = histogram(data.filter( function(d){return d.region === "East Asia and Pacific"} ));
  
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

       // // append the bars for series 1
       svg.selectAll("rect3")
      .data(bins3)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#E01429")
        .attr("id","East_Asia_and_Pacific_C")
        .attr("class","East_Asia_and_Pacific_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)



 } );
    }
    function ShowEuropeAndCentralAsia ()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
   //d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })   
      .domain(x.domain())  
      .thresholds(x.ticks(40)); 

  // And apply twice this function to data to get the bins.
  var bins4 = histogram(data.filter( function(d){return d.region === "Europe and Central Asia"} ));
  
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

       // // append the bars for series 1
       svg.selectAll("rect4")
      .data(bins4)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#6467F1")
        .attr("class","Europe_and_Central_Asia_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)




 } )
    }
    function ShowMiddleEastAndNorthAfrica()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
   // d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })  
      .domain(x.domain())  
      .thresholds(x.ticks(40)); 

  // And apply twice this function to data to get the bins.
  var bins5 = histogram(data.filter( function(d){return d.region === "Middle East and North Africa"} ));
  
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

       // append the bars for series 1
  svg.selectAll("rect5")
      .data(bins5)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#6AF688")
        .attr("class","Middle_East_and_North_Africa_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)




 } )
    }
    function ShowSouthAsia()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
//d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {

  var x = d3.scaleLinear()
      .domain([1910,2023])    
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })   // I need to give the vector of value
      .domain(x.domain())  // then the domain of the graphic
      .thresholds(x.ticks(40)); // then the numbers of bins

  // And apply twice this function to data to get the bins.
  var bins6 = histogram(data.filter( function(d){return d.region === "South Asia"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

  // append the bars for series 2
  svg.selectAll("rect6")
      .data(bins6)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#FFF300")
        .attr("class","South_Asia_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)




 } )
    }
    function ShowSub_SaharanAfrica()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#Region")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
          

          svg.append("text")
          .attr("x", (width / 2))             
          .attr("y", 50)
          .attr("text-anchor", "middle")  
          .style("font-size", "16px")
          .attr("class", "Font_For_Title_And_Headings") 
          .style("text-decoration", "bold")  
          .attr("font-family", "RobotoSlab")
          .text("Count Of Universities VS Year Graph");

// get the data
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
  //  d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
  // X axis: scale and draw:
  var x = d3.scaleLinear()
      .domain([1910,2023])     
      .range([0, width]);
  svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x));

  // set the parameters for the histogram
  var histogram = d3.histogram()
      .value(function(d) { return +d.foundedyr; })  
      .domain(x.domain())  
      .thresholds(x.ticks(40)); 
      
  // And apply twice this function to data to get the bins.
  var bins7 = histogram(data.filter( function(d){return d.region === "Sub-Saharan Africa"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,300]);  
  svg.append("g")
      .call(d3.axisLeft(y));

            // append the bars for series 2
            svg.selectAll("rect7")
      .data(bins7)
      .enter()
      .append("rect")
        .attr("x", 1)
        .attr("transform", function(d) { return "translate(" + x(d.x0) + "," + y(d.length) + ")"; })
        .attr("width", function(d) { return x(d.x1) - x(d.x0) -1 ; })
        .attr("height", function(d) { return height - y(d.length); })
        .style("fill", "#F061C2")
        .attr("class","Sub_Saharan_Africa_C")
        .on("click", onGraphClick )
        .style("opacity", 0.6)




 } )
    }
    function GetClassName(RegionName)
     {
      
       if(RegionName=='North America')
       {
        return ['North_America_C',-1];
       }
       if(RegionName=='Europe and Central Asia')
       {
        return ['Europe_and_Central_Asia_C',-2];
       }
       
       if(RegionName=='Latin America and Caribbean')
       {
       return ['Latin_America_And_Caribbean_C',-3];
       }
       
       if(RegionName=='East Asia and Pacific')
       {
        return ['East_Asia_and_Pacific_C',-4];
       }
       if(RegionName=='Middle East and North Africa')
       {
    return ['Middle_East_and_North_Africa_C',-5];
       }
       
       if(RegionName=='South Asia')
       {
        return ['South_Asia_C',-6];
       }
       
       if(RegionName=='Sub-Saharan Africa')
       {
return ['Sub_Saharan_Africa_C',-7];
       }
     }
    function onGraphClick(d)
    {
      debugger;
      var Region=d[1].region;
      alert(Region);
      var ClassNameOfSelected= GetClassName(Region);
      var ClassName=ClassNameOfSelected[0];
      var Z_IndexFor=ClassNameOfSelected[1];
      Array.from(document.getElementsByClassName(ClassName)).forEach(
    function(element, index, array) {
    
        var AllArray=array;
       for  ( var It in AllArray )
       {
        debugger;
        var x=AllArray[It];
        $(x).remove();

  d3.select(x).select("svg").remove();
  d3.select(x).remove();
  
       }
    }
);
 
    }
