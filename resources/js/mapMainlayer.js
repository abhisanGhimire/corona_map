import ImageWMS from "ol/source/ImageWMS";
import ImageLayer from "ol/layer/Image";
import * as mapConstants from "./mapConstants.js";
//Border of Nepal
const sourceNepalBorder = new ImageWMS({
    url: mapConstants.gurl,
    params: {
        layers: "nepal_map:maps_nepal",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: "© Innovative Solution Pvt. Ltd."
});
export const NepalBorder = new ImageLayer({
    source: sourceNepalBorder,
    title: "NepalBorder",
    visible: true
});
