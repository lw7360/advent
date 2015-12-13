var input = 'bgvyzdsv';
var crypto = require('crypto');

var i = 0;
while (true) {
  var hash = crypto.createHash('md5').update(input + i).digest('hex');
  if (hash.indexOf('000000') === 0) {
    console.log(i);
    break;
  }
  i++;
}

