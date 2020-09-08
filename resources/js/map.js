import "ol/ol.css";
import * as mapMain from "./mapMain";
import * as mapBaselayer from "./mapBaselayer";
import * as mapLayergroup from "./mapLayergroup";
import * as mapConstants from "./mapConstants";
import * as mapWmscapabilities from "./mapWmscapabilities";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource, XYZ } from "ol/source";

//Map baselayer added
mapMain.map.addLayer(mapLayergroup.baseLayerGroup);
//Map mainlayer added
mapMain.map.addLayer(mapLayergroup.mainLayerGroup);
mapWmscapabilities.getMapLayer();

//DragAndDrop Feature
mapConstants.dragAndDropInteraction.on("addfeatures", function(event) {
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
var displayFeatureInfo = function(pixel, coordinate) {
    var features = [];
    mapMain.map.forEachFeatureAtPixel(pixel, function(feature) {
        features.push(feature);
    });
    if (features.length > 0) {
        var info = [];
        if (typeof features[0].get("description") != "undefined") {
            info.push(features[0].get("description"));
        } else {
            info.push("<p>No description available</p>");
        }

        console.log(info);
        mapConstants.kmlOverlay.setPosition(coordinate);
        mapConstants.content.innerHTML = info;
    }
};

mapMain.map.on("click", function(evt) {
    displayFeatureInfo(evt.pixel, evt.coordinate);
});

//Layer switcher logic
for (let baseLayerElement of mapConstants.baseLayerElements) {
    baseLayerElement.addEventListener("change", function() {
        let baseLayerElementValue = this.value;
        mapLayergroup.baseLayerGroup
            .getLayers()
            .forEach(function(element, index, array) {
                let baseLayerName = element.get("title");
                element.setVisible(baseLayerName === baseLayerElementValue);
                //Setting vector layer to true for drawing
                mapBaselayer.vector.setVisible("true");
            });
    });
}

// Layer switcher logic for upper layer
for (let mainLayerElement of mapConstants.mainLayerElements) {
    mainLayerElement.addEventListener("change", function() {
        let mainLayerElementValue = this.value;
        let mainLayer;
        mapLayergroup.mainLayerGroup
            .getLayers()
            .forEach(function(element, index, array) {
                if (mainLayerElementValue === element.get("title")) {
                    mainLayer = element;
                }
            });
        this.checked ? mainLayer.setVisible(true) : mainLayer.setVisible(false);
    });
}
