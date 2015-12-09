var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8");

var res = 0;
for (var i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    res++;
  } else if (input[i] === ')') {
    res--;
  }

  if (res === -1) {
    console.log(i + 1);
    break;
  }
}
