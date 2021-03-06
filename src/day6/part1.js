var fs = require('fs');
var input = fs.readFileSync('./input.txt', 'utf8').split('\n');

var lights = [];

for (var i = 0; i < 1000; i++) {
  lights[i] = [];
}

function turnOn (startEnd) {
  var start = startEnd.start;
  var end = startEnd.end;

  for (var i = start[0]; i <= end[0]; i++) {
    for (var j = start[1]; j <= end[1]; j++) {
      lights[i][j] = 1;
    }
  }
}

function turnOff (startEnd) {
  var start = startEnd.start;
  var end = startEnd.end;

  for (var i = start[0]; i <= end[0]; i++) {
    for (var j = start[1]; j <= end[1]; j++) {
      lights[i][j] = 0;
    }
  }
}

function toggle (startEnd) {
  var start = startEnd.start;
  var end = startEnd.end;

  for (var i = start[0]; i <= end[0]; i++) {
    for (var j = start[1]; j <= end[1]; j++) {
      if (lights[i][j] === 1) {
        lights[i][j] = 0;
      } else {
        lights[i][j] = 1;
      }
    }
  }
}

function getStartEnd (str) {
  str = str.split('through');
  var start = str[0].split(',').map(function (x) { return +x; });
  var end = str[1].split(',').map(function (x) { return +x; });

  return {
    start: start,
    end: end
  };
}

for (var i = 0; i < input.length; i++) {
  var instruction = input[i];

  if (instruction.includes('turn on')) {
    instruction = instruction.substring('turn on'.length);
    turnOn(getStartEnd(instruction));
  } else if (instruction.includes('turn off')) {
    instruction = instruction.substring('turn off'.length);
    turnOff(getStartEnd(instruction));
  } else if (instruction.includes('toggle')) {
    instruction = instruction.substring('toggle'.length);
    toggle(getStartEnd(instruction));
  }
}

var lightsOn = 0;
for (var i = 0; i < lights.length; i++) {
  for (var j = 0; j < lights[i].length; j++) {
    if (lights[i][j] === 1) {
      lightsOn++;
    }
  }
}

console.log(lightsOn);
