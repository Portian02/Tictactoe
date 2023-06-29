let cells = document.getElementsByClassName("cell");
let limite = 9;
let nuevaLista = [];

// Funcion jugador

for (let i = 0; i < limite; i++) {
  nuevaLista.push(i);

  cells[i].addEventListener("click", function () {
    let toDelete = nuevaLista.findIndex((celda) => celda === i);
    if (toDelete !== -1) {
      cells[i].innerHTML = "🐱";
      console.log(cells[i].innerHTML);
      nuevaLista.splice(toDelete, 1);
      let randomAvailable = Math.floor(Math.random() * nuevaLista.length);
      let index = nuevaLista[randomAvailable];

      //validar que solomanete los circulos, oseala jugada de la maquina sea en campos vacios y no en X U O
      // cells[i] = nuevaLista.filter((vacío) => vacío.length < 1);

      setTimeout(() => {
        cells[index].innerHTML = "🐭";
        console.log(cells[index].innerHTML);
        nuevaLista.splice(randomAvailable, 1);
      }, 1000);
    }

    isTurn();
    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 8);
    checkLine(6, 4, 2);
  });
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

function endGame() {
  
}





  // FUNCIÓN MOSTRAR GANADOR
  function showWinner(player) {
    document.querySelector("#Resultado").innerHTML = player + " " + "Ganador!!!";
  }
  
  
  // FUNCIÓN BOTÓN DE RESTART
  function Reset() {
    location.reload();
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
