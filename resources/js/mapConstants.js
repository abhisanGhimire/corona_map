import { Attribution, OverviewMap, FullScreen } from "ol/control";
import ZoomSlider from "ol/control/ZoomSlider";
import { DragAndDrop, DragRotateAndZoom } from "ol/interaction";
import { GeoJSON, KML } from "ol/format";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { Draw } from "ol/interaction";
import * as mapFunctions from "./mapFunctions";
import Overlay from "ol/Overlay";

export const kml_pointer = document.getElementById("kml_pointer");

// DragAndDrop for GeoJSON and KML
export const dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [GeoJSON, KML]
});

//Controls and Interactions
export const fullScreen = new FullScreen();
export const dragRotateAndZoom = new DragRotateAndZoom();
export const zoomSlider = new ZoomSlider();
export const attribution = new Attribution({
    collapsible: true
});
export const overViewMap = new OverviewMap({
    collapsed: false,
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ]
});

//URL of geoserver
export const gurl = "http://localhost:8080/geoserver/nepal_map/wms";

//Draw linestring upon click draw button
export const mapDraw = document
    .getElementById("drawline")
    .addEventListener("click", mapFunctions.drawline);

//Draw linestring
export const drawInteraction = new Draw({
    type: "LineString",
    maxPoints: 2
});

//Remove interaction
export const mapClear = document
    .getElementById("clear")
    .addEventListener("click", mapFunctions.clear);

/**
 * Elements that make up the popup.
 */
export const container = document.getElementById("popup");
export const content = document.getElementById("popup-content");
export const closer = document.getElementById("popup-closer");
/**
 * Create an overlay to anchor the popup to the map.
 */
export const kmlOverlay = new Overlay({
    element: container,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});

/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer.onclick = function() {
    kmlOverlay.setPosition(undefined);
    closer.blur();
    return false;
};
