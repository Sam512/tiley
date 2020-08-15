const crypto = require('crypto');
const colors = require('./colors');
const argv = require('minimist')(process.argv.slice(2));

const size = parseInt(argv.size || 26, 10);
const s = parseFloat(argv.s || 0.8);
const v = parseFloat(argv.v || 0.8);
const seed = parseFloat(argv.seed || 1.2);
const palette = colors.palette(size, 1.2, s, v);

function idToColor(id) {
  const idAsHex = crypto.createHash('md5').update(id).digest('hex');
  const idAsNumber = parseInt(idAsHex, 16);
  console.log(palette[idAsNumber % palette.length]);
  return palette[idAsNumber % palette.length];
}

module.exports = idToColor;
