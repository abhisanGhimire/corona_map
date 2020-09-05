<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MapController extends Controller {
    public function getCoordinates( Request $request ) {
        $getPointsQuery = "SELECT ST_AsText( ( dumpPoints ).geom ) As wkt_geom FROM (
            SELECT ST_DumpPoints( ST_Segmentize
            ( ST_GeomFromText( '".$request->geom."' ),
            0.1 ) ) AS dumpPoints
        ) AS foo";
        $getPoints = DB::select( $getPointsQuery );
        $i = 0;
        foreach ( $getPoints as $point ) {
            $points[$i] = $point->wkt_geom;
            $i++;
        }
        for ( $j = 0; $j<count( $points )-1;
        $j++ ) {
            $makeLineQuery = "SELECT ST_AsText(ST_MakeLine(ST_GeomFromText('".$points[$j]."', 4326),ST_GeomFromText
         ('".$points[$j+1]."', 4326)))";
            $makeLine[$j] = DB::select( $makeLineQuery );
        }

        for ( $k = 0; $k<count( $makeLine );
        $k++ ) {
            $line[$k] = $makeLine[$k][0]->st_astext;
        }
        for ( $l = 0; $l<count( $line );
        $l++ ) {
            $querypointPopulation = "SELECT (ST_SummaryStats(St_Union(ST_Clip(rast,ST_GeomFromText('".$line[$l]."', 4326),true)))).sum FROM public.corona
        WHERE ST_Intersects
         (rast,ST_GeomFromText
         ('".$line[$l]."', 4326))";
            $getPopulation[$l] = DB::select( $querypointPopulation );
        }
        for ( $m = 0; $m<count( $getPopulation );
        $m++ ) {
            $jsonEncodeData[$m] =  [$m=>$getPopulation[$m][0]->sum];
        }

        return $jsonEncodeData;
    }
}
