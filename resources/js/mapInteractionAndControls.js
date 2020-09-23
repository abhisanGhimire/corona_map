import { Attribution, OverviewMap, FullScreen } from "ol/control";
import ZoomSlider from "ol/control/ZoomSlider";
import { DragRotateAndZoom } from "ol/interaction";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { GeoJSON, KML } from "ol/format";
import { DragAndDrop } from "ol/interaction";

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

// DragAndDrop for GeoJSON and KML
export const dragAndDropInteraction = new DragAndDrop({
    formatConstructors: [GeoJSON, KML]
});
