var tooltip = d3.select("#my_dataviz")
.append("div")
  .style("opacity", 0)
  .attr("class", "tooltip")
  .style("background-color", "black")
  .style("border-radius", "5px")
  .style("padding", "10px")
  .style("color", "white");

var allIds =[];
var AllDetails=[];

function LoadMultiLineGraph(){


// set the dimensions and margins of the graph
var margin = {top: 20, right: 15, bottom: 20, left: 55},
width = 1100 - margin.left - margin.right,
height = 580 - margin.top - margin.bottom;
// append the svg object to the body of the page
var svg = d3.select("#my_dataviz")
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform",
      "translate(" + margin.left + "," + margin.top + ")");
//Read the data
d3.csv("/DataVisFinalProject/data/LineGraphOldestUniversity.csv", function(data) {
data.forEach(function(d) {


          d.yearint= parseInt(d.year);
          d.students5_estimatedint=parseInt(d.students5_estimated); 
          d.eng_name=d.eng_name;
          d.a=d.ColorCode;
          d.ColorCode="#"+d.ColorCode; 
          d.country=d.country;
          d.foundedyear=d.foundedyr;

     });
     AllDetails = data;

// Add X axis --> it is a date format
var x = d3.scaleLinear().domain([1940,2030]).range([ 0, 800 ]);
svg.append("g").attr("transform", "translate(0,540)").call(d3.axisBottom(x).ticks(20));
// Add X axis label:
svg.append("text")
  .attr("text-anchor", "end")
  .attr("x", 850)
  .attr("y", height )
  .attr("class","Font_For_Title_And_Headings")
  .attr("font-family", "RobotoSlab")
  .text("Year");

// Add Y axis
var y = d3.scaleLinear().domain([0,430000]).range([ height, 0 ]);
svg.append("g").call(d3.axisLeft(y).ticks(20));
// Add Y axis label:
svg.append("text")
  .attr("text-anchor", "end")
  .attr("x", 15)
  .attr("y", 15 )
  .attr("class","Font_For_Title_And_Headings")
  .attr("font-family", "RobotoSlab")
  .text("Student Population")
  .attr("text-anchor", "start")

// color palette
var sumstat = d3.nest() // nest function allows to group the calculation per level of a factor
.key(function(d) { return d.ColorCode;})
.entries(data);

var res = sumstat.map(function(d){ return d.key}) // list of group names

///Fill public Array
allIds=res;
// debugger;
function returncolor(a)
{
  return a;
  
}



// Draw the line1
svg.selectAll(".line")
  .data(sumstat)
  .enter()
  .append("path")
    .attr("fill", "none")
.attr("stroke", function(d){ return returncolor(d.key) })
  .on("click", popupclick )
    .attr("stroke-width", 1.5)
    .attr("id",function(d){ return returncolor(d.key) })
    .attr("d", function(d){
      return d3.line()
        .x(function(d) { return x(d.yearint); })
        .y(function(d) { return y(d.students5_estimatedint); })
        (d.values)
    })

})
}


function LatinAmericaClick()
{
allIds.forEach(function(item)
{
debugger;

var x=item;
if(item=='#FF5E03'|| item=='#F5892A' || item=='#F7A77A'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}
function SouthAsiaClick()
{
allIds.forEach(function(item)
{
debugger;
 var x=item;
if(item=='#FFFBAF'|| item=='#FFF300' || item=='#FFF642'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}

function MiddleEastClick()
{
allIds.forEach(function(item)
{
debugger;
 var x=item;
if(item=='#6AF688'|| item=='#056319' || item=='#02FA37'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}

function EuropeClick()
{
allIds.forEach(function(item)
{
debugger;
 var x=item;
if(item=='#6467F1'|| item=='#D1D2FF' || item=='#080A86'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}

function NorthAmericaClick()
{
allIds.forEach(function(item)
{
debugger;
 var x=item;
if(item=='#B86BED'|| item=='#DEC4F0' || item=='#7624AC'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}
function EastAsiaClick()
{
var EastAsiaColorCodes=['#A70D17','#F28D93','#E01429'];
allIds.forEach(function(item)
{
debugger;
 var x=item;
if(item=='#A70D17'|| item=='#F28D93' || item=='#E01429'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}

function SaharanAfricaClick()
{
var SaharanAfricaColorCodes=['#F79DDA','#CD028C','#F061C2'];
allIds.forEach(function(item)
{
debugger;
 var x=item;
if(item=='#F79DDA'|| item=='#CD028C' || item=='#F061C2'){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

}
function popupclick(d)
{
var UniversityName="",Country="",Region="",FounderYesr="",StudentPopulationAt1950="",StudentPopulationAt2020="";
var SelectedItemDetail=AllDetails.find(i=>i.ColorCode==d.key);
UniversityName=SelectedItemDetail.eng_name;
Country=SelectedItemDetail.country;
Region=SelectedItemDetail.region;
FounderYesr=SelectedItemDetail.foundedyear;
StudentPopulationAt1950=AllDetails.find(i=>i.ColorCode==d.key && i.year==1950).students5_estimated;
StudentPopulationAt2020=AllDetails.find(i=>i.ColorCode==d.key && i.year==2020).students5_estimated;

var selecteditem=d;
var selecteditemk=d.key;

allIds.forEach(function(item)
{

if(item==selecteditemk){
  document.getElementById(item).style.opacity=1;
}
else{
document.getElementById(item).style.opacity=0;
}});

tooltip
  .transition()
  .duration(200)
tooltip
  .style("opacity", 1)
  .html("University Of "+ UniversityName+ ", at  "+ Region+" Region, In "+ Country +
  " Founded in "
   +FounderYesr+". In 1950 , "+StudentPopulationAt1950 +
   " Students Were Studying at this University and By 2020, "+
   StudentPopulationAt2020+ " Students Start Education at this University ."
  )
  .style("left", (d3.mouse(this)[0]+30) + "px")
  .style("top", (d3.mouse(this)[1]+30) + "px")
}
function DBClickOnDiv()
{
tooltip
  .transition()
  .duration(200)
  .style("opacity", 0) 
allIds.forEach(function(item1)
{
debugger;
  document.getElementById(item1).style.opacity=1;
})
}

