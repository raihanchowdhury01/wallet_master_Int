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
const ctx = document.getElementById('myChart').getContext('2d');

const data = {
    labels: ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        type: 'bar',
        data: [50, 30, 330, 400, 500, 350, 200, 250, 300],
        backgroundColor: 'lightgreen',
        borderColor: 'lightgreen',
        color: 'lightgreen',
        borderWidth: 1
    }]
};

const config = {
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100
                }
            }
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                display: false
            }
        }
    }
};

new Chart(ctx, config);
// dashboard chart section end from here

// balance trend chart start from here

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('line-chart').getContext('2d');
    
    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            type: 'line',
            label: 'Line Dataset',
            data: [50, 150, 300, 400, 500, 400, 300, 200, 100, 200, 300, 400],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            tension: 0.1,
        }]
    };
    
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 100,
                }
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    };
    
    const myChart = new Chart(ctx, {
        data: data,
        options: options
    });
});

// balance trend chart end from here

// cash flow chart start from here
const income = document.getElementById("income");
// cash flow chart end from here

// expenses structure chart start from here
// Get the context of the canvas element we want to select
const pie = document.getElementById('myPieChart').getContext('2d');
        const myPieChart = new Chart(pie, {
            type: 'pie',
            data: {
                labels: [undefined, undefined, undefined, undefined, undefined], // Sections without labels
                datasets: [{
                    data: [10, 20, 30, 15, 25], // Values for each section
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false // Hide the legend
                    }
                }
            }
        });
// expenses structure chart end from here

// charts section activities starts from here