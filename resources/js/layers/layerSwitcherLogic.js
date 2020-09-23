import * as mapBaselayer from "./mapBaselayer";
import * as mapLayergroup from "./mapLayergroup";

//Queryselector for layerswitcher
const baseLayerElements = document.querySelectorAll(
    ".selection>select[id=base_layer]"
);
const mainLayerElements = document.querySelectorAll(
    ".selection > input[type=checkbox]"
);

//Layer switcher logic
for (let baseLayerElement of baseLayerElements) {
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
for (let mainLayerElement of mainLayerElements) {
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
