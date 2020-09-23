import { Draw } from "ol/interaction";
import * as mapFunctions from "./mapFunctions";

export const kml_pointer = document.getElementById("kml_pointer");

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
