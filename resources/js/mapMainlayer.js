import ImageWMS from "ol/source/ImageWMS";
import ImageLayer from "ol/layer/Image";
import * as mapConstants from "./mapConstants";
import TileWMS from "ol/source/TileWMS";
import TileLayer from "ol/layer/Tile";

const mapAttribution = "© Innovative Solution Pvt. Ltd.";

//Border of Nepal
const sourceNepalBorder = new ImageWMS({
    url: mapConstants.gurl,
    params: {
        layers: "nepal_map:maps_nepal",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});
export const nepalBorder = new ImageLayer({
    source: sourceNepalBorder,
    title: "nepalBorder",
    visible: true
});

//Province of Nepal
const sourceNepalProvince = new TileWMS({
    url: mapConstants.gurl,
    params: {
        layers: "nepal_map:maps_province",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});

export const nepalProvince = new TileLayer({
    source: sourceNepalProvince,
    title: "nepalProvince",
    visible: false
});

//District of Nepal
const sourceNepalDistrict = new ImageWMS({
    url: mapConstants.gurl,
    params: {
        layers: "nepal_map:maps_district",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});
export const nepalDistrict = new ImageLayer({
    source: sourceNepalDistrict,
    title: "nepalDistrict",
    visible: false
});

//Vdc of Nepal
const sourceNepalVdc = new TileWMS({
    url: mapConstants.gurl,
    params: {
        layers: "nepal_map:maps_vdc",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});
export const nepalVDC = new TileLayer({
    source: sourceNepalVdc,
    title: "nepalVDC",
    visible: false
});

//Ward of Nepal
const sourceNepalWard = new TileWMS({
    url: mapConstants.gurl,
    params: {
        layers: "nepal_map:maps_ward",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});
export const nepalWard = new TileLayer({
    source: sourceNepalWard,
    title: "nepalWard",
    visible: false
});

//Corona
const sourceCorona = new TileWMS({
    url: "http://localhost:8080/geoserver/nepal_map/wms",
    params: {
        layers: "nepal_map:corona_points",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});
export const corona = new TileLayer({
    source: sourceCorona,
    title: "corona",
    visible: false
});

//Population
const sourcePopulation = new TileWMS({
    url: "http://localhost:8080/geoserver/nepal_map/wms",
    params: {
        layers: "nepal_map:NPL_ppp_2020_adj_v2_int16",
        TILED: true
    },
    crossOrigin: "anonymous",
    serverType: "geoserver",
    attributions: mapAttribution
});
export const population = new TileLayer({
    source: sourcePopulation,
    title: "population",
    visible: false
});
