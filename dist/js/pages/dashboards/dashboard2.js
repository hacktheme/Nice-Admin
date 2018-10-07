/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";   
    // ============================================================== 
    // sales ratio
    // ============================================================== 

    var chart = new Chartist.Line('.sales-ratio', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [12.5, 23.3, 34.7, 28.5, 21.4, 30.6, 44.5, 34],
        ]
    }, {
        low: 0,
        high: 48,
        showArea: true,
        fullWidth: true,
        plugins: [
            Chartist.plugins.tooltip()
        ],
        axisY: {
            onlyInteger: true,
            scaleMinSpace: 40,
            offset: 20,
            labelInterpolationFnc: function(value) {
                return (value / 10) + 'k';
            }
        },
            
    });

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
    // Straight lines don't get a bounding box 
    // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on('draw', function(ctx) {
        if (ctx.type === 'area') {
            ctx.element.attr({
                x1: ctx.x1 + 0.001
            });
        }
    });

    // Create the gradient definition on created event (always after chart re-render)
    chart.on('created', function(ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(64, 196, 255, 1)'
        });
    });

    var chart = [chart];

    // ============================================================== 
    // sales 2
    // ============================================================== 
    var chart = new Chartist.Line('.sales2', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [22.5, 34.3, 24.7, 28.5, 11.4, 30.6, 44.5, 34],
        ]
    }, {
        low: 0,
        high: 48,
        showArea: true,
        fullWidth: true,
        plugins: [
            Chartist.plugins.tooltip()
        ],
        axisY: {
            onlyInteger: true,
            scaleMinSpace: 40,
            offset: 0,
            labelInterpolationFnc: function(value) {
                return (value / 10) + 'k';
            }
        },
        chartPadding: {
            right: 0,
            left:0
        },
       lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        }),     
    });

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
    // Straight lines don't get a bounding box 
    // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on('draw', function(ctx) {
        if (ctx.type === 'area') {
            ctx.element.attr({
                x1: ctx.x1 + 0.001
            });
        }
    });

    // Create the gradient definition on created event (always after chart re-render)
    chart.on('created', function(ctx) {
        var defs = ctx.svg.elem('defs');
        defs.elem('linearGradient', {
            id: 'gradient',
            x1: 0,
            y1: 1,
            x2: 0,
            y2: 0
        }).elem('stop', {
            offset: 0,
            'stop-color': 'rgba(255, 255, 255, 1)'
        }).parent().elem('stop', {
            offset: 1,
            'stop-color': 'rgba(64, 196, 255, 1)'
        });
    });

    var chart = [chart];


     // ==============================================================    
    //weather cards
    // ============================================================== 
    var chart = new Chartist.Line('#weather', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [22.5, 34.3, 24.7, 28.5, 11.4, 30.6, 44.5, 34],
        ]
    }, {
        low: -10,
        high: 42,
        showArea: true,
        fullWidth: true,
        plugins: [
            Chartist.plugins.tooltip()
        ],
        axisY: {
            onlyInteger: true,
            scaleMinSpace: 40,
            offset: 0,
            labelInterpolationFnc: function(value) {
                return (value / 10) + 'k';
            }
        },
        chartPadding: {
            right: 0,
            left:0
        },
            lineSmooth: Chartist.Interpolation.simple({
            divisor: 2
        }),
    });

    // Offset x1 a tiny amount so that the straight stroke gets a bounding box
    // Straight lines don't get a bounding box 
    // Last remark on -> http://www.w3.org/TR/SVG11/coords.html#ObjectBoundingBox
    chart.on('draw', function(ctx) {
        if (ctx.type === 'area') {
            ctx.element.attr({
                x1: ctx.x1 + 0.001
            });
        }
    });

    var chart = [chart];

    

    
     
    

    // ============================================================== 
    // sales 4
    // ============================================================== 
    var ctx = document.getElementById("sales4");
    var salesChart = new Chart(ctx, {
        type: 'line',
        
        data: {
            labels: ["2012", "2013", "2014", "2015"],
            datasets: [{
                label: 'Sale %',
                data: [12, 19, 3, 5],
                backgroundColor: [
                    'transparent'
                ],
                borderColor: [
                    '#8b5edd'
                ],
                borderWidth: 2,
                
                pointBorderWidth: 2,
                pointBackgroundColor: '#8b5edd',
                pointHoverBackgroundColor: '#8b5edd',
                pointHoverBorderColor: '#8b5edd'
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 2
                }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            },
            tooltips: {
                enabled: true,
                intersect: false,
                titleMarginBottom : 1,
                bodySpacing : 1,
                yPadding : 2,
                
            },

            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
        }
    });

    // ============================================================== 
    // balance
    // ============================================================== 
    new Chart(document.getElementById("balance"), {
        type: 'line',
        data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8],
            datasets: [{
                data: [3, 8, 2, 3, 2, 5, 9, 6],
                label: "A",
                borderColor: "#137eff",
                borderWidth: 1,
                backgroundColor: "rgb(19,126,255)",
                pointBackgroundColor: "#137eff",
            }, {
                data: [7, 6, 5, 8, 6, 7, 5, 9],
                label: "B",
                borderColor: "rgba(233,236,239, 0.2)",
                borderWidth: 1,
                backgroundColor: "rgba(233,236,239, 0.2)",
                pointBackgroundColor: "#e9ecef",
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 1
                }
            },
            tooltips: {
                enabled: true,
                intersect: false,
                titleMarginBottom : 1,
                bodySpacing : 1,
                yPadding : 2,
                
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }],
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawBorder: false,
                    },
                    ticks: {
                        display: false
                    }
                }]
            },
            layout: {
                padding: {
                    left: -10,
                    right: 0,
                    top: 0,
                    bottom: -10
                }
            },
            legend: {
                display: false,
                labels: {
                    fontColor: 'rgb(255, 99, 132)'
                }
            }
        }
    });

    // ============================================================== 
    // sales 3
    // ============================================================== 
    var sparklineLogin = function() {
        $('#sales3').sparkline([6, 10, 9, 11, 9, 10, 12], {
            type: 'bar',
            height: '55',
            barWidth: '4',
            width: '100%',
            resize: true,
            barSpacing: '11',
            barColor: '#5ac146'
        });
    };
    var sparkResize;

    $(window).resize(function(e) {
        clearTimeout(sparkResize);
        sparkResize = setTimeout(sparklineLogin, 500);
    });
    sparklineLogin();

    // ============================================================== 
    // Revenue
    // ============================================================== 

    var chart = c3.generate({
        bindto: '.yearlyvisit',
        data: {
            columns: [
                ['Email', 45],
                ['Website', 15],
                ['Mobile', 27],
                ['Other', 18],
            ],

            type: 'donut'
        },
        donut: {
            label: {
                show: false
            },
            title: "Yearly Visit",
            width: 35,

        },

        legend: {
            hide: false
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#8b5edd', '#5ac146', '#137eff', '#eceff1']
        }
    });

    // ============================================================== 
    // product-sales
    // ============================================================== 
    // ============================================================== 
    // Overview
    // ============================================================== 
    Morris.Area({
        element: 'morris-area-chart2'
        , data: [{
                period: '2010'
                , SiteA: 0
                , SiteB: 0
        , }, {
                period: '2011'
                , SiteA: 130
                , SiteB: 100
        , }, {
                period: '2012'
                , SiteA: 80
                , SiteB: 60
        , }, {
                period: '2013'
                , SiteA: 70
                , SiteB: 200
        , }, {
                period: '2014'
                , SiteA: 180
                , SiteB: 150
        , }, {
                period: '2015'
                , SiteA: 105
                , SiteB: 90
        , }
            , {
                period: '2016'
                , SiteA: 250
                , SiteB: 150
        , }]
        , xkey: 'period'
        , ykeys: ['SiteA', 'SiteB']
        , labels: ['Site A', 'Site B']
        , pointSize: 0
        , fillOpacity: 0.4
        , pointStrokeColors: ['rgba(223,226,233, 0.3)', '#137eff']
        , behaveLikeLine: true
        , gridLineColor: 'rgba(0,0,0, 0.2)'
        , lineWidth: 0
        , smooth: false
        , hideHover: 'auto'
        , lineColors: ['#b5b5b5', '#137eff']
        , resize: true
    });
    // ============================================================== 
    // Conversation Rate
    // ============================================================== 
    var chart = c3.generate({
        bindto: '.monthlyvisit',
        data: {
            columns: [
                ['Conversation', 85],
                ['other', 15],
            ],

            type: 'donut'
        },
        donut: {
            label: {
                show: false
            },
            title: "Monthly Visit",
            width: 10,

        },
        padding: {
            top: 10,
            bottom: -20

            ,
        },
        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#137eff', '#eceff1']
        }
    });

    // ============================================================== 
    // Our Visitor
    // ============================================================== 
    var chart = c3.generate({
        bindto: '#campaign',
        data: {
            columns: [
                ['Un-opened', 35],
                ['Clicked', 15],
                ['Open', 10],
                ['Bounced', 18],
            ],

            type: 'donut',
            tooltip: {
                show: true
            }
        },
        donut: {
            label: {
                show: false
            },
            width: 20,
        },

        legend: {
            hide: true
        },
        color: {
            pattern: ['#137eff', '#8b5edd', '#5ac146', '#eceff1']
        }
    });
});