let cells = document.getElementsByClassName("cell");
let limite = 9;
let nuevaLista = [];
let container = document.querySelector(".container");
// Funcion jugador

for (let i = 0; i < limite; i++) {
  nuevaLista.push(i);

  cells[i].addEventListener("click", function () {
    let toDelete = nuevaLista.findIndex((celda) => celda === i);
    if (toDelete !== -1) {
      cells[i].innerHTML = "🐱";
      checkWinner();
      Computer();
    }

    // funcion compu
    function Computer() {
      nuevaLista.splice(toDelete, 1);
      let randomAvailable = Math.floor(Math.random() * nuevaLista.length);
      let index = nuevaLista[randomAvailable];

      //validar que solomanete los circulos, oseala jugada de la maquina sea en campos vacios y no en X U O
      // cells[i] = nuevaLista.filter((vacío) => vacío.length < 1);

      setTimeout(() => {
        cells[index].innerHTML = "🐭";
        checkWinner();
        nuevaLista.splice(randomAvailable, 1);
      }, 1000);
    }

    // isTurn();
  });
}
// FUNCIÓ TURNOS

// function isTurn(player) {

//   if ((player = "🐭")) {
//     gato.textContent.style.display = "none";
//   } else {
//     gato.textContent.style.display = "block";
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
  // console.log(`[${cells[c1].innerHTML||'_'},${cells[c2].innerHTML||'_'},${cells[c3].innerHTML||'_'}]`)
}
let combinacionesGanadoras = [
  [0, 1, 2], //HORIZONTAL
  [3, 4, 5], //HORIZONTAL
  [6, 7, 8], //HORIZONTAL
  [0, 3, 6], //VERTICAL
  [1, 4, 7], //VERTICAL
  [2, 5, 8], //VERTICAL
  [0, 4, 8], //DIAGONAL
  [6, 4, 2], //DIAGONA
];
function checkWinner() {
  if (combinacionesGanadoras) {
    combinacionesGanadoras.forEach((combinacion) =>
      checkLine(combinacion[0], combinacion[1], combinacion[2])
    );
  } else if (combinacionesGanadoras !== " ") {
    combinacionesGanadoras.forEach((combinacion) =>
      checkLine(combinacion[0], combinacion[1], combinacion[2])
    );
    return;
  }
}
function endGame(result) {}

// FUNCIÓN MOSTRAR GANADOR
function showWinner(player) {
  if (player === "🐱") {
    mostrarEmergente(player);
    ocultarTablero();
  } else {
    mostrarEmergente(player);
    ocultarTablero();
    Ganador.src = "../src/img/perdiste.png";
    mostrarMensaje("Game Over");
  }
  // if (player.length  !== " " && player !== "🐭" && player !==  "🐱") mostrarEmergente(player);
  // ocultarTablero();
  // Ganador.src = "../src/img/empate.png";
  // mostrarMensaje("Tie");
}
// FUNCIÓN YOU LOST
// function Looser(player) {

// }

// FUNCIÓN BOTÓN DE RESTART
function Reset() {
  location.reload();
  ocultarMensaje();
}

function ocultarTablero() {
  container.style.display = "none";
  IsPlayer.style.display = "none";
}

// FUNCION PARA MOSTRAR MENSAJE DE GANADOR.
let players = document.querySelector(".players");
let IsPlayer = document.getElementById("TurnsX");
let Click = false;
let Ganador = document.getElementById("Gane");
//FUNCION MOSTRAR EMERGENTE.
function mostrarEmergente(winner) {
  let mostrar = document.querySelector(".emergente");
  mostrar.classList.remove("hide");
  mostrarMensaje(`¡¡${winner} WON!!`);
}
//FUNCIÓN EMERGENTELOOSER
function showEmergenteLooser(winner) {
  let mostrar = document.querySelector(".emergente");
  mostrar.classList.remove("hide");
  mostrarMensaje(`¡¡${winner} WON!!`);
}

// FUNCION PARA OCULTAR EL MENSAJE
function ocultarMensaje() {
  let Show = document.querySelector(".emergente");
  Show.classList.add("hide");
  players.classList.remove("hide");
  IsPlayer.innerText = "Jugador 1";
  Click = true;
}
//  Activar la funcion de mostrar mensaje.
function mostrarMensaje(messages) {
  let messageDiv = document.getElementById("mensaje");
  messageDiv.innerText = messages;
}
// BOTÓN DE NUEVO INICIO.
document.getElementById("Nuevo-juego").addEventListener("click", () => {
  ocultarMensaje();
  Reset();
});
