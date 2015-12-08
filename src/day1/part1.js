var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8");

var res = 0;
for (var i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    res++;
  } else if (input[i] === ')') {
    res--;
  }
}

console.log(res);
