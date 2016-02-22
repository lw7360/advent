function populate (command, world, cache) {
  var ops = command.split('->');
  var target = ops[1].trim();
  var expression = ops[0].trim();

  if (isNaN(expression)) {
    world[target] = expression;
  } else {
    world[target] = +expression;
  }

  cache[target] = NaN;
}

function find (start, world, cache) {
  if (!isNaN(start)) return start;
  if (!isNaN(cache[start])) return cache[start];
  if (!isNaN(world[start])) {
    cache[start] = world[start];
    return cache[start];
  }
  var args = world[start].split(' ');
  if (args.length === 1) {
    cache[start] = find(args[0], world, cache);
    return cache[start];
  }
  if (args.length === 2) {
    var not = ~find(args[1], world, cache);
    not = (not < 0) ? (65536 + not) : not;
    cache[start] = not;
    return cache[start];
  }
  if (args.length === 3) {
    if (args[1] === 'AND') {
      var res = find(args[0], world, cache) & find(args[2], world, cache);
      cache[start] = res;
      return cache[start];
    }
    if (args[1] === 'OR') {
      var res = find(args[0], world, cache) | find(args[2], world, cache);
      cache[start] = res;
      return cache[start];
    }
    if (args[1] === 'RSHIFT') {
      var res = find(args[0], world, cache) >> find(args[2], world, cache);
      cache[start] = res;
      return cache[start];
    }
    if (args[1] === 'LSHIFT') {
      var res = find(args[0], world, cache) << find(args[2], world, cache);
      cache[start] = res;
      return cache[start];
    }
  }
}

var world = [];
var cache = [];
var fs = require('fs');
var commands = fs.readFileSync('./input.txt', 'utf8').split('\n');

for (var i in commands) {
  populate(commands[i], world, cache);
}

console.log(find('a', world, cache));
