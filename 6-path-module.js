const path = require('path');


console.log(path.sep);

// Join method in path module
const filePath = path.join('\content', 'sub-content', 'test.txt');
console.log(filePath);


// Base method in path module
const base = path.basename(filePath);
console.log(base);

// Resolve method in path module 
const resolve = path.resolve(__dirname, filePath);

console.log(resolve);