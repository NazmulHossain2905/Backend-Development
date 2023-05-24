const os = require("os");

// console.log(os);

// console.log(os.userInfo());
// console.log(os.userInfo().username);
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.homedir());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.totalmem() - os.freemem());

const usedMemory = os.totalmem() - os.freemem();
console.log(usedMemory + os.freemem());
console.log(os.totalmem());
