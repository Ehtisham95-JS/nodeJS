const {readFileSync, writeFileSync} = require('fs');

console.log('Start');
const first = readFileSync('./content/first-text.txt', 'utf8');
const second = readFileSync('./content/second-text.txt', 'utf8');
console.log('Task End');
const third = writeFileSync('./content/third-text.txt', `Here is the result of: ${first} and ${second}`, {flag: 'a'});
console.log('Starting Next Process');