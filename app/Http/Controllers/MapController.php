<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MapController extends Controller {
    public function getCoordinates( Request $request ) {
        $query = " WITH line AS
(SELECT 'SRID=4326;".$request->geom."'::geometry AS geom),
T_line As
(SELECT st_transform(line.geom,3857)  AS geom from line),

linemeasure AS
-- Add a mesure dimension to extract steps
(SELECT ST_AddMeasure(T_line.geom, 0, ST_Length(T_line.geom)) as linem,
        generate_series(0, ST_Length(T_line.geom)::int, 100) as i
 FROM T_line),

points2d AS
(SELECT ST_GeometryN(ST_LocateAlong(linem, i), 1) AS geom FROM linemeasure),

T_points2d As
(SELECT st_transform(points2d.geom,4326)  AS geom from points2d),

cells AS
(SELECT  ST_Value(corona.rast, 1, T_points2d.geom) AS val
 FROM corona, T_points2d
 WHERE ST_Intersects(corona.rast, T_points2d.geom))

select * from cells";
        $results = DB::select( $query );
        foreach ( $results as $key=>$value ) {
            $values[] = $value->val;
        }

        return $values;
    }
}
