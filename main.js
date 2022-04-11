// pegar as teclas

const teclas = document.querySelectorAll(".key");

// tocar as notas
function tocarTeclas(event) {
  // keycode
  let audioKeyCode = verTeclas(event);

  // qual tecla?
  const letra = document.querySelector(`.key[data-key="${audioKeyCode}"]`);
  console.log(letra);

  // se tem a tecla
  const existe = !letra;

  if (existe) {
    return;
  }

  // executa o audio
  playAudio(audioKeyCode);
}



function verTeclas(event) {
  let keyCode;

  const teclas = event.type === "keydown";
  if (teclas) {
    keyCode = event.keyCode;
  } else {
    keyCode = event.target.dataset.key;
  }

  return keyCode;
}

function playAudio(audioKeyCode) {
  const audio = document.querySelector(`audio[data-key="${audioKeyCode}"])`);
  audio.currentTime = 0;
  console.log(audio);
  audio.play();
}

teclas.forEach((key) => {
  key.addEventListener("click", tocarTeclas);
});

window.addEventListener("keydown", tocarTeclas);
