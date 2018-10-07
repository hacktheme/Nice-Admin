            /*
Template Name: Material Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function() {
    "use strict";

    // ============================================================== 
    // sales ratio
    // ============================================================== 
    var chart = new Chartist.Line('.sales5', {
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        series: [
            [24.5, 30.3, 39.7, 30, 24.5, 33.6, 45, 40],
            [8.9, 6.6, 22.9, 6.8, 15.5, 10.1, 8.8, 18.4]
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
    // weather
    // ============================================================== 
    var chart = c3.generate({
        bindto: '.weather-report',
        data: {
            columns: [
                ['Day 1', 21, 15, 30, 45, 15]
            ],
            type: 'spline'
        },
        axis: {
            y: {
                show: false,
                tick: {
                    count: 0,
                    outer: false
                }
            },
            x: {
                show: false,
            }
        },
        padding: {
            top: 0,
            right: -8,
            bottom: -15,
            left: -8,
        },
        point: {
            r: 2,
        },
        legend: {
            hide: true
        },
        color: {
            pattern: ['#fff']
        }

    });

    // ============================================================== 
    // campaign status
    // ============================================================== 

    var chart = c3.generate({
        bindto: '.status',
        data: {
            columns: [
                ['Pending', 55],
                ['Failed', 10],
                ['Success', 18],
            ],

            type: 'donut'
        },
        donut: {
            label: {
                show: false
            },
            title: "Status",
            width: 35,

        },

        legend: {
            hide: true
                //or hide: 'data1'
                //or hide: ['data1', 'data2']
        },
        color: {
            pattern: ['#137eff','#5ac146','#8b5edd']
        }
    });

    // ============================================================== 
    // Earnings
    // ============================================================== 
    new Chartist.Bar('.chart1', {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
            [5, 4, 5, 3, 12, 4, 15, 8, 10, 8, 7, 5],
            [4, 10, 5, 4, 8, 3, 3, 4, 9, 7, 10, 4]
        ]
    }, {
        stackBars: true,
        axisY: {
            labelInterpolationFnc: function(value) {
                return (value / 1) + 'k';
            },
            scaleMinSpace: 55
        },  
        axisX: {
            showGrid: false
        },
        plugins: [
            Chartist.plugins.tooltip()
        ],
        seriesBarDistance: 1,
        chartPadding: {
            top: 15,
            right: 15,
            bottom: 5,
            left: 0
        }
    }).on('draw', function(data) {
        if (data.type === 'bar') {
            data.element.attr({
                style: 'stroke-width: 25px'
            });
        }
    });
});