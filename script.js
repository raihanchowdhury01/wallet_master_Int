const bar = document.querySelector("#bars");
const crosse = document.querySelector("#xMark");
const barClass = document.querySelector(".bars");
const crosseClass = document.querySelector(".xMark");
const openM = document.querySelector(".menuBar");
const closeM = document.querySelector(".menuBar");

bar.addEventListener("click", () => {
    barClass.classList.add("active");
    crosseClass.classList.add("cActive");
    openM.classList.add("activeMenu");
})
crosse.addEventListener("click", () => {
    barClass.classList.remove("active");
    crosseClass.classList.remove("cActive");
    closeM.classList.remove("activeMenu");
})


// modal activities start from here
const openBtn = document.getElementById("open_modal_btn");
openBtn.addEventListener("click", () => {
    document.getElementById("modal-wrapper").classList.remove("hidden");
});
document.getElementById("modal-close-button").addEventListener("click", () => {
    document.getElementById("modal-wrapper").classList.add("hidden");
});
// modal activities end from here


// charts section activities starts from here
// dashboard chart section start from here
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        series: [{
            name: 'Series 1',
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500]
        }],
        chart: {
            type: 'bar',
            height: 250,
            toolbar: {
                show: false
            },
            width: 350,
        },
        plotOptions: {
            bar: {
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
        },
        yaxis: {
            min: 0,
            max: 500,
            tickAmount: 5
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart_bar"), options);
    chart.render();
});


// dashboard chart section end from here

// balance trend chart start from here

document.addEventListener('DOMContentLoaded', function () {
    var options = {
        series: [{
            name: 'Series 1',
            data: [50, 40, 300, 320, 500, 350, 200, 230, 500]
        }],
        chart: {
            type: 'line',
            height: 250,
            toolbar: {
                show: false
            }
        },
        stroke: {
            curve: 'smooth',
          },
        plotOptions: {
            bar: {
                horizontal: false,
            }
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            categories: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Dec'],
        },
        yaxis: {
            min: 0,
            max: 500,
            tickAmount: 5
        }
    };

    var chart = new ApexCharts(document.querySelector("#chart_line"), options);
    chart.render();
});

// balance trend chart end from here

// cash flow chart start from here
const income = document.getElementById("income");
// cash flow chart end from here

// expenses structure with pie chart start from here
// Get the context of the canvas element we want to select
var options = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
      width: '100%',
      type: 'pie',
    },
    labels: [],
    theme: {
      monochrome: {
        enabled: true,
        color: '#ff6347'
      }
    },
    plotOptions: {
      pie: {
        dataLabels: {
          enabled: false
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#pie_chart"), options);
  chart.render();
// expenses structure with pie chart end from here

// charts section activities starts from here