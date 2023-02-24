
      

function LoadStackedIncomeLevel()
{
  
   // set the dimensions and margins of the graph
 var margin = {top: 50, right: 30, bottom: 130, left: 50},
 width = 750 - margin.left - margin.right,
 height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#IncomeLevelBasedStackBar")
.append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.top + margin.bottom)
.append("g")
 .attr("transform",
       "translate(" + margin.left + "," + margin.top + ")");

var ALlTheData=[];
var allIds =[];
var AllDetails=[];
var tooltip = d3.select("#IncomeLevelBasedStackBar")
        .append("div")
        .attr("id","ToolTipId")
          .style("opacity", 0)
          .attr("class", "tooltip")
          .style("background-color", "black")
          .style("border-radius", "5px")
          .style("padding", "10px")
          .attr("font-family", "RobotoSlab")
          .style("color", "white");
    
   
    // Parse the Data
    d3.csv("/DataVisFinalProject/data/stacked_chart_Cent_IncomeLevel.csv", function(data) {
   // d3.csv("/data/stacked_chart_Cent_IncomeLevel.csv", function(data) {
     
   // List of subgroups = header of the csv files = Regions
      var subgroups = data.columns.slice(1)
    
      // List of groups = species here = value of the first column called group -> I show them on the X axis
      var groups = d3.map(data, function(d){return(d.IncomeLevel)}).keys()
    
     
      // Add X axis
      var x = d3.scaleBand()
          .domain(groups)
          .range([0, width])
          .padding([0.2])
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("font-weight", 700)
        .attr("font-size","25px times")
        .attr("font-family", "RobotoSlab")
        .attr("transform", "rotate(-65)" );
        
        svg.append("text")
    .attr("class", "x label")
    .attr("text-anchor", "middle")
    .attr("x", width/2)
    .attr("y", height +115)
    .attr("font-family", "RobotoSlab")
    .text("Income Group Level");
    
    
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 110])
        .range([ height, 0 ]);
      svg.append("g")
        .call(d3.axisLeft(y));
      // Add Y axis label:
      svg.append("text")
          .attr("text-anchor", "end")
          .attr("x", -20)
          .attr("y", -15 )
          .attr("font-family", "RobotoSlab")
          .text("Quantity Of University ")
          .attr("text-anchor", "start")
    
      // color palette = one color per subgroup
      var GetColor=function(subgroup)
      {
       
        if(subgroup=='Active_Private_Special')
        return '#FFF300';
        if(subgroup=='Active_Private_NotSpecial')
        return '#A70D17';
        if(subgroup=='Active_Public_Special')
        return '#FF5E03';
        if(subgroup=='Active_Public_NotSpecial')
        return '#FFFBAF';
        if(subgroup=='DeActive_Private_Special')
        return '#080A86';
        if(subgroup=='DeActive_Private_NotSpecial')
        return '#7624AC';
        if(subgroup=='DeActive_Public_Special')
        return '#CD028C';
        if(subgroup=='DeActive_Public_NotSpecial')
        return '#02FA37';
    
      }
    
      //Fit in The Axis
      dataNormalized = []
      data.forEach(function(d){
        tot = 0
        for (i in subgroups)
        { 
          aname=subgroups[i] ;
          ///Int.parse
           tot += +d[aname] 
          }
        
        for (i in subgroups)
        { aname=subgroups[i] ; 
          d[aname] = d[aname] / tot * 100
        }
      
      })
    
      
    
      //stack the data? --> stack per subgroup
      var stackedData = d3.stack()
        .keys(subgroups)
        (data)
        ALlTheData=stackedData;
      // Show the bars
      svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
          .attr("fill", function(d) { return GetColor(d.key); })
          .selectAll("rect")
          // enter a second time = loop subgroup per subgroup to add all rectangles
          .data(function(d) { return d; })
          .enter().append("rect")
          .on("click", onGraphClick )
            .attr("x", function(d) { return x(d.data.IncomeLevel); })
            .attr("y", function(d) { return y(d[1]); })
            .attr("height", function(d) { return y(d[0]) - y(d[1]); })
            .attr("width",x.bandwidth())
    })
    


function onGraphClick(d)
{
   debugger;
var Active_Private_NotSpecial=d.data.Active_Private_NotSpecial.toFixed(2);
var Active_Private_Special=d.data.Active_Private_Special.toFixed(2);
var Active_Public_NotSpecial=d.data.Active_Public_NotSpecial.toFixed(2);
var Active_Public_Special=d.data.Active_Public_Special.toFixed(2);

var DeActive_Private_NotSpecial=d.data.DeActive_Private_NotSpecial.toFixed(2);
var DeActive_Private_Special=d.data.DeActive_Private_Special.toFixed(2);
var DeActive_Public_NotSpecial=d.data.DeActive_Public_NotSpecial.toFixed(2);
var DeActive_Public_Special=d.data.DeActive_Public_Special.toFixed(2);
var IncomeLevel=d.data.IncomeLevel;
 
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .attr("font-family", "RobotoSlab")
      .html("With IncomeLevel Of  "+ IncomeLevel+" , "+Active_Private_NotSpecial  + " Percent Of Universities Are Active, Private and NotSpecial and "+
      Active_Private_Special + " Percent Of Universities Are  Active, Private and Special and "+
      Active_Public_NotSpecial + " Percent Of Universities Are  Active, Public and NotSpecial and "+
      Active_Public_Special+  " Percent Of Universities Are  Active, Public and Special and "+

      DeActive_Private_NotSpecial +" Percent Of Universities Are  DeActive Private and NotSpecial and "+
      DeActive_Private_Special +" Percent Of Universities Are DeActive Private and Special and "+
      DeActive_Public_NotSpecial +" Percent Of Universities Are  DeActive Public and NotSpecial and "+
      DeActive_Public_Special +" Percent Of Universities Are DeActive Public and Special . "
      )
      .style("display","block")
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("height","600 px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  
  }
}
function DBClickOnDiv()
{
    var t1=document.getElementById('ToolTipId');
    t1.style.display = 'none';
 
}