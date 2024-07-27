/* Promises lucky draw

The `luckyDraw` function returns a promise. Create a promise chain where the function is called for for each of the players: Joe, Caroline and Sabrina

Log out the resolved value for each promise and handle any promise rejections in the chain.

```
function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
} */

function luckyDraw(player) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

luckyDraw("Joe")
  .then((joeDraw) => console.log(joeDraw))
  .catch((error) => console.log(error))
  .then(() => luckyDraw("Caroline"))
  .then((carolineDraw) => console.log(carolineDraw))
  .catch((error) => console.log(error))
  .then(() => luckyDraw("Sabrina"))
  .then((sabrinaDraw) => console.log(sabrinaDraw))
  .catch((error) => console.log(error));

/* I use a catch after all the draws promises followed by a then
in order to handle all the results, if I used only 1 catch at the
end all the promise would be rejected and if someone loses the chain
would stop */
