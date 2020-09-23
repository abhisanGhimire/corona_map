export var myChart;
export var histogramChart;
export function chart(population) {
    var ctx = document.getElementById("populationChart");
    console.log(population);
    let labelForChart = new Array();
    for (let i = 0; i < population.length; i++) {
        labelForChart[i] = i;
    }
    var speedData = {
        labels: labelForChart,
        datasets: [
            {
                label: "Population Distribution",
                data: population
            }
        ]
    };
    ctx.height = 50;
    myChart = new Chart(ctx, {
        type: "line",
        data: speedData
    });
}
export function histogram(count, interval) {
    const ctx = document.getElementById("populationChart_1").getContext("2d");

    histogramChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: interval,
            datasets: [
                {
                    label: "Population Distribution",
                    data: count,
                    backgroundColor: "green"
                }
            ]
        },
        options: {
            scales: {
                xAxes: [
                    {
                        display: false,
                        barPercentage: 1.3,
                        ticks: {
                            max: 3
                        }
                    },
                    {
                        display: true,
                        ticks: {
                            autoSkip: false,
                            max: 4
                        }
                    }
                ],
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    });
}
