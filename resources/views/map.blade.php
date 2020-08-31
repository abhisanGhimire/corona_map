<!DOCTYPE html>
<html lang="en">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/sidebar.css') }}" rel="stylesheet">

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
        <div id="map"></div>
        <script type="text/javascript" src="{{ asset('/js/map.js') }}"></script>
    </body>
    <script>
        /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
}
    </script>

</html>
