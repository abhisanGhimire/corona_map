import WMSCapabilities from "ol/format/WMSCapabilities";
import fetch from "node-fetch";
import * as mapMain from "./mapMain";
import TileWMS from "ol/source/TileWMS";
import TileLayer from "ol/layer/Tile";

export function getMaplLayer() {
    var getLayerButton = document.getElementById("getLayer");
    getLayerButton.addEventListener("click", function() {
        var parser = new WMSCapabilities();

        fetch(
            "http://localhost:8080/geoserver/wms?service=wms&version=1.1.1&request=GetCapabilities"
        )
            .then(function(response) {
                return response.text();
            })
            .then(function(text) {
                var mapLayer = document.getElementById("mapLayer");
                var removeMapLayer = document.getElementById("removeMapLayer");

                var result = parser.read(text);
                let layers = result.Capability.Layer.Layer;
                let i;
                let layerName = [];
                for (i = 0; i < layers.length; i++) {
                    layerName[i] = layers[i].Name;
                    var option = document.createElement("option");
                    option.text = option.value = layers[i].Name;
                    mapLayer.add(option);
                }
                console.log(layerName);

                // Get the modal
                var modal = document.getElementById("getLayerModal");
                // Get the <span> element that closes the modal
                var span = document.getElementsByClassName(
                    "closeLayerOption"
                )[0];
                // When the user clicks the button, open the modal
                modal.style.display = "block";
                mapLayer.addEventListener("change", function() {
                    const source = new TileWMS({
                        url: "http://localhost:8080/geoserver/nepal_map/wms",
                        params: {
                            layers: mapLayer.value,
                            TILED: true
                        },
                        crossOrigin: "anonymous",
                        serverType: "geoserver",
                        attributions: "This is from getcapabilities"
                    });
                    const layer = new TileLayer({
                        source: source,
                        visible: true
                    });
                    mapMain.map.addLayer(layer);
                    removeMapLayer.addEventListener("click", function() {
                        mapMain.map.removeLayer(layer);
                    });
                });
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
                // console.log(JSON.stringify(result, null, 2));
            });
    });
}
