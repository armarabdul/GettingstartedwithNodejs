const { error } = require("console");
const fs = require("fs");

//make directory if it doesnot exist
if (!fs.existsSync("./new")) {
  //checks if the specific(./new) directory is previously created or not,
  fs.mkdir("./new", (err) => {
    if (err) throw error;
    console.log("new directory created");
  });
}

//remove directory if it exist
if (fs.existsSync("./new")) {
  //checks if the specific(./new) directory is previously created or not,
  fs.rmdir("./new", (err) => {
    if (err) throw error;
    console.log("new directory deleted");
  });
}
