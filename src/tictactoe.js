let cells = document.getElementsByClassName("cell");

let movesAvaible = [];

// Funcion jugador

let limite = 9;
let nuevaLista = [];
for (let i = 0; i < limite; i++) {
  let ramdomC = Math.floor(Math.random() * limite);
  nuevaLista = cells[i].filter(" ");
  cells[i].addEventListener("click", function () {
    console.log(cells[i]);

    cells[i].innerHTML = "🐱";

    //validar que solomanete los circulos, oseala jugada de la maquina sea en campos vacios y no en X U O

    setTimeout(() => {
      cells[ramdomC].innerHTML = "🐭";
      console.log(cells[ramdomC]);
    }, 1000);
  });
}

/*
    console.log(cells);
    isTurn();
    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 8);
    checkLine(6, 4, 2);

   */

/*

function Computer(c) {
  let cellC = c.target.innerHTML;
  if (!cellC.length) {
    cellC[ramdomC].filter(" ").c.innerHTML = "O";
  }
}
// FUNCIÓ TURNOS
function isTurn() {
  if (cells.value === "X" || cells.value !== "O") {
    document.querySelector("#Turns").innerHTML = "Es turno <br> de:  O";
  } else if (cells.value === "O" && cells.value !== "X") {
    cells.value.filter("O");
    document.querySelector("#Turns").innerHTML = "Es turno <br> de: X ";
  }
}

// FUNCIÓN PARA CHECAR QUIÉN GANÓ
function checkLine(c1, c2, c3) {
  if (
    cells[c1].innerHTML.length &&
    cells[c1].innerHTML === cells[c2].innerHTML &&
    cells[c2].innerHTML === cells[c3].innerHTML
  ) {
    showWinner(cells[c1].innerHTML);
  }
}
// FUNCIÓN MOSTRAR GANADOR
function showWinner(player) {
  document.querySelector("#Resultado").innerHTML = player + " " + "Ganador!!!";
}
*/

// FUNCIÓN BOTÓN DE RESTART
function Reset() {
  location.reload();
}
function Stopgame(game) {}
