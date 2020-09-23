<div id="graphModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="closePopulationChart">&times;</span>
        <canvas id="populationChart" width="100" height="100"></canvas>
    </div>
</div>
<div id="graphModal_1" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="closePopulationChart" id="close_histogram">&times;</span>
        <canvas id="populationChart_1" width="100" height="100"></canvas>
    </div>
</div>
<div id="getWmsAddress" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="closeLayerOption" id="wmsClose">&times;</span>
        <center>
            <p class="h1">Enter Url</p>
        </center>

        <input type="text" class="form-control mt-3" id="wmsAddress">
        </input>
        <button type="button" class="btn btn-primary mt-5" id="submitUrl">OK</button>
        <button type="button" class="btn btn-primary mt-1" onclick="closeInputModal()">Close</button>
    </div>
</div>
<div id="getLayerModal" class="modal">
    <!-- Modal content -->
    <div class="modal-content">
        <span class="closeLayerOption" id="layerClose">&times;</span>
        <center>
            <p class="h1">Select a Layer to be Displayed</p>
        </center>

        <select class="form-control mt-3" id="mapLayer">
        </select>
        <button type="button" class="btn btn-primary mt-5" onclick="closeLayerOption()">Close</button>
    </div>
</div>
