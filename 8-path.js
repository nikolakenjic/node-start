const path = require('path');

const pathFile = path.join('/content', 'text', 'test.txt');

const base = path.basename(pathFile);

console.log(base);

const absolute = path.resolve(__dirname, 'content', 'text', 'test.txt');

console.log(absolute);
