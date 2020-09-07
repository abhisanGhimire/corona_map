<!DOCTYPE html>
<html lang="en">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sidebar.css') }}" rel="stylesheet">
    <link href="{{ asset('css/modal.css') }}" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Map</title>
        <style>
            #map {
                position: absolute;
                height: 92%;
                width: 100%;
            }
        </style>
    </head>

    <body>

        @include('navbar')
        @include('sidebar')
        <div id="map">
            <div id="graphModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <span class="closePopulationChart">&times;</span>
                    <canvas id="populationChart" width="100" height="100"></canvas>
                </div>
            </div>
            <div id="getLayerModal" class="modal">
                <!-- Modal content -->
                <div class="modal-content">
                    <span class="closeLayerOption">&times;</span>
                    <center>
                        <p class="h1">Select a Layer to be Displayed</p>
                    </center>

                    <select class="form-control mt-3" id="mapLayer">
                    </select>
                    <button type="button" class="btn btn-primary mt-5" onclick="closeLayerOption()">Close</button>
                </div>

            </div>
        </div>
        <script type="text/javascript" src="{{ asset('/js/map.js') }}"></script>
    </body>
    <script>
        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mapSidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mapSidebar").style.width = "0";
}
function closeLayerOption(){
var modal = document.getElementById("getLayerModal");

               modal.style.display = "none";
        }
    </script>

</html>
