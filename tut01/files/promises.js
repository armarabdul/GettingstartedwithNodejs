//fs.promises module, which provides an asynchronous version of the file system operations.

const fsPromises = require("fs").promises;

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile("./starter.txt", "utf8");

    //deleting the starter text using unlink
    //await fsPromises.unlink("./promiseWrite.txt");
    await fsPromises.writeFile("./promiseWrite.txt", data);
    await fsPromises.appendFile(
      "./promiseWrite.txt",
      "\n\n Promise written completed"
    );
    await fsPromises.rename("./promiseWrite.txt", "./promisesWrite.txt");
    const newData = await fsPromises.readFile("./promisesWrite.txt", "utf8");
    console.log(data);
    console.log(newData);
  } catch (err) {
    console.error(err);
  }
};

fileOps();
