import fs from "fs";
// console.log("Ok this is the testing new branch");
fs.writeFile("hellothree.txt", "this is the testing content", function (err) {
  console.log("saved");
});
