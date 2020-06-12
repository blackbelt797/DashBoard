window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2",
        title:{
            text: "Finance Chart"
      },
      axisX:{
        valueFormatString: "DD,MMM"
        
      },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "column",
              indexLabelFontSize: 12,
            dataPoints: [
          { x:new Date(2020,01), y: 3300 },
          { x:new Date(2020,01), lable:"youtube", y:3000},
                { x:new Date(2020,02), y: 2800, indexLabel: "\u2193 lowest",markerColor: "DarkSlateGrey", markerType: "cross" },
                { x:new Date(2020,03), y: 7500},
                { x:new Date(2020,04), y: 4000 },
                { x:new Date(2020,05), y: 5000 },
                { x:new Date(2020,06), y: 6000 },
                { x:new Date(2020,07), y: 4500 },
                { x:new Date(2020,08), y: 8000 },
                { x:new Date(2020,09), y: 9000 },
                { x:new Date(2020,10), y: 10000, indexLabel: "\u2191 highest",markerColor: "red", markerType: "triangle"},
                { x:new Date(2020,11), y: 8000 },
                { x:new Date(2020,12), y: 5000}
            ]
        }]
    });
    chart.render();
    
    }
    