var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8").split('\n');

function threeVowels(str) {
  var vowels = 'aeiou';
  return str.split('').filter(function (value) {
    return vowels.indexOf(value) >= 0;
  }).length >= 3;
}

function repeatedLetter(str) {
  return str.split('').reduce(function(previousValue, currentValue) {
    if (previousValue === true || previousValue === currentValue) {
      return true;
    }
    return currentValue;
  }) === true;
}

function noMatch(str) {
  return str.indexOf('ab') < 0 && str.indexOf('cd') < 0 && str.indexOf('pq') < 0 && str.indexOf('xy') < 0;
}

var nice = 0;
for (var i = 0; i < input.length; i++) {
  var curString = input[i];

  if (noMatch(curString) && threeVowels(curString) && repeatedLetter(curString)) {
    nice++;
  }
}

console.log(nice);
