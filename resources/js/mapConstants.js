import { Attribution, OverviewMap, FullScreen } from "ol/control";
import ZoomSlider from "ol/control/ZoomSlider";
import { DragRotateAndZoom } from "ol/interaction";
import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";

//Controls and Interactions
export const fullScreen = new FullScreen();
export const dragRotateAndZoom = new DragRotateAndZoom();
export const zoomSlider = new ZoomSlider();
export const overViewMap = new OverviewMap({
    collapsed: false,
    layers: [
        new TileLayer({
            source: new OSM()
        })
    ]
});
export const attribution = new Attribution({
    collapsible: true
});

//URL of geoserver
export const gurl = "http://localhost:8080/geoserver/nepal_map/wms";
