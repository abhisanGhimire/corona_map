<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class MapViewController extends Controller {
    public function index() {
        return view ( 'map' );
    }
}
