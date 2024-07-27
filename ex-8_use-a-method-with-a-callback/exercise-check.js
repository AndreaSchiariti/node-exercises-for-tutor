import * as fs from "node:fs"

fs.readFile("new-file-with-API.txt", (err, data) => {
  if (err) {
    console.error("There was a problem")
    return
  }
  console.log(data)

  fs.readFile("new-file-with-API.txt", {encoding: "utf-8"}, (err, dataString) => {
    if (err) {
      console.error("There was a problem")
      return
    }
    console.log(dataString)
  })
})
