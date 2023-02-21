
 function openAssignment(evt, cityName) {
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
}

  // Get all elements with class="tablinks" and remove the class "active"
tablinks = document.getElementsByClassName("tablinks");
for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

// Show the current tab, and add an "active" class to the button that opened the tab
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
} 



////////////////////////////Test On JavaScript//////////////////////////
var w = 600;
var h = 250;

var dataset = [                             //dataset is now an array of objects.
                { key: 1, value: 37 },		//Each object has a 'key' and a 'value'.
                { key: 2, value: 35 },
                { key: 3, value: 34 },
                { key: 4, value: 21 },
                { key: 5, value: 24  },
                { key: 6, value: 22  },
                { key: 7, value: 6 },
                { key: 8, value: 5},
                { key: 9, value: 5},
                { key: 10, value: 15  },
                { key: 11, value: 10  },
                { key: 12, value: 13  }
             ];

var xScale = d3.scaleBand()
                .domain(d3.range(dataset.length))
                .rangeRound([0, w])
                .paddingInner(0.05);

var yScale = d3.scaleLinear()
                .domain([0, d3.max(dataset, function(d) { return d.value; })])
                .range([0, h]);

//Define key function, to be used when binding data
var key = function(d) {
    return d.key;
};
    var value = function(d) {
    return d.value;
};
d3.select("body").append("p").text("Hello World!");
//Create SVG element

// var svg = d3.select("#Fifth_Assignment_Id")
//             .append("svg")
//             .attr("width", w)
//             .attr("height", h)
//             ;


// //Create bars
// svg.selectAll("rect")
//    .data(dataset, key)
//    .enter()
//    .append("rect")
//    .attr("x", function(d, i) {
//            return xScale(i);
//    })
//    .attr("y", function(d) {
//            return h - yScale(d.value);
//    })
//    .attr("width", xScale.bandwidth())
//    .attr("height", function(d) {
//            return yScale(d.value);
//    })
//    .attr("fill", function(d) {
//        if(d.value<10)
//        {
//         return "rgb(252,"+(d.value+200)+",127)";
//        }
//         if(d.value>9 & d.value<20)
//        {
//         return "rgb(214,"+(d.value+200)+",229)";
//        }
//         if(d.value>20 & d.value<30)
//        {
//         return "rgb(143,"+(d.value+100)+",253)";
//        }
//        if(d.value>30 & d.value<40)
//        {
//         return "rgb(143,"+(d.value+170)+",253)";
//        }
//    });

// //Create labels
// svg.selectAll("text")
//    .data(dataset, key)
//    .enter()
//    .append("text")
//    .text(function(d) {
//            if(d.key==1)
//            {
//            return "Jan";
//            }
//            if(d.key==2)
//            {
//            return "Feb";
//            }
//            if(d.key==3)
//            {
//            return "Mar";
//            }
//            if(d.key==4)
//            {
//            return "Apr";
//            }
//            if(d.key==5)
//            {
//            return "May";
//            }
//            if(d.key==6)
//            {
//            return "Jun";
//            }
//            if(d.key==7)
//            {
//            return "Jul";
//            }
//            if(d.key==8)
//            {
//            return "Aug";
//            }
//            if(d.key==9)
//            {
//            return "Sept";
//            }
//            if(d.key==10)
//            {
//            return "Oct";
//            }
//            if(d.key==11)
//            {
//            return "Nov";
//            }
//            if(d.key==12)
//            {
//            return "Dec";
//            }
//    })
//    .attr("class","SVGTotal")
//    .attr("x", function(d, i) {
//            return xScale(i) + xScale.bandwidth() / 2;
//    })
//    .attr("y", function(d) {
//            return h - yScale(d.value) + 14;
//    })

  
