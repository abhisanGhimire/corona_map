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
                    backgroundColor: [
                        "#4fc3f7",
                        "#bb86fc",
                        "#2a9df4",
                        "#d0efff",
                        "#fffdb8",
                        "#bb86fc",
                        "#ffdd3c",
                        "#d7ccc8",
                        "#bb86fc",
                        "#9ecd63"
                    ]
                }
            ]
        },
        options: {
            scales: {
                yAxes: [
                    {
                        display: false
                    }
                ],
                xAxes: [
                    {
                        barPercentage: 1.0,
                        categoryPercentage: 1.0,
                        gridLines: {
                            display: false
                        }
                    }
                ]
            }
        }
    });
}
