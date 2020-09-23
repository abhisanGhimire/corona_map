import { Map, View } from "ol";
import * as mapConstants from "./mapConstants";
import { defaults as defaultControls } from "ol/control";
import { defaults as defaultInteractions } from "ol/interaction";
import * as mapBaselayer from "./layers/mapBaselayer";
import * as mapInteractionAndControls from "./mapInteractionAndControls";
import * as mapOverlay from "./mapOverlay";

//Main Map
export const map = new Map({
    target: "map",
    layers: [mapBaselayer.base_no_layer],
    overlays: [mapOverlay.kmlOverlay],
    view: new View({
        center: [9443807.824891845, 3281690.3876565387],
        extent: [8519000, 2930000, 10395000, 3665000],
        zoom: 6,
        minZoom: 6
    }),
    keyboardEventTarget: document,
    interactions: defaultInteractions().extend([
        mapInteractionAndControls.dragRotateAndZoom,
        mapInteractionAndControls.dragAndDropInteraction
    ]),
    controls: defaultControls({
        attribution: false
    }).extend([
        mapInteractionAndControls.fullScreen,
        mapInteractionAndControls.overViewMap,
        mapInteractionAndControls.zoomSlider,
        mapInteractionAndControls.attribution
    ])
});
