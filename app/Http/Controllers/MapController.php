<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MapController extends Controller {
    public function getCoordinates( Request $request ) {
        $getPointsQuery = "SELECT ST_AsText( ( dumpPoints ).geom ) As wkt_geom FROM (
            SELECT ST_DumpPoints( ST_Segmentize
            ( ST_GeomFromText( 'LINESTRING(80.96401969868269 30.30363880492122,83.4732026068399 28.478627816316276)' ),
            0.1 ) ) AS dumpPoints
        ) AS foo";
        $getPoints = DB::select( $getPointsQuery );
        $i = 0;
        foreach ( $getPoints as $point ) {

            $points[$i] = $point->wkt_geom;
            $querypointPopulation = "SELECT (ST_SummaryStats(St_Union(ST_Clip(rast,ST_GeomFromText('LINESTRING(80.42117327945793 29.70599591915989,80.64743051918104 29.9459022926482)', 4326),true)))).sum
            FROM public.corona
            WHERE ST_Intersects
             (rast,ST_GeomFromText
             ('".$points."', 4326))";
        }
        dd( $points );
        return $request->pointOne;
    }
}
