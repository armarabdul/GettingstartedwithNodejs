console.log("hello world");
// beginning with node core modules such as os and path.
const os = require("os");
const path = require("path");

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.parse(__filename));
console.log(path.basename(__filename));
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

const math = require("./math");

console.log(math.add(2, 3));
console.log(math.subtract(2, 3));
console.log(math.multiply(2, 3));
console.log(math.divide(2, 3));
