var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8").split('\n');

var total = 0;
for (var i = 0; i < input.length; i++) {
  var dimensions = input[i].split('x');
  var l = parseInt(dimensions[0]);
  var w = parseInt(dimensions[1]);
  var h = parseInt(dimensions[2]);

  total += l + l + w + w + h + h - 2 * Math.max(l, w, h);
  total += l * w * h;
}

console.log(total);
