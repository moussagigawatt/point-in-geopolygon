var inside= require('../');
var map= JSON.parse('{ "type": "FeatureCollection","features": [{ "type": "Feature","geometry": {"type": "Polygon","coordinates": [[[100.0, 0.0], [101.0, 0.0], [101.0, 1.0],[100.0, 1.0], [100.0, 0.0] ]]},"properties": {"city": "Myland","time": "+1"}}]}');
 
console.log([inside.feature(map,[100,0.5] ),inside.feature(map,[0,0])]);
