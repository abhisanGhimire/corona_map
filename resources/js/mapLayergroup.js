import { Group as LayerGroup } from "ol/layer";
import * as mapBaselayer from "./mapBaselayer";
import * as mapMainlayer from "./mapMainlayer";

export const baseLayerGroup = new LayerGroup({
    layers: [
        mapBaselayer.base_no_layer,
        mapBaselayer.base_osm_standardmap,
        mapBaselayer.base_osm_humanitarianmap,
        mapBaselayer.base_bing_map,
        mapBaselayer.base_cartoDB_map,
        mapBaselayer.base_stamenwithlabel_map,
        mapBaselayer.base_stamen_map,
        mapBaselayer.vector,
        mapBaselayer.base_gmap,
        mapBaselayer.base_gsatmap
    ]
});
export const mainLayerGroup = new LayerGroup({
    layers: [
        mapMainlayer.nepalBorder,
        mapMainlayer.nepalProvince,
        mapMainlayer.nepalDistrict,
        mapMainlayer.nepalVDC,
        mapMainlayer.nepalWard,
        mapMainlayer.corona
    ]
});
