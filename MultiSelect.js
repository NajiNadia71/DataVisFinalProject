   
 
 function Waffle_Chart_For_All_Income_Groups()
 {
    var CleanDataSetForWaffleChart=[];
    d3.csv("/data/WaffleChartLAstYearOfUniversities.csv", function(data) {
       
         debugger;
        const Obj = { incomeGroup:"",UniversityWithMaster:0,UniversityWithPhd:0,UniversityWithBachelor:0};
        CleanDataSetForWaffleChart.push(Obj);
        var AllTheHighIncomes=data.filter(x=>x.incomegroup=='High income').map(({ b_granting,phd_granting, m_granting ,eng_name}) =>
         ({ b_granting,phd_granting, m_granting,eng_name}));
         if(AllTheHighIncomes.length!=0)
         {
            const Obj1 = { incomeGroup:'High income',UniversityWithMaster:0,UniversityWithPhd:0,UniversityWithBachelor:0};
            CleanDataSetForWaffleChart.push(Obj1);
            for (var i = 0; i < AllTheHighIncomes.length; i++) {
                var ToUpdateRecordIndex=CleanDataSetForWaffleChart.findIndex(x=>x.incomeGroup=="High income");
                var HasBachelor=data[i].b_granting;
                if(HasBachelor=="1");
                {
                    var x= CleanDataSetForWaffleChart[ToUpdateRecordIndex].UniversityWithBachelor;
                    CleanDataSetForWaffleChart[ToUpdateRecordIndex].UniversityWithBachelor=x+1;
                }
                var HasPhd=data[i].phd_granting;
                if(HasPhd=="1");
                {
                    var P=CleanDataSetForWaffleChart[ToUpdateRecordIndex].UniversityWithPhd;
                    CleanDataSetForWaffleChart[ToUpdateRecordIndex].UniversityWithPhd=P+1;
                }
                var HasMaster=data[i].m_granting;
                if(HasMaster=="1");
                {
                    var M=data[i].m_granting;
                    CleanDataSetForWaffleChart[ToUpdateRecordIndex].UniversityWithMaster=M+1;
                }
           }  

        }
      
 })
 }

function WaffleChartLastYear()
{
    var  UniversityList=[];
    var filteredRegion=FilteredRegion;
    var filteredIncomeLevel=FilteredIncomeLevel;
    var filteredCountry=FilteredCountry;
    
    if(filteredCountry!='')
    {
       
     d3.csv("/data/WaffleChartLAstYearOfUniversities.csv", function(data) {
        data.forEach(function(d) {
           
            d.country=d.country;
          if(d.country==filteredCountry)
          {
            debugger;
           
            d.b_granting=d.b_granting;
            d.phd_granting=d.phd_granting;
            d.m_granting=d.m_granting;
            d.incomeGroup=d.incomeGroup;
            d.region=d.region;
            d.eng_name=d.eng_name;
            d.students5_estimated =parseInt(d.students5_estimated); 
            d.students5_estimated=d.students5_estimated; 
            var country=d.country;
            var b_granting=d.b_granting;
            var phd_granting=d.phd_granting;
            var m_granting=d.m_granting;
            var region=d.region;
            var eng_name=d.eng_name;
            var incomegroup=d.incomegroup;
            var students5_estimated=d.students5_estimated; 
            debugger
            const Obj = {country:country,incomegroup:incomegroup, b_granting:b_granting, phd_granting:phd_granting,
                region:region,eng_name:eng_name,students5_estimated:students5_estimated,
                m_granting:m_granting};
                UniversityList.push(Obj);
          }
          })
        }
        );
        debugger;
        var l=UniversityList.length;
        console.log(UniversityList);
    }
    if(filteredIncomeLevel!=''&&filteredRegion=='')
    {
     
        d3.csv("/data/WaffleChartLAstYearOfUniversities.csv", function(data) {
        data.forEach(function(d) {
           
            d.incomeGroup=d.incomeGroup;
          if(d.incomeGroup==filteredIncomeLevel)
          {
            debugger;
           
            d.b_granting=d.b_granting;
            d.phd_granting=d.phd_granting;
            d.m_granting=d.m_granting;
            d.incomeGroup=d.incomeGroup;
            d.region=d.region;
            d.eng_name=d.eng_name;
            d.students5_estimated =parseInt(d.students5_estimated); 
            d.students5_estimated=d.students5_estimated; 
            var country=d.country;
            var b_granting=d.b_granting;
            var phd_granting=d.phd_granting;
            var m_granting=d.m_granting;
            var region=d.region;
            var eng_name=d.eng_name;
            var incomegroup=d.incomegroup;
            var students5_estimated=d.students5_estimated; 
            const Obj = {country:country,incomegroup:incomegroup, b_granting:b_granting, phd_granting:phd_granting,
                region:region,eng_name:eng_name,students5_estimated:students5_estimated,
                m_granting:m_granting};
                UniversityList.push(Obj);
          }
          })
        }
        );
        debugger;
        var l=UniversityList.length;
        console.log(UniversityList);
    }
    if(filteredRegion=='' && filteredIncomeLevel=='' && filteredCountry=='')
    { ///دسته بندی درامد

        document.getElementById("AreaForWaffleCharts").innerHTML = "";
        var total = 0;
        var width = 15;
         var height,
           widthSquares = 15,
           heightSquares = 5,
           squareSize = 25,
           squareValue = 0,
           gap = 1;
       
         var color = d3.scaleOrdinal(d3.schemeCategory10);
       
         d3.select("#AreaForWaffleCharts").append("div").attr("id", "legends");
       
         d3.select("#AreaForWaffleCharts").append("div").attr("id", "WaffleForNoFilter");
       
         d3.csv("/data/WaffleForNoFilterChoosen.csv", function (error, data) {
       
           let DataJson = JSON.parse(JSON.stringify(data));
       
           let isCheck = false
       
           for (let i = 0; i < DataJson.length; i++) {
             var theData = [];
             let clean_data = DataJson[i]
       
             let key_title = 'regionName'
             let value_title = clean_data[key_title]
             delete clean_data['Total']
             delete clean_data[key_title]
       
             let key_data = Object.keys(clean_data)
             let value_data = Object.values(clean_data)
       
             chart_data = []
       
             for (let i = 0; i < key_data.length; i++) {
               chart_data.push({
                 [key_title]: key_data[i],
                 [value_title]: parseFloat(value_data[i])
               });
             }
             debugger;
             total = d3.sum(chart_data, function (d) { return d[value_title]; });
             //value of a square  
             //remap data
             squareValue = total / (widthSquares * heightSquares);
             chart_data.forEach(function (d, i) {
               d[value_title] = +d[value_title];
               d.units = Math.round(d[value_title] / squareValue);
               theData = theData.concat(
                 Array(d.units + 1).join(1).split('').map(function () {
                   return {
                     squareValue: squareValue,
                     units: d.units,
                     [value_title]: d[value_title],
                     groupIndex: i
                   };
                 })
               );
             });
       
       
             width = (squareSize * widthSquares) + widthSquares * gap + 25;
             height = (squareSize * heightSquares) + heightSquares * gap + 25;
       
             var waffle = d3.select("#WaffleForNoFilter").append("svg")
               .attr("width", "363px")
               .style("margin-right", "5px")
               .append("g").attr("class", value_title)
               .selectAll("div")
               .data(theData)
               .enter()
               .append("rect")
               .attr("width", squareSize)
               .attr("height", squareSize)
               .attr("fill", function (d) {
                 return color(d.groupIndex);
               })
               .attr("x", function (d, i) {
                 //group n squares for column
                 col = Math.floor(i / heightSquares);
                 return (col * squareSize) + (col * gap);
               })
               .attr("y", function (d, i) {
                 row = i % heightSquares;
                 return (heightSquares * squareSize) - ((row * squareSize) + (row * gap))
               })
               .append("title")
               .text(function (d, i) {
                 return "region: " + chart_data[d.groupIndex][key_title] + " | " + d[value_title] + " , " + d.units + "%"
               });
       
             let label = value_title.split(' ')
       
             var title = d3.select("." + label[0]).insert("text")
               .attr('y', '18')
               .attr('font-size', '18px')
               .text(value_title)
               .attr("fill", "#444444");
           }
       
           //add legend with categorical data
           var legend = d3.select("#legends")
             .append("svg")
             .append('g')
             .selectAll("div")
             .data(chart_data)
             .enter()
             .append("g")
             .attr('transform', function (d, i) { return "translate(0," + i * 20 + ")"; });
           legend.append("rect")
             .attr("width", 18)
             .attr("height", 18)
             .style("fill", function (d, i) { return color(i) });
           legend.append("text")
             .attr("x", 25)
             .attr("y", 13)
             .text(function (d, i) {
               return d['regionName']
             });
       
         })
       ;
       
     // 4 dataset for 4 Waffle chart



//      debugger;
//      creatInitialDivs(10);
//      var DataForHighIncome;
//      var DataForLowIncome;
//      var DataForLowerMiddleIncom;
//      var DataForUpperMiddleIncome;
//         d3.csv("/data/WaffleChartLAstYearOfUniversities.csv", function(data) {
//             data.forEach(function(d) {
//             d.StudyLevelStatusID= parseInt(d.StudyLevelStatusID) ,
//             d.ColorCode=d.ColorCode,
//             d.incomeGroup=d.incomeGroup,
//             d.StudyLevelStatusID=d.StudyLevelStatusID;
//             d.ColorCode=d.ColorCode;
//             d.m_granting=d.m_granting;
//             d.country=d.country;
//             d.region=d.region;
//             d.eng_name=d.eng_name;
           
//             var country=d.country;
//             var StudyLevelStatusID=d.StudyLevelStatusID;
//             var ColorCode=d.ColorCode;
//             var incomeGroup=d.incomeGroup;
//             var region=d.region;
//             var eng_name=d.eng_name;
            
//             const Obj = {country:country,incomegroup:incomeGroup, StudyLevelStatusID:StudyLevelStatusID
//                 , ColorCode:ColorCode,
//                 region:region,eng_name:eng_name};
               
//           if(d.incomeGroup=='Lower middle income')
//           {
//             DataForLowerMiddleIncom.push(Obj);
         
//         };
//           if(d.incomeGroup=='Low income')
//           {
//             DataForLowIncome.push(Obj);
//           };
//           if(d.incomeGroup=='Upper middle income')
//           {
//             DataForUpperMiddleIncome.push(Obj);
//           }
//           if(d.incomeGroup='High income')
//           {
//             DataForHighIncome.push(Obj);
//           }
   
//                  })
//                  })
//      ///NN Start Creating First WaffleChart 
     
// var margin = {top:10,right:150,bottom:30,left:0},
//     width  = 600 - margin.left - margin.right,
//     height = 700 - margin.top - margin.bottom,
//     boxSize = 20, //size of each box
//     boxGap = 3, //space between each box
//     howManyAcross = Math.floor(width / boxSize);
  
// var svg = d3.select("#AreaForWaffleCharts")
//     .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//     .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom));
//     var categoryHeading = "VEHTYPE_AT_FAULT"

//    var g = svg.append("g")
//     .attr("transform","translate(" + margin.left + "," + margin.top + ")");

//      //rainbow colors
//      var colors = d3.scaleSequential(d3.interpolateCubehelixDefault);
  
//     DataForLowerMiddleIncom.sort(function(a,b){ return d3.ascending(a[StudyLevelStatusID], b[StudyLevelStatusID])});
//         //get all of the unique values in the column for the scale
//      var keys = d3.map(DataForLowerMiddleIncom, function(d){ return d[StudyLevelStatusID];}).keys();
//      //set domain on category
//      colors.domain([0, keys.length]);
     
//      //convert to a categorical scale
//      var categoryScale = d3.scaleOrdinal(keys.map(function(d, i){ return colors(i);}));
//      categoryScale.domain(keys);//set the scale domain
     
// //make the main chart
// g.selectAll(".square")
//          .data(data)
//          .enter()
//          .append("rect")
//          .attr("class", "square")
//          .attr("x", function(d,i){ return boxSize * (i % howManyAcross); })
//          .attr("y", function(d,i){ return Math.floor(i/howManyAcross) * boxSize; })
//          .attr("width", boxSize - 3)
//          .attr("height", boxSize - 3)
//          .attr("fill", function(d){ return categoryScale(d[categoryHeading]);})
//          .exit();
     
     
//      //legend
//      var legend = svg.selectAll(".legend")
//          .data(keys)
//          .enter();
     
     
//      legend.append("rect")
//          .attr("x", margin.left + width + boxGap )
//          .attr("y", function(d,i){ return (i * boxSize) + margin.top; })
//          .attr("width", boxSize - 3)
//          .attr("height", boxSize - 3)
//          .attr("fill", function(d){ return categoryScale(d); })
     
//      legend.append("text")
//          .attr("x", margin.left + width + boxSize + (boxGap*2))
//          .attr("y", function(d,i){ return (i * boxSize) + margin.top; })
//          .append("tspan")
//          .attr("dx", 0)
//          .attr("dy", boxSize/2)
//          .style("alignment-baseline", "middle")
//          .style("font-size", 10)
//          .style("font-family", "Helvetica, Arial, sans-serif")
//          .text(function(d){ return d;})
    }    
    if(filteredIncomeLevel!=''&&filteredIncomeLevel!='')
    {
        d3.csv("/data/WaffleChartLAstYearOfUniversities.csv", function(data) {
        data.forEach(function(d) {
            d.incomeGroup=d.incomeGroup;
            d.region=d.region;
          if(d.incomeGroup==filteredIncomeLevel && d.region==filteredRegion )
          {
            debugger;
           
            d.b_granting=d.b_granting;
            d.phd_granting=d.phd_granting;
            d.m_granting=d.m_granting;
            d.incomeGroup=d.incomeGroup;
            d.region=d.region;
            d.eng_name=d.eng_name;
            d.students5_estimated =parseInt(d.students5_estimated); 
            d.students5_estimated=d.students5_estimated; 
            var country=d.country;
            var b_granting=d.b_granting;
            var phd_granting=d.phd_granting;
            var m_granting=d.m_granting;
            var region=d.region;
            var eng_name=d.eng_name;
            var incomegroup=d.incomegroup;
            var students5_estimated=d.students5_estimated; 
            const Obj = {country:country,incomegroup:incomegroup, b_granting:b_granting, phd_granting:phd_granting,
                region:region,eng_name:eng_name,students5_estimated:students5_estimated,
                m_granting:m_granting};
                UniversityList.push(Obj);
          }
          })
        }
        );
        debugger;
        var l=UniversityList.length;
        console.log(UniversityList);
    }
}
///div های لازم برای ایجاد تعداد waffle charts
// Id 10 Means Create 4 Div for 4 Income Level
function creatInitialDivs(Id)
{
    if(Id==10){
        // var HighIncome = document.createElement("div");
        // HighIncome.setAttribute("id", "HighIncome");
        // HighIncome.setAttribute("class", "col-sm-3");
        // var UpperMiddleIncome = document.createElement("div");
        // UpperMiddleIncome.setAttribute("id", "UpperMiddleIncome");
        // UpperMiddleIncome.setAttribute("class", "col-sm-3");
        // var LowIncome = document.createElement("div");
        // LowIncome.setAttribute("id", "LowIncome");
        // LowIncome.setAttribute("class", "col-sm-3");
        // var LowerMiddleIncome = document.createElement("div");
        // LowerMiddleIncome.setAttribute("id", "LowerMiddleIncome");
        // LowerMiddleIncome.setAttribute("class", "col-sm-3");
        // document.getElementById('AreaForWaffleCharts').appendChild(HighIncome);
        // document.getElementById('AreaForWaffleCharts').appendChild(UpperMiddleIncome);
        // document.getElementById('AreaForWaffleCharts').appendChild(LowIncome);
        // document.getElementById('AreaForWaffleCharts').appendChild(LowerMiddleIncome);
    }

}