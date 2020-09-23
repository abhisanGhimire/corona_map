import "ol/ol.css";
import * as mapMain from "./mapMain";
import * as mapLayergroup from "./layers/mapLayergroup";
import * as mapWmscapabilities from "./mapWmscapabilities";
//Required
import * as mapDrawhistogram from "./mapDrawHistogram";
import * as layerSwitcherLogic from "./layers/layerSwitcherLogic";
import * as dragAndDropKml from "./mapdragAndDropKml";

//Map baselayer added
mapMain.map.addLayer(mapLayergroup.baseLayerGroup);
//Map mainlayer added
mapMain.map.addLayer(mapLayergroup.mainLayerGroup);
//WmsCapabilities tool function
mapWmscapabilities.getMapLayer();
