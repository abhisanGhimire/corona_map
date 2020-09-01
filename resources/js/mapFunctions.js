import * as mapMain from "./mapMain";
import * as mapConstants from "./mapConstants";
import GeoJSON from "ol/format/GeoJSON";

export function drawline() {
    mapMain.map.addInteraction(mapConstants.drawInteraction);
    mapConstants.drawInteraction.on("drawend", function(e) {
        const parser = new GeoJSON();
        const drawnfeatures = parser.writeFeaturesObject([e.feature]);
        const pointOne = drawnfeatures.features[0].geometry.coordinates[0];
        const pointTwo = drawnfeatures.features[0].geometry.coordinates[1];
        $(document).ready(function() {
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content")
                }
            });

            $.ajax({
                url: "/map/coordinates",
                type: "POST",
                dataType: "JSON",
                data: pointOne,
                pointTwo
            });
        });
    });
}
