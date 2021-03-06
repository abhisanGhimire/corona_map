<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the 'web' middleware group. Now create something great!
|
*/

Route::get( '/', 'MapViewController@index' );
Route::get( '/corona', 'CoronaController@getCoordinates' );
Route::post( '/map/coordinates', 'MapController@getCoordinates' );
Route::get( '/test', 'MapController@getCoordinates' );
Route::post( '/map/histogram', 'MapController@getHistogram' );
Route::get( '/test2', 'MapController@getHistogram' );

Route::post( '/map/layers', 'MapViewController@getLayer' );
Route::get( '/test1', 'MapViewController@getLayer' );
