const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const { logger } = require("./middleware/logEvents");
const errorHandler = require("./middleware/errorHandler");
const PORT = process.env.PORT || 3500;

app.use(logger);

//CORS stands for cross origin resource sharing.
const whitelist = [
  "https://www.yoursite.com",
  "http://128.0.0.1:5500",
  "http://localhost:3500",
];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

//built-in middleware to handle urlencoded data
//in other words, form data:
//'content-type: application/x-www-form-urlencoded'
app.use(express.urlencoded({ extended: false }));

//built-in middleware for json
app.use(express.json());

//server static files
app.use(express.static(path.join(__dirname, "/public")));

app.get("^/$|/index(.html)?", (req, res) => {
  // serving the file using express js
  // method 1
  //res.sendFile("./views/index.html", { root: __dirname });
  res.sendFile(path.join(__dirname, "views", "index.html"));
  console.log("file served");
});

app.get("/new-page(.html)?", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "new-page.html"));
});

app.get("/old-page(.html)?", (req, res) => {
  res.redirect(301, "/new-page.html");
});

app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ error: "404 not found" });
  } else {
    res.type("txt").send("404 not found");
  }
});

// route handlers

app.get(
  "/hello(.html)?",
  (req, res, next) => {
    console.log("attempted to load hello.html");
    next();
  },
  (req, res) => {
    res.send("Hello World!");
  }
);

// chaining route handlers

const one = (req, res, next) => {
  console.log("one");
  next();
};

const two = (req, res, next) => {
  console.log("two");
  next();
};

const three = (req, res, next) => {
  console.log("three");
  res.send("Finished");
};

app.get("chain(.html)?", [one, two, three]);

app.use(errorHandler);

app.listen(PORT, () => console.log(`server  is running  at ${PORT}`));

//add event listener for the log event
