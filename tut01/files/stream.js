//Readstream for large files
const fs = require("fs");
//reading a stream of data
const rs = fs.createReadStream("./lorem.txt", { encoding: "utf8" });
//writing a stream of data to a new file
const ws = fs.createWriteStream("./new-lorem.txt");

rs.on("data", (dataChunk) => {
  ws.write(dataChunk);
});

//for efficient use of writing stream of data we use pipe

rs.pipe(ws);
