var inside = require('../');
var jad = [ [ [ 2, 2 ], [ 5, 2 ], [ 5, 6 ], [ 2, 6 ],[ 2, 2 ] ] ];
 
console.log([inside.polygon(jad,[3,3] ),inside.polygon(jad,[4,3]),inside.polygon(jad, [9,12])]);
