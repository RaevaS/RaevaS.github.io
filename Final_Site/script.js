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
        label: "Happy",
        fillColor: "rgba(255,230,57,0)",
        strokeColor: "rgba(255,230,57,1)",
        pointColor: "rgba(255,230,57,1)",
        data: [4, 2, 6, 3, 8, 8, 7]
    }, {
        //sad
        label: "Sad",
        fillColor: "rgba(14,100,232,0)",
        strokeColor: "rgba(14,100,232,1)",
        pointColor: "rgba(14,100,232,1)",
        data: [5, 3, 0, 7, 2, 0, 5]
    },
    {
        //angry
        label: "Angry",
        fillColor: "rgba(191,13,0,0)",
        strokeColor: "rgba(191,13,0,1)",
        pointColor: "rgba(191,13,0,1)",
        data: [4, 7, 1, 7, 4, 5, 0]
    }, {

        //hungry/thirsty
        label: "Hungry/Thirsty",
        fillColor: "rgba(230,170,154,0)",
        strokeColor: "rgba(230,170,154,1)",
        pointColor: "rgba(230,170,154,1)",
        data: [0, 8, 2, 4, 3, 7, 1]
    }],
    options:{
        legend: {
            display: 'true',
            labels:{
                fontColor: 'rgb(255, 255, 255)'
            },
            position: 'bottom',
        },
    },

};

Chart.defaults.global.animationSteps = 80;
Chart.defaults.global.tooltipYPadding = 16;
Chart.defaults.global.tooltipCornerRadius = 0;
Chart.defaults.global.tooltipTitleFontStyle = "normal";
Chart.defaults.global.tooltipFillColor = "rgba(0,160,0,0.8)";
Chart.defaults.global.animationEasing = "easeInSine";
Chart.defaults.global.responsive = true;
Chart.defaults.global.scaleLineColor = "black";
Chart.defaults.global.scaleFontSize = 16;
Chart.defaults.global.legend = true;

var ctx = document.getElementById("canvas").getContext("2d");
var LineChartDemo = new Chart(ctx).Line(lineChartData, {
    pointDotRadius: 10,
    bezierCurve: true,
    scaleShowVerticalLines: false,
    scaleGridLineColor: "black"
}
);