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
      console.log({ toDelete });
      console.log(cells[i].innerHTML);
      console.log({ nuevaLista });
      nuevaLista.splice(toDelete, 1);
      let randomAvailable = Math.floor(Math.random() * nuevaLista.length);
      console.log({ randomAvailable });
      let index = nuevaLista[randomAvailable];
      console.log(index);

      //validar que solomanete los circulos, oseala jugada de la maquina sea en campos vacios y no en X U O
      // cells[i] = nuevaLista.filter((vacío) => vacío.length < 1);

      setTimeout(() => {
        cells[index].innerHTML = "🐭";
        console.log(cells[index].innerHTML);
        console.log({ randomAvailable });
        nuevaLista.splice(randomAvailable, 1);
      }, 1000);
    }

    // isTurn();
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

// function isTurn() {
//   let gato = document.querySelector("#TurnsX");
//   let rata = document.querySelector("#TurnsO");
//   if (cells[i] === "🐱") {
//     gato.textContent.style.display = "block";
//   } else  {
//     gato.textContent.style.display = "none";
//   }if (cells[i]=== ) {

//   }
// }

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

function endGame() {}

// FUNCIÓN MOSTRAR GANADOR
function showWinner(player) {
  document.querySelector("#Resultado").innerHTML = player + " " + "Winner!!!";
  ocultarTablero();
}

// FUNCIÓN BOTÓN DE RESTART
function Reset() {
  location.reload();
  ocultarMensaje();
}

function ocultarTablero() {
  cells.style.display = "none";
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
// FUNCION PARA MOSTRAR MENSAJE DE GANADOR
let players = document.querySelector(".players");
let IsPlayer = document.getElementById("TurnsX");
let Click = false;

function mostrarEmergente() {
  let mostrar = document.querySelector(".emeregente");
  mostrar.classList.remove("hide");
}
// FUNCION PARA OCULTAR EL MENSAJE
function ocultarMensaje() {
  let Show = document.querySelector(".emeregente");
  Show.classList.add("hide");
  players.classList.remove("hide");
  IsPlayer.innerText = "Jugador 1";
  Click = true;
}
function mostarrMensaje(messages) {
  let messageDiv = document.getElementById("mensaje");
  messageDiv.innerText = messages;
}
//  Activar la funcion de mostrar mensaje
document.getElementById("Nuevo-juego").addEventListener("click", () => {
  ocultarMensaje();
  Reset();
});
