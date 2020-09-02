<?php

namespace App\Http\Controllers;
use App\CoronaPoints;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use MStaack\LaravelPostgis\Geometries\Point;
use MStaack\LaravelPostgis\Eloquent\PostgisTrait;

class CoronaController extends Controller {
    public function getCoordinates() {
        $getAllInformation = Http::withHeaders( [
            'accept' => 'application/json'
        ] )
        ->get( 'https://data.nepalcorona.info/api/v1/covid' )->body();
        $decodedAllInfo = ( json_decode( $getAllInformation ) );
        $totalData = count( $decodedAllInfo ) ;
        for ( $i = 1; $i < $totalData; $i++ ) {
            $lat[$i] = $decodedAllInfo[$i]->point->coordinates[0];
            $long[$i] = $decodedAllInfo[$i]->point->coordinates[1];
            $allPoints = new CoronaPoints;
            $allPoints->points = new Point( $long[$i], $lat[$i] );
            $allPoints->save();
        }
        return ;
    }
}
