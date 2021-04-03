document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
        chart: {
            height: 300,
            type: 'column',
            styledMode: true,
            scrollablePlotArea: {
              minWidth: 1200,
              opacity: 0,
            }
        },
        exporting: { 
          buttons: {
              contextButton: {
              },
              customButton1: {
                className: 'chartButton',
                align: 'center',
                onclick: function () {
                  alert('Clicked');
                },
                text: 'Day',
              },
              customButton2: {
                className: 'chartButton',
                align: 'center',
                onclick: function () {
                   alert('Clicked');
                },
                text: 'Week',
              },
              customButton3: {
                className: 'chartButton',
                align: 'center',
                onclick: function () {
                   alert('Clicked');
                },
                text: 'Month',
              },
              customButton4: {
                className: 'chartButton',
                align: 'center',
                onclick: function () {
                   alert('Clicked');
                },
                text: 'Year',
              },
            },
          
      },
        title: {
            align: screenLeft,
            text: 'TOTAL BALANCE',
        },
        tooltip: {
          formatter: function () {
              return '$ '+ this.y + '<br>' + this.x + ' AUG 2020';
          },  
      },
        legend: {
            enabled: false,
        },
        series: [{
          type: 'column',
          data: [20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000, 20000,],
          color: '#000000',
          opacity: 0.4,
          pointWidth: 10,
          className: 'background-columns',
          enableMouseTracking: false,
          states: {
            inactive: {
              opacity: 0.4
            }
          }
        }, {
          type: 'column',
          data: [-20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000, -20000,],
          color: '#000000',
          opacity: 0.4,
          pointWidth: 10,
          className: 'background-columns',
          enableMouseTracking: false,
          states: {
            inactive: {
              opacity: 0.4
            }
          }
        }, {
            type: 'column',
            pointWidth: 10,
            data: [100, 267, 300, 633, 333, 510, 400, 600, 600, 700, 500, 400, 700, 150, 453, 897],
            enableMouseTracking: false,
        }, {
            type: 'column',
            pointWidth: 10,
            data: [-180, -167, -140, -333, -233, 0, -100, -110, -60, -70, -210, -170, -187, -199, -231, -321],
            enableMouseTracking: false,
        }, {
          type: 'spline',
          className: 'spline-line',
          data: [-1000, 367, 200, 533, 233, 410, 300, 500, 500, 800],
      }],
        animation: false,
        plotOptions: {
          column: {
              stacking: 'normal',
          },
          spline: {
            marker: {
              enabled: false
            },
          },
          series: {
            states: {
              inactive: {
                opacity: 1
              }
            }
          }
        },
        "yAxis": [{
          className: 'yAxisGrid',
          gridLineWidth: 0,
          max: 2000,
          min: -2000,
          tickInterval: 1000,
          plotLines: [{
            color: '#1f2d3f',
            width: 2,
            value: 0
        }],
          labels: {
            formatter: function() {
                return this.value / 100;
            },
        },
          title: {
            enabled: false,
          },
        }],
        "xAxis": [{
          categories: ["02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "01"],
          lineWidth: 0,
          tickPixelInterval: 30,
        }],
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const chart2 = Highcharts.chart('ChartOneContainer', {
        chart: {
            height: 100,
            type: 'column',
        }, 
        title: {
              text: "OTHER",
              align: "left",
              style: {
                color: "#7E97C2",
                fontSize: "10px",
                fontWeight: "normal",
                fontStyle: "normal"
              }
            },
        subtitle: {
                text: "$ 1240.00",
                align: "left",
                style: {
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontStyle: "normal"
                }
              },
        series: [{
            type: 'spline',
            className: 'spline-line',
            marker: {
                enabled: false
              },
            data: [-1000, 1267, -800, 433, -233, 1310, -1300, 1500, -1500, 1800],
                }],
        yAxis: {
                title: {
                  text: ""
                },
                visible: false,
                labels: {}
              },
        xAxis: {
                visible: false,
                title: {},
                labels: {}
              },
        pane: {
                background: []
              },
        responsive: {
                rules: []
              },
        legend: {
                enabled: false
              },
        plotOptions: {
                series: {
                  dataLabels: {}
                }
              },
        tooltip: {},
              lang: {}
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chart2 = Highcharts.chart('ChartOneContainer2', {
        chart: {
            height: 100,
            type: 'column',
        }, 
        title: {
              text: "BUSINESS EXPENSES",
              align: "left",
              style: {
                color: "#7E97C2",
                fontSize: "10px",
                fontWeight: "normal",
                fontStyle: "normal"
              }
            },
        subtitle: {
                text: "$ 1450.00",
                align: "left",
                style: {
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontStyle: "normal"
                }
              },
        series: [{
            type: 'spline',
            className: 'spline-line',
            color: '#6968FF',
            marker: {
                enabled: false
              },
            data: [-1000, 1267, -800, 433, -233, 1310, -1300, 1500, -1500, 1800],
                }],
        yAxis: {
                title: {
                  text: ""
                },
                visible: false,
                labels: {}
              },
        xAxis: {
                visible: false,
                title: {},
                labels: {}
              },
        pane: {
                background: []
              },
        responsive: {
                rules: []
              },
        legend: {
                enabled: false
              },
        plotOptions: {
                series: {
                  dataLabels: {}
                }
              },
        tooltip: {},
              lang: {}
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chart2 = Highcharts.chart('ChartOneContainer3', {
        chart: {
            height: 100,
            type: 'column',
        }, 
        title: {
              text: "TRANSPORT",
              align: "left",
              style: {
                color: "#7E97C2",
                fontSize: "10px",
                fontWeight: "normal",
                fontStyle: "normal"
              }
            },
        subtitle: {
                text: "$ 826.00",
                align: "left",
                style: {
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontStyle: "normal"
                }
              },
        series: [{
            type: 'spline',
            className: 'spline-line',
            marker: {
                enabled: false
              },
            data: [-1000, 1267, -800, 433, -233, 1310, -1300, 1500, -1500, 1800],
                }],
        yAxis: {
                title: {
                  text: ""
                },
                visible: false,
                labels: {}
              },
        xAxis: {
                visible: false,
                title: {},
                labels: {}
              },
        pane: {
                background: []
              },
        responsive: {
                rules: []
              },
        legend: {
                enabled: false
              },
        plotOptions: {
                series: {
                  dataLabels: {}
                }
              },
        tooltip: {},
              lang: {}
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chart2 = Highcharts.chart('ChartOneContainer4', {
        chart: {
            height: 100,
            type: 'column',
        }, 
        title: {
              text: "BACKOFFICE",
              align: "left",
              style: {
                color: "#7E97C2",
                fontSize: "10px",
                fontWeight: "normal",
                fontStyle: "normal"
              }
            },
        subtitle: {
                text: "$ 1840.00",
                align: "left",
                style: {
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontStyle: "normal"
                }
              },
        series: [{
            type: 'spline',
            className: 'spline-line',
            marker: {
                enabled: false
              },
            data: [-1000, 1267, -800, 433, -233, 1310, -1300, 1500, -1500, 1800],
                }],
        yAxis: {
                title: {
                  text: ""
                },
                visible: false,
                labels: {}
              },
        xAxis: {
                visible: false,
                title: {},
                labels: {}
              },
        pane: {
                background: []
              },
        responsive: {
                rules: []
              },
        legend: {
                enabled: false
              },
        plotOptions: {
                series: {
                  dataLabels: {}
                }
              },
        tooltip: {},
              lang: {}
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const chart2 = Highcharts.chart('ChartOneContainer5', {
        chart: {
            height: 100,
            type: 'column',
        }, 
        title: {
              text: "",
              align: "left",
              style: {
                color: "#7E97C2",
                fontSize: "10px",
                fontWeight: "normal",
                fontStyle: "normal"
              }
            },
        subtitle: {
                text: "$ 1240.00",
                align: "left",
                style: {
                  color: "#ffffff",
                  fontSize: "16px",
                  fontWeight: "normal",
                  fontStyle: "normal"
                }
              },
        series: [{
            type: 'spline',
            className: 'spline-line',
            marker: {
                enabled: false
              },
            data: [-1000, 1267, -800, 433, -233, 1310, -1300, 1500, -1500, 1800],
                }],
        yAxis: {
                title: {
                  text: ""
                },
                visible: false,
                labels: {}
              },
        xAxis: {
                visible: false,
                title: {},
                labels: {}
              },
        pane: {
                background: []
              },
        responsive: {
                rules: []
              },
        legend: {
                enabled: false
              },
        plotOptions: {
                series: {
                  dataLabels: {}
                }
              },
        tooltip: {},
              lang: {}
    });
});