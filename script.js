//Selectors
let r1c1 = document.querySelector('.r1c1');
let r1c2 = document.querySelector('.r1c2');
let r1c3 = document.querySelector('.r1c3');
let r2c1 = document.querySelector('.r2c1');
let r2c2 = document.querySelector('.r2c2');
let r2c3 = document.querySelector('.r2c3');
let r3c1 = document.querySelector('.r3c1');
let r3c2 = document.querySelector('.r3c2');
let r3c3 = document.querySelector('.r3c3');
let result = document.querySelector('.result');
let scoreX = document.querySelector('.scoreX');
let scoreO = document.querySelector('.scoreO');
let numX = 0,
  numO = 0;
//the better selector
let array = [
  [r1c1, r1c2, r1c3],
  [r2c1, r2c2, r2c3],
  [r3c1, r3c2, r3c3],
];

// return to the original state.
function restate() {
  scoreX.textContent = `X = ${numX}`;
  scoreO.textContent = `O = ${numO}`;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      array[i][j].textContent = '#';
    }
  }
  result.textContent = `...`;
}

// the same thing to happen when one wins.
function whenWins() {
  result.textContent = `${symbol} won`;
  if (symbol == 'X') numX++;
  else numO++;
  setTimeout(() => {
    restate();
  }, 1000);
}

//checks if draw
function checkDraw() {
  if (counter == 9) {
    result.textContent = 'Draw';
    setTimeout(() => {
      restate();
    }, 1000);
  }
}

// checks the Winner;
function checkWin(symbol) {
  for (let i = 0; i < 3; i++) {
    if (array[i][0].textContent == `${symbol}`) {
      if (array[i][1].textContent == `${symbol}`) {
        if (array[i][2].textContent == `${symbol}`) {
          whenWins(); //rows
        }
      }
    }
    if (array[0][i].textContent == `${symbol}`) {
      if (array[1][i].textContent == `${symbol}`) {
        if (array[2][i].textContent == `${symbol}`) {
          whenWins(); //columns
        }
      }
    }
  }
  if (array[0][0].textContent == `${symbol}`) {
    if (array[1][1].textContent == `${symbol}`) {
      if (array[2][2].textContent == `${symbol}`) {
        whenWins(); //diag1
      }
    }
  }
  if (array[2][0].textContent == `${symbol}`) {
    if (array[1][1].textContent == `${symbol}`) {
      if (array[0][2].textContent == `${symbol}`) {
        whenWins(); //diag2
      }
    }
  }
}

//the event
let symbol = '';
var counter = 1;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    array[i][j].addEventListener('click', function () {
       if (counter % 2 == 0) {
        symbol = 'X';
        scoreX.style.fontWeight = 'normal';
        scoreO.style.fontWeight = '900';
      } else {
        symbol = 'O';
        scoreO.style.fontWeight = 'normal';
        scoreX.style.fontWeight = '900';
      }
      //
      if (array[i][j].textContent == 'X') array[i][j].textContent = 'X';
      else if (array[i][j].textContent == 'O') array[i][j].textContent = 'O';
      else {
        array[i][j].textContent = `${symbol}`;
        counter++;
      }
      checkDraw
      checkWin(symbol);
    });
  }
}
