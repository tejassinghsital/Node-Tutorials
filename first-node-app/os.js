const os = require("os");

const a = os.freemem();
console.log(a / (1024 ** 3));

const b = os.totalmem();
console.log(b / (1024 ** 3));

const c = os.hostname();
console.log(c);
