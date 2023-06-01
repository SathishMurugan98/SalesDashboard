
export const chartOption = async (chartcolor, format) => {
    let opt = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 180,
            curve: "smooth",
            zoom: {
                enabled: false,
                autoScaleYaxis: false,
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 500,
                animateGradually: {
                    enabled: true,
                    delay: 500,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 500,
                },
            },
        },
        stroke: {
            width: 2.3,
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0.95,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            type: "datetime",
            tickAmount: 1,
            labels: {
                datetimeUTC: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return "$" + val.toFixed(0)
                }
            }
        },
        tooltip: {
            x: {
                format: format,
            },
        },
        colors: chartcolor,
    };
    return opt;
}

export const barOptions = {
    chart: {
        type: 'bar',
        height: 350
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '45%',
            borderRadius: 3,
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    xaxis: {
        categories: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    },
    yaxis: {
        show: true,
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: false,
    },
    tooltip: {
        y: {
            formatter: function (val) {
                return "$ " + val
            }
        }

    },
    colors: ["#23BCFD", "#1400FE"],
}

export const audienceOption = async (format) => {
    let opt = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 180,
            curve: "smooth",
            zoom: {
                enabled: false,
                autoScaleYaxis: false,
            },
            animations: {
                enabled: true,
                easing: "easeinout",
                speed: 500,
                animateGradually: {
                    enabled: true,
                    delay: 500,
                },
                dynamicAnimation: {
                    enabled: true,
                    speed: 500,
                },
            },
        },
        stroke: {
            width: 2.3,
        },
        dataLabels: {
            enabled: false,
        },
        markers: {
            size: 0,
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0.95,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 90, 100]
            }
        },
        xaxis: {
            type: "datetime",
            tickAmount: 1,
            labels: {
                datetimeUTC: false,
            },
        },
        yaxis: {
            labels: {
                formatter: function (val) {
                    return "$" + val.toFixed(0)
                }
            }
        },
        tooltip: {
            x: {
                format: format//$(".aude-filter").val() === "DAILY" ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd",
            },
        },
        colors: ["#ff6600"],
    }
    return opt;
}



// import random
// data =[]; total = 0

// for i in range(0, 24):
//     ran = random.randint(12, 24)
// total += ran
// if (i < 10):
//     dt = "2022-06-07 0" + str(i) + ":00"
// dic = { "date": dt, "count": ran }
// data.append(dic)
//     else:
// dt = "2022-06-07 " + str(i) + ":00"
// dic = { "date": dt, "count": ran }
// data.append(dic)
// print("====", total)
// print(data)