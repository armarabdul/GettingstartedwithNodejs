const logEvent = require("./logEvents");
const EventEmitter = require("events");

// Create a custom EventEmitter named MyEmitter
class MyEmitter extends EventEmitter {}

// Initialize an object of MyEmitter
const myEmitter = new MyEmitter();

//add event listener for the log event
myEmitter.on("log", (msg) => logEvent(msg));

setTimeout(() => {
  //emit event
  myEmitter.emit("log", "log event emitted");
}, 2000);
