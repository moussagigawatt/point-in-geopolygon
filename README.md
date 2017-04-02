
# Example 1 (Determine if a point is inside a GeoJSON Polygon)
> The GeoJSON Polygon is defined by an array of its vertex.
> The first vertex in the array and the last one MUST be the same point.

```sh
var inside = require('point-in-geopolygon');
var jad = [ [ [ 2, 2 ], [ 5, 2 ], [ 5, 6 ], [ 2, 6 ],[ 2, 2 ] ] ];
 
console.log([inside.polygon(jad,[3,3] ),inside.polygon(jad,[4,3]),inside.polygon(jad, [9,12])]);

```
output
```sh
[ true, true, false ]
```
# Example 2 (Determine if a point is inside a GeoJSON data source)
```sh
var inside= require('point-in-geopolygon');
var map= JSON.parse('{ "type": "FeatureCollection","features": [{ "type": "Feature","geometry": {"type": "Polygon","coordinates": [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0],[100.0, 1.0], [100.0, 0.0] ]]},"properties": {"city": "Myland","time": "+1"}}]}');
 
console.log([inside.feature(map,[100,0.5] ),inside.feature(map,[0,0])]);

```
output
```sh
[ { id: 0, properties: { city: 'Myland', time: '+1' },  type: 'Polygon' }, -1 ]
```
# Methods
```sh
var inside = require('point-in-geopolygon');
```
### inside.polygon(geoPolygone,point)
> Return boolean whether point is inside geojson polygon. 
> Point should be a 2-item array of coordinates.
> Geojson polygon should be an array of 2-item arrays of coordinates first and last vertex are the same exp: [[p1,p2,p4,p1]] where pi=[xi,yi]
> The method does not distinguish between clockwise and anti clockwise polygon vertex arrangement.

### inside.feature(geoJsonObj,point)

> GeoJson Feature supported are Polygon and Multipolygon.
> Point should be a 2-item array of coordinates.
> Geojson object contains features array describing different region exp: Geojson.features=[Obj0,Obj1,Obj2..] where Obji={"type":"Feature","geometry":{"type":"Polygon","coordinates"...}}
> The Method returns object if the point is inside geoJson Object feature else -1.
> Returned object {id, properties, type} 
> id: feature rank in the features array GeoJson Object.
> properties: feature properties
> type: feature geometry type
> The method does not distinguish between clockwise and anti clockwise polygon vertex arrangement.

### Install

```sh
npm install point-in-geopolygon
```

### Todos

 - The method will distinguish between clockwise and anticlockwise polygon vertex arrangement

License
----

MIT


**Free Software, Hell Yeah!**

