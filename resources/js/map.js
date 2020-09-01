import "ol/ol.css";
import * as mapMain from "./mapMain";
import * as mapBaselayer from "./mapBaselayer";
import * as mapMainlayer from "./mapMainlayer";
import * as mapLayergroup from "./mapLayergroup";
import * as mapConstants from "./mapConstants";
import * as mapFunctions from "./mapFunctions";

//Main map initial view
mapMain.map;
//Map baselayer added
mapMain.map.addLayer(mapLayergroup.baseLayerGroup);
//Map mainlayer added
mapMain.map.addLayer(mapLayergroup.mainLayerGroup);
//Draw linestring upon click draw button
document
    .getElementById("drawline")
    .addEventListener("click", mapFunctions.drawline);

//LayerSwitcher Logic
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
