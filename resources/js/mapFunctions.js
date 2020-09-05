import * as mapMain from "./mapMain";
import * as mapConstants from "./mapConstants";
import WKT from "ol/format/WKT";
import * as populationChart from "./populationChart";
export function drawline() {
    mapMain.map.addInteraction(mapConstants.drawInteraction);
    mapConstants.drawInteraction.on("drawend", function(e) {
        var format = new WKT();
        var geom = format.writeGeometry(
            e.feature
                .getGeometry()
                .clone()
                .transform("EPSG:3857", "EPSG:4326")
        );
        $(document).ready(function() {
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                }
            });

            $.ajax({
                url: "/map/coordinates",
                type: "POST",
                data: { geom: geom },
                success: function(data) {
                    let population = new Array(),
                        i;
                    console.log(data.length);
                    for (i = 0; i < data.length; i++) {
                        population[i] = data[i][i];
                    }
                    console.log(population);
                    populationChart.chart(population);
                    // Get the modal
                    var modal = document.getElementById("graphModal");
                    // Get the <span> element that closes the modal
                    var span = document.getElementsByClassName("close")[0];
                    // When the user clicks the button, open the modal
                    modal.style.display = "block";
                    // When the user clicks on <span> (x), close the modal
                    span.onclick = function() {
                        modal.style.display = "none";
                    };
                    // When the user clicks anywhere outside of the modal, close it
                    window.onclick = function(event) {
                        if (event.target == modal) {
                            modal.style.display = "none";
                        }
                    };
                    console.log("Successful");
                }
            });
        });
    });
}

export function clear() {
    mapMain.map.removeInteraction(mapConstants.drawInteraction);
}
