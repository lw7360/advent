var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8").split('\n');

var total = 0;
for (var i = 0; i < input.length; i++) {
  var dimensions = input[i].split('x');
  var l = parseInt(dimensions[0]);
  var w = parseInt(dimensions[1]);
  var h = parseInt(dimensions[2]);

  total += 2 * l * w;
  total += 2 * w * h;
  total += 2 * h * l;

  total += Math.min(l * w, w * h, h * l);
}

console.log(total);
