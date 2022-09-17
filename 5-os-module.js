const names = require('./1-names');
const fun = require('./2-function');
const data = require('./3-Alternative-flavor');

require('./4-mind-grenade');

console.log(data);

fun(names.john);
fun(names.ali);
fun(names.raja);

const os = require('os');

// User info using os module
const user = os.userInfo();

// System uptime using os module

console.log(`The system uptime is ${os.uptime()}seconds`);

// Other os module property

const prop = {
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(prop);