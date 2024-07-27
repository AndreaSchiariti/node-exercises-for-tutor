/* Create a script that uses the Node.js core fs.writeFile() (callback API)
method to write a text file. The documentation for this method is on the Node.js
File system page.*/

import { writeFile } from "node:fs";
import { Buffer } from "node:buffer";


const data = new Uint8Array(Buffer.from("I was generated with exercise.js"));

writeFile("new-file-with-API.txt", data, (err) => {
  if (err) {
    console.error("There was a problem")
    return
  }
  console.log("The file has been generated")
})




