var fs = require('fs');

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

function part1 () {
  var world = [];
  var cache = [];
  var commands = fs.readFileSync('./input.txt', 'utf8').split('\n');
  for (var k in commands) populate(commands[k], world, cache);

  return find('a', world, cache);
}

function part2 () {
  var world = [];
  var cache = [];
  var commands = fs.readFileSync('./input.txt', 'utf8').split('\n');
  for (var k in commands) populate(commands[k], world, cache);

  world['b'] = part1();

  return find('a', world, cache);
}

console.log(part2());
