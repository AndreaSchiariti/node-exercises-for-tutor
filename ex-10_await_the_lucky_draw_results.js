/* Create agetResults function that uses async and await.
 Inside of the function, call the luckyDraw function
 for each of the players: Tina, Jorge, Julien

Log out the resolved value for each promise and handle
any promise rejections.

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

async function getResults() {
  try {
    const tinaScore = await luckyDraw("Tina");
    console.log(tinaScore);
  } catch (error) {
    console.log(error);
  }

  try {
    const jorgeScore = await luckyDraw("Jorge");
    console.log(jorgeScore);
  } catch (error) {
    console.log(error);
  }

  try {
    const julienScore = await luckyDraw("Julien");
    console.log(julienScore);
  } catch (error) {
    console.log(error);
  }
}

getResults()
