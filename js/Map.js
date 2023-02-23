function OnloadMap()
{
    function GetText(d)
    {
       
      //   d3.csv("/data/MapWorldWithDetail.csv",(data)=>{
           d3.csv("/DataVisFinalProject/data/MapWorldWithDetail.csv",(data)=>{
            debugger;
            var x= data.find(i=>i.code==d.id );
            var CountryFullName=d.properties.name;
      var IncomeLevel=x.name;
      var CountUniversity=x.CountUniversity;
      var FirstUniversityName=x.FirstUniversityName;
      var FoundedFirstUniversity=x.FoundedFirstUniversity;
      var CountUniversityWithB=x.CountUniversityWithB;
      var CountUniversityWithM=x.CountUniversityWithM;
      var CountUniversityWithPHD=x.CountUniversityWithPHD;
      var CountOfPublic=x.CountOfPublic;
      var TotalStudent=x.TotalStudent;
      var CountOfPrivate=x.CountOfPrivate;

      var Text ="First University In Country Of "+CountryFullName+" is "+FirstUniversityName+" Founded In "+FoundedFirstUniversity+". "
      +" There are "+CountUniversity+" Universities in this country where "+CountOfPublic +" of them are Public and "+
      CountOfPrivate+"  of them are Private."+CountUniversityWithB +" Of Universities in this country Offer Bachelor degree programs and "+
      CountUniversityWithM+ " Of Universities in this country Offer Master degree programs and "+
      CountUniversityWithPHD+ " Of Universities in this country Offer PHD programs."+TotalStudent+
      " students were studying at 2020 in "+CountryFullName+".";
    
    document.getElementById("Description").innerHTML = Text;
        })
       
    }
      function onclick  (d) {
debugger;
GetText(d);
   var p=d.properties.name;
   
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .5)
    d3.select(this)
      .transition()
      .duration(200)
      .style("opacity", 1)
      .style("stroke", "black")
   

  }
 function mouseLeave (d) {
    d3.selectAll(".Country")
      .transition()
      .duration(200)
      .style("opacity", .8)
    d3.select(this)
      .transition()
      .duration(200)
      .style("stroke", "transparent")
  }
     let AllData=[];
     let top1;
// The svg
function svgFunction (){

 svg = d3.select("svg"),
  width = +svg.attr("width"),
  height = +svg.attr("height");

// Map and projection
var path = d3.geoPath();
var projection = d3.geoMercator()
  .scale(100)
  .center([10,20])
  .translate([width / 2, height / 2]);

// Data and color scale
var data = d3.map();
// Load external data and boot
d3.queue()
  .defer(d3.json, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson")
//   .defer(d3.csv, "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world_population.csv",
.defer(d3.csv, "/DataVisFinalProject/data/MapWorldWithDetail.csv",
//.defer(d3.csv, "/data/MapWorldWithDetail.csv",
  function(d) {

    data.set(d.code, +d.pop,d.ColorCode);
})
  .await(ready);

function ready(error, topo) {

top1=topo

  var xap=data;
  // Draw the map
    }
   d3.csv("/DataVisFinalProject/data/MapWorldWithDetail.csv",(data)=>{
      //  d3.csv("/data/MapWorldWithDetail.csv",(data)=>{
        // console.log({data},{top1})
    svg.append("g")
    .selectAll("path")
    .data(top1.features)
    .enter()
    .append("path")
  
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
       return data.find(i=>i.code==d.id )?.ColorCode || "red";
    })
    .on("click", onclick )
    .on("mouseleave", mouseLeave )
    
})
}
svgFunction();

function colorData (topo)
{
   //  d3.csv("/data/MapWorldWithDetail.csv",(data)=>{
        d3.csv("/DataVisFinalProject/data/MapWorldWithDetail.csv",(data)=>{
        let svg1 =d3.select("svg")
    svg1.append("g")
    .selectAll("path")
    .data(topo.features)
    .enter()
    .append("path")
      // draw each country
      .attr("d", d3.geoPath()
        .projection(projection)
      )
      // set the color of each country
      .attr("fill", function (d) {
        d.total = data.get(d.id) || 0;
       return data.find(i=>i.popId==d )?.ColorCode || "#FFB6C1";
    })

});
}
}