import { Tile as TileLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import BingMaps from "ol/source/BingMaps";
import XYZ from "ol/source/XYZ";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import Stamen from "ol/source/Stamen";

//Drawing Layer
//Vector Layer::Donot touch this,it is for drawing
export const vectorSource = new VectorSource({
    crossOrigin: "anonymous",
    wrapX: false
});
export const vector = new VectorLayer({
    source: vectorSource,
    visible: true,
    zIndex: 99
});

export const base_no_layer = new TileLayer({
    source: "",
    visible: true,
    title: "NoLayer"
});

// Openstreet Map Standard
export const base_osm_standardmap = new TileLayer({
    source: new OSM({
        crossOrigin: "anonymous"
    }),
    visible: false,
    title: "OSMStandard"
});

// Openstreet Map Humanitarian
export const base_osm_humanitarianmap = new TileLayer({
    source: new OSM({
        crossOrigin: "anonymous",
        url: "https://{a-c}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
    }),
    visible: false,
    title: "OSMHumanitarian"
});

// Bing Maps Basemap Layer
export const base_bing_map = new TileLayer({
    source: new BingMaps({
        crossOrigin: "anonymous",
        key: "Am91Zo6OSOQGKiN4xHLCgW3hd27DTm6n2E1xiKxMEzQb0JOXFYuttfbabSCavjpe",
        imagerySet: "CanvasGray" // Road, CanvasDark, CanvasGray
    }),
    visible: false,
    title: "BingMaps"
});

//Google Map Normal
export const base_gmap = new TileLayer({
    source: new XYZ({
        crossOrigin: "anonymous",
        url: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
        key: "AIzaSyCy29Hks6xqzvqjmVqixslBhMQYlJgZkLk"
    }),
    visible: false,
    title: "gmap"
});

//Google Map Statellite View
export const base_gsatmap = new TileLayer({
    source: new XYZ({
        crossOrigin: "anonymous",
        url: "http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}",
        key: "AIzaSyCy29Hks6xqzvqjmVqixslBhMQYlJgZkLk"
    }),
    visible: false,
    title: "gsatmap"
});

// CartoDB BaseMap Layer
export const base_cartoDB_map = new TileLayer({
    source: new XYZ({
        crossOrigin: "anonymous",
        url:
            "http://{1-4}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
        attributions: "© CARTO"
    }),
    visible: false,
    title: "CartoDarkAll"
});

// Stamen BaseMap Layer with Terrain
export const base_stamenwithlabel_map = new TileLayer({
    source: new Stamen({
        crossOrigin: "anonymous",
        layer: "terrain-labels",
        attributions:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false,
    title: "StamenTerrainWithLabels"
});

// Stamen BaseMap Layer
export const base_stamen_map = new TileLayer({
    source: new XYZ({
        crossOrigin: "anonymous",
        url: "http://tile.stamen.com/terrain/{z}/{x}/{y}.jpg",
        attributions:
            'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>.'
    }),
    visible: false,
    title: "StamenTerrain"
});
