const fs = require('fs');

// fs.readFile('./r1.txt', "utf-8", (err, data) => {
//  if (err) {
//   return err;// wirte return so that it don't consider other if-else and else statement and directly retun output. we can also use throw instead of return
//  }
//  else {
//   console.log(data);
//  }
// })

// console.log("I am first");

const a = fs.readFileSync('./r1.txt', 'utf-8');

console.log(a);
console.log('I am 1st');


