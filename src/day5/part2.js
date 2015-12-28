var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8").split('\n');

function twoPairs(str) {
  for (var i = 0; i < str.length - 1; i++) {
    var pair = str.substr(i, 2);
    var rest = str.substring(0, i) + ' ' + str.substring(i+2);

    if (rest.includes(pair)) {
      return true;
    }
  }
  return false;
}

function oneRepeat(str) {
  for (var i = 0; i < str.length - 2; i++) {
    if (str[i] === str[i + 2]) {
      return true;
    }
  }
  return false;
}

var nice = 0;
for (var i = 0; i < input.length; i++) {
  var curString = input[i];

  if (twoPairs(curString) && oneRepeat(curString)) {
    nice++;
  }
}

console.log(nice);
