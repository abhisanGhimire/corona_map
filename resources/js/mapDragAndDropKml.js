import * as mapConstants from "./mapConstants";
import * as mapMain from "./mapMain";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import * as mapOverlay from "./mapOverlay";
import * as mapInteractionAndControls from "./mapInteractionAndControls";

//DragAndDrop Feature for KML
mapInteractionAndControls.dragAndDropInteraction.on("addfeatures", function(
    event
) {
    var vectorSourceDragAndDrop = new VectorSource({
        features: event.features
    });
    mapMain.map.addLayer(
        new VectorLayer({
            source: vectorSourceDragAndDrop
        })
    );
    mapMain.map.getView().fit(vectorSourceDragAndDrop.getExtent());
});

//Trigger
mapConstants.kml_pointer.addEventListener("click", function(evt) {
    mapMain.map.on("click", function(evt) {
        displayFeatureInfo(evt.pixel, evt.coordinate);
    });
});
var displayFeatureInfo = function(pixel, coordinate) {
    var features = [];
    mapMain.map.forEachFeatureAtPixel(pixel, function(feature) {
        features.push(feature);
        console.log(features);
    });
    if (features.length > 0) {
        var info = [];
        if (typeof features[0].get("description") != "undefined") {
            info.push(features[0].get("description"));
        } else {
            info.push("<p>No description available</p>");
        }
        console.log(info);
        mapOverlay.kmlOverlay.setPosition(coordinate);
        mapOverlay.content.innerHTML = info;
    }
};
