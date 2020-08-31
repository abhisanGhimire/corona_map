import "ol/ol.css";
import { Group as LayerGroup, Tile as TileLayer } from "ol/layer";
import * as mapMain from "./mapMain";
import * as mapMainlayer from "./mapMainlayer";


mapMain.map;
mapMain.map.addLayer(mapMainlayer.NepalBorder);
