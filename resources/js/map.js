import "ol/ol.css";
import * as mapMain from "./mapMain";
import * as mapBaselayer from "./mapBaselayer";
import * as mapLayergroup from "./mapLayergroup";
import * as mapConstants from "./mapConstants";
import * as mapWmscapabilities from "./mapWmscapabilities";
//Map baselayer added
mapMain.map.addLayer(mapLayergroup.baseLayerGroup);
//Map mainlayer added
mapMain.map.addLayer(mapLayergroup.mainLayerGroup);
mapWmscapabilities.getMaplLayer();
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
