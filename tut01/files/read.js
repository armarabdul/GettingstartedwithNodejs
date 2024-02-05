//reading data from module or file with fs.readFile
const fs = require("fs");

fs.readFile("./starter.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//checking which data is read first in console
console.log("Hello...");

//exit of uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});

//either way is to encode the data using UTF-8

fs.readFile("./starter.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//exit of uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});

//instead of hardcoding file name there is another approach to read a file using path module

const path = require("path");

fs.readFile(path.join(__dirname, "starter.txt"), "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

//exit of uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
