import "ol/ol.css";
import * as mapMain from "./mapMain";
import * as mapLayergroup from "./mapLayergroup";
import * as layerSwitcherLogiv from "./layerSwitcherLogic";
import * as mapWmscapabilities from "./mapWmscapabilities";
//Required
import * as dragAndDropKml from "./dragAndDropKml";

//Map baselayer added
mapMain.map.addLayer(mapLayergroup.baseLayerGroup);
//Map mainlayer added
mapMain.map.addLayer(mapLayergroup.mainLayerGroup);
//WmsCapabilities tool function
mapWmscapabilities.getMapLayer();
