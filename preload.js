const fs = require("fs");
const path = require("path");
console.log(path.resolve(__dirname, "/user/example.txt"), '"example.txt');
fs.writeFile("./example.txt", "abc", () => {
  console.log("done");
});
