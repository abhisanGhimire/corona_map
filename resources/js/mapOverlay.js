import Overlay from "ol/Overlay";

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
// Popup for histogram
/**
 * Elements that make up the popup.
 */
export const container_1 = document.getElementById("popup_1");
export const content_1 = document.getElementById("popup-content_1");
export const closer_1 = document.getElementById("popup-closer_1");
/**
 * Create an overlay to anchor the popup to the map.
 */
export const histogramOverlay = new Overlay({
    element: container_1,
    autoPan: true,
    autoPanAnimation: {
        duration: 250
    }
});

/**
 * Add a click handler to hide the popup.
 * @return {boolean} Don't follow the href.
 */
closer_1.onclick = function() {
    histogramOverlay.setPosition(undefined);
    closer_1.blur();
    return false;
};
