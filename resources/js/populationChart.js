export function chart(population) {
    var ctx = document.getElementById("populationChart");
    console.log(population);
    let labelForChart = new Array();
    for (let i = 0; i < population.length; i++) {
        labelForChart[i] = i + "mtr(s)";
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
    new Chart(ctx, {
        type: "line",
        data: speedData
    });
}
