<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use MStaack\LaravelPostgis\Eloquent\PostgisTrait;
use MStaack\LaravelPostgis\Geometries\Point;

class CoronaPoints extends Model {
    use PostgisTrait;
    protected $table = 'corona_points';
    // protected $fillable = [
    //     'points'
    // ];
    // protected $postgisFields = [
    //     'points'=>Point::class,
    // ];
    protected $postgisTypes = [
        'points' => [
            'geomtype' => 'geometry',
            'srid' => 4326
        ]
    ];
}
