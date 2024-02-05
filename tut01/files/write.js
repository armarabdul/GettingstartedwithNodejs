//reading and writing data from module or file with fs.readFile
const fs = require("fs");

fs.readFile("./starter.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});

//checking which data is read first in console
console.log("Hello...");

//writing data in the file

fs.writeFile(
  "./reply.txt",
  "Its a warm morning, nice to see you agian.",
  (err) => {
    if (err) throw err;
    console.log("Write successfull");
  }
);

// appending file using fs.append

fs.appendFile("./test.txt", "Append test.", (err) => {
  if (err) throw err;
  console.log("Write successfull");
});

//exit of uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});

//to check the asynchrounous behavior i have nested the append and rename file in write file

fs.writeFile(
  "./nested.txt",
  "Its a warm morning, nice to see you agian.",
  (err) => {
    if (err) throw err;
    console.log("Write successfull");

    fs.appendFile("./nested.txt", "\n\nYes it is.", (err) => {
      if (err) throw err;
      console.log("Append successfull");

      fs.rename("./nested.txt", "./newnested.txt", (err) => {
        if (err) throw err;
        console.log("rename successfull");
      });
    });
  }
);

//exit of uncaught errors
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught error : ${err}`);
  process.exit(1);
});
