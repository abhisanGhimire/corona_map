<div id="mapSidebar" class="mapSidebar">
    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>

    <div id="selection" class="selection">
        <h4 class="mt-2"><b>Base Layers</b></h4>

        <select class="mt-2" id="base_layer">
            <option value="NoLayer">No Layer</option>
            <option value="OSMStandard">OSM Standard</option>
            <option value="OSMHumanitarian">OSM Humanitarian</option>
            <option value="BingMaps">Bing Maps</option>
            <option value="CartoDarkAll">Carto Dark All</option>
            <option value="StamenTerrainWithLabels">Only Labels</option>
            <option value="StamenTerrain">Stamen Terrain</option>
            <option value="gmap">Google Map</option>
            <option value="gsatmap">Google Satellite Map</option>
        </select>
        <h4 class="mt-5"><b>Top Layers</b></h4>

        {{-- Border Layer --}}
        <input class="layer mt-2 mr-2" type="checkbox" name="rasterTileLayerCheckbox" value="nepalBorder"
            checked />Nepal
        Border<br />
        <input class="layer  mr-2" type="checkbox" name="rasterTileLayerCheckbox" value="nepalProvince"
            id="provincelayerCheckbox" />Province<br />
        <input class="layer  mr-2" type="checkbox" name="rasterTileLayerCheckbox" value="nepalDistrict"
            id="districtlayerCheckbox" />District<br />
        <input class="layer  mr-2" type="checkbox" name="rasterTileLayerCheckbox" value="nepalVDC"
            id="vdclayerCheckbox" />VDC<br />
        <input class="layer  mr-2" type="checkbox" name="rasterTileLayerCheckbox" value="nepalWard"
            id="wardlayerCheckbox" />Ward<br />
        <input class="layer  mr-2" type="checkbox" name="rasterTileLayerCheckbox" value="corona"
            id="coronalayerCheckbox" />Corona<br />
    </div>

</div>
