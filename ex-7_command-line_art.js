/*
Create a new Node.js project and install the figlet package.
Write a script that uses the function from this package to output some text based art (the figlet package README has a 'Quick Start' section).
Run the script with Node.js. */

import figlet from "figlet";

// I'll be looking for a font to use using the function provided by the Doc of the Figlet page

// figlet.fonts((err, fonts) => {
//   if (err) {
//     console.log("Error")
//     console.dir(err)
//     return
//   }
//   console.dir(fonts)
// });

console.log(
  figlet.textSync("DOOM SLAYER", {
    font: "Doom",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
);
