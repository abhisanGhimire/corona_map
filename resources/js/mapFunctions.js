import * as mapMain from "./mapMain";
import * as mapConstants from "./mapConstants";
import WKT from "ol/format/WKT";

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
                data: { pointOne: geom },
                success: function(data) {
                    console.log(data);
                    console.log("Successful");
                }
            });
        });
    });
}

export function clear() {
    mapMain.map.removeInteraction(mapConstants.drawInteraction);
}
