var fs = require('fs');
var input = fs.readFileSync('./input.txt', "utf8");

var count = 1;
var visited = {
  '0,0': true
};

var curLoc = '0,0';

for (var i = 0; i < input.length; i += 2) {
  var direction = input[i];
  var curX = +curLoc.split(',')[0];
  var curY = +curLoc.split(',')[1];

  switch (direction) {
    case '^':
      curY++;
      break;
    case 'v':
      curY--;
      break;
    case '>':
      curX++;
      break;
    case '<':
      curX--;
      break;
  }

  curLoc = curX + ',' + curY;

  if (!visited[curLoc]) {
    visited[curLoc] = true;
    count++;
  }
}

curLoc = '0,0';

for (var i = 1; i < input.length; i += 2) {
  var direction = input[i];
  var curX = +curLoc.split(',')[0];
  var curY = +curLoc.split(',')[1];

  switch (direction) {
    case '^':
      curY++;
      break;
    case 'v':
      curY--;
      break;
    case '>':
      curX++;
      break;
    case '<':
      curX--;
      break;
  }

  curLoc = curX + ',' + curY;

  if (!visited[curLoc]) {
    visited[curLoc] = true;
    count++;
  }
}

console.log(count);
