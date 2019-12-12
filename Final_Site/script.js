//Chart.js tutorial Shoheen

$(document).ready(function(){
    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
    });
});

var lineChartData = {
    labels: ["Dec 1", "Dec 2", "Dec 3", "Dec 4", "Dec 5", "Dec 6", "Dec 7"],
    datasets: [{
        //happy
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [4, 2, 6, 3, 8, 8, 7]
    }, {
        //sad
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [5, 3, 0, 7, 2, 0, 5]
    },
    {
        //angry
        fillColor: "rgba(255,227,0,0)",
        strokeColor: "rgba(255,227,0,1)",
        pointColor: "rgba(255,227,0,1)",
        data: [4, 7, 1, 7, 4, 5, 0]
    }, {

        //hungry/thirsty
        fillColor: "rgba(255,0,255,0)",
        strokeColor: "rgba(255,0,255,1)",
        pointColor: "rgba(255,0,255,1)",
        data: [0, 8, 2, 4, 3, 7, 1]
    }]

}

Chart.defaults.global.animationSteps = 80;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
Chart.defaults.global.animationEasing = "easeInSine";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;

var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black"
});