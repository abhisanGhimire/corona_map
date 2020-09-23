<!DOCTYPE html>
<html lang="en">
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sidebar.css') }}" rel="stylesheet">
    <link href="{{ asset('css/modal.css') }}" rel="stylesheet">

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <link rel="stylesheet" type="text/css" href="{{ asset('/css/map.css') }}">

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
            <div id="popup" class="ol-popup">
                <a href="#" id="popup-closer" class="ol-popup-closer"></a>
                <div id="popup-content"></div>
            </div>
            <div id="popup_1" class="ol-popup">
                <a href="#" id="popup-closer_1" class="ol-popup-closer"></a>
                <div id="popup-content_1"></div>
            </div>
            @include('modal')
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
        function closeInputModal(){
var wmsModal = document.getElementById("getWmsAddress");

wmsModal.style.display = "none";
        }
    </script>

</html>
