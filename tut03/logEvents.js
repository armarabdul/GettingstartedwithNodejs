const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

const fs = require("fs");
const path = require("path");
const { log } = require("console");
const fsPromises = require("fs").promises;

const logEvent = async (message, logName) => {
  const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
  const logItem = `${dateTime}\t${uuid()}\t${message}`;
  console.log(logItem);
  try {
    if (!fs.existsSync(path.join(__dirname, "logs"))) {
      await fsPromises.mkdir(path.join(__dirname, "logs"));
    }
    //testing
    await fsPromises.appendFile(
      path.join(__dirname, "logs", logName),
      logItem + "\n"
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logEvent;

// console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
// console.log(uuid());

//learned to install dependency using npm run dev and using it in a project, and writing a script in package-json,
//used format from date-fns package by npm i date-fns and version 4 of uuid (universal unique identifier) using npm i uuid,
