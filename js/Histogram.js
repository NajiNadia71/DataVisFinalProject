function onLoadGraph(){
  onLoadGraph();

   //////////////////////////////////Income Level Part //////////////////////////////////
   function onLoadGraph(){
    
            // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevel")
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

  //  function to data to get the bins.
  var bins1 = histogram(data.filter( function(d){return d.incomegroup === "Low income"} ));
  var bins2 = histogram(data.filter( function(d){return d.incomegroup === "Lower middle income"} ));
  var bins3 = histogram(data.filter( function(d){return d.incomegroup === "Upper middle income"} ));
  var bins4 = histogram(data.filter( function(d){return d.incomegroup === "High income"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,450]);  
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
       .style("fill", "#E01429")
        .attr("class","Low_income_C")
        .attr("id","Low_income_C")
     .on("click", onGraphClickIncome )
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
        .style("fill", "#FFF300")
        .attr("id","Lower_middle_income_C")
        .attr("class","Lower_middle_income_C")
        .on("click", onGraphClickIncome )
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
        .style("fill", "#6AF688")
        .attr("id","Upper_middle_income_C")
        .attr("class","Upper_middle_income_C")
        .on("click", onGraphClickIncome )
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
        .attr("class","High_income_C")
        .on("click", onGraphClickIncome )
        .style("opacity", 0.6)


  
});

}
}
function removeSVG()
{
  d3.selectAll('svg').remove();
}
   function onGraphClickIncome(d){
      debugger;
      var IncomeLevel=d[1].incomegroup;
      alert(IncomeLevel);
      var ClassNameOfSelected= GetClassNameIncome(IncomeLevel);
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
   function GetClassNameIncome(IncomeLevel)
     {
      
       if(IncomeLevel=='Low income')
       {
        return ['Low_income_C',-1];
       }
       if(IncomeLevel=='Lower middle income')
       {
        return ['Lower_middle_income_C',-2];
       }
       
       if(IncomeLevel=='Upper middle income')
       {
       return ['Upper_middle_income_C',-3];
       }
       
       if(IncomeLevel=='High income')
       {
        return ['High_income_C',-4];
       }
     
     }
  function ShowLowIncome()
    {
      debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevel")
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
  var bins1 = histogram(data.filter( function(d){return d.incomegroup === "Low income"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,450]);  
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
       .style("fill", "#E01429")
        .attr("class","Low_income_C")
        .attr("id","Low_income_C")
     .on("click", onGraphClickIncome )
        .style("opacity", 0.6)    




 } )
    }
  function ShowLowerMiddleIncome()
  {
    
    debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevel")
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
  var bins2 = histogram(data.filter( function(d){return d.incomegroup === "Lower middle income"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,450]);  
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
        .style("fill", "#FFF300")
        .attr("id","Lower_middle_income_C")
        .attr("class","Lower_middle_income_C")
        .on("click", onGraphClickIncome )
        .style("opacity", 0.6)
  })
}
  function ShowUpperMiddleIncome()
  {

    debugger;
      d3.selectAll('svg').remove();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevel")
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
  var bins3 = histogram(data.filter( function(d){return d.incomegroup === "Upper middle income"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,450]);  
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
        .style("fill", "#6AF688")
        .attr("id","Upper_middle_income_C")
        .attr("class","Upper_middle_income_C")
        .on("click", onGraphClickIncome )
        .style("opacity", 0.6)
  })
  }
  function ShowHighIncome()
  {
    removeSVG();

         // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
    width = 900 - margin.left - margin.right,
    height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevel")
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
  // X axis: scale and draw:
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
  var bins4 = histogram(data.filter( function(d){return d.incomegroup === "High income"} ));
  // Y axis: scale and draw:
  var y = d3.scaleLinear()
      .range([height, 0]);
      y.domain([0,450]);  
  svg.append("g")
      .call(d3.axisLeft(y));

          // // append the bars for series 1
           
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
        .attr("class","High_income_C")
        .on("click", onGraphClickIncome )
        .style("opacity", 0.6)

  })
  }

  function Compare()
{
  debugger;
    d3.selectAll('svg').remove();
                    // set the dimensions and margins of the graph
var margin = {top: 20, right: 30, bottom: 30, left: 50},
  width = 900 - margin.left - margin.right,
  height = 580 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevel")
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
    var LowIncomeId=document.getElementById("LowIncomeId").checked;
    if(LowIncomeId)
    {
  
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
var bins1 = histogram(data.filter( function(d){return d.incomegroup === "Low income"} ));
// Y axis: scale and draw:
var y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([0,450]);  
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
     .style("fill", "#E01429")
      .attr("class","Low_income_C")
      .attr("id","Low_income_C")
   .on("click", onGraphClickIncome )
      .style("opacity", 0.6)    




} )
    }
    var LowerMiddleIncomeId=document.getElementById("LowerMiddleIncomeId").checked;
    if(LowerMiddleIncomeId)
    {
    
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
var bins2 = histogram(data.filter( function(d){return d.incomegroup === "Lower middle income"} ));
// Y axis: scale and draw:
var y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([0,450]);  
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
      .style("fill", "#FFF300")
      .attr("id","Lower_middle_income_C")
      .attr("class","Lower_middle_income_C")
      .on("click", onGraphClickIncome )
      .style("opacity", 0.6)
})
    }
    var UpperMiddleIncomeId=document.getElementById("UpperMiddleIncomeId").checked;
    if(UpperMiddleIncomeId)
    {
    
// get the data
//d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
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
var bins3 = histogram(data.filter( function(d){return d.incomegroup === "Upper middle income"} ));
// Y axis: scale and draw:
var y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([0,450]);  
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
      .style("fill", "#6AF688")
      .attr("id","Upper_middle_income_C")
      .attr("class","Upper_middle_income_C")
      .on("click", onGraphClickIncome )
      .style("opacity", 0.6)
})
    }
    var HighIncomeId=document.getElementById("HighIncomeId").checked;
    if(HighIncomeId)
    {


// get the data
//d3.csv("/data/University_Founded_Year_Histogram.csv", function(data) {
d3.csv("/DataVisFinalProject/data/University_Founded_Year_Histogram.csv", function(data) {
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
var bins4 = histogram(data.filter( function(d){return d.incomegroup === "High income"} ));
// Y axis: scale and draw:
var y = d3.scaleLinear()
    .range([height, 0]);
    y.domain([0,450]);  
svg.append("g")
    .call(d3.axisLeft(y));

        // // append the bars for series 1
         
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
      .attr("class","High_income_C")
      .on("click", onGraphClickIncome )
      .style("opacity", 0.6)

})
    }
 
  }
 
