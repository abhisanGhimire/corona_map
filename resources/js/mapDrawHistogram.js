import * as mapBaseLayer from "./layers/mapBaselayer";
import * as mapMain from "./mapMain";
import { Draw } from "ol/interaction";
import { kmlOverlay } from "./mapOverlay";
import WKT from "ol/format/WKT";
import * as populationChart from "./populationChart";

var drawHistogram = document.getElementById("drawHistogram");
var geometry;
var drawBoundary; // global so we can remove it later
function addInteractionForExport() {
    drawBoundary = new Draw({
        source: mapBaseLayer.vectorSource,
        type: "Polygon"
    });
    drawBoundary.on("drawend", function(evt) {
        mapMain.map.removeInteraction(drawBoundary);
        geometry = evt.feature.getGeometry();
        openChart(geometry);
    });
    mapMain.map.addInteraction(drawBoundary);
}

/**
 * Handle change event.
 */
drawHistogram.onclick = function() {
    mapMain.map.removeInteraction(drawBoundary);
    addInteractionForExport();
};

function openChart(geometry) {
    var format = new WKT();
    var geom = format.writeGeometry(
        geometry.clone().transform("EPSG:3857", "EPSG:4326")
    );
    $(document).ready(function() {
        $.ajaxSetup({
            headers: {
                "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
            }
        });

        $.ajax({
            url: "/map/histogram",
            type: "POST",
            data: { geom: geom },
            success: function(data) {
                console.log(data.items);
                let min = new Array(),
                    max = new Array(),
                    count = new Array(),
                    i;
                for (i = 0; i < data.items.length; i++) {
                    min[i] = data.items[i].min;
                    count[i] = data.items[i].count;
                }
                min[i] = data.items[i - 1].max;
                console.log(count);
                console.log(min);
                populationChart.histogram(count, min);
                // Get the modal
                var modal = document.getElementById("graphModal_1");
                // Get the <span> element that closes the modal
                var span = document.getElementById("close_histogram");
                // When the user clicks the button, open the modal
                modal.style.display = "block";
                // When the user clicks on <span> (x), close the modal
                span.onclick = function() {
                    modal.style.display = "none";
                    populationChart.histogramChart.destroy();
                };
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function(event) {
                    if (event.target == modal) {
                        populationChart.histogramChart.destroy();
                        modal.style.display = "none";
                    }
                };
            }
        });
    });
}
