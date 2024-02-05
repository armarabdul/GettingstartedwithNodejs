const { format } = require("date-fns");
const { v4: uuid } = require("uuid");

console.log(format(new Date(), "yyyyMMdd\tHH:mm:ss"));
console.log(uuid());

//learned to install dependency using npm run dev and using it in a project, and writing a script in package-json,
//used format from date-fns package by npm i date-fns and version 4 of uuid (universal unique identifier) using npm i uuid,
