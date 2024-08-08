//crear variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

//evento de click
function btnEncriptar() {
  let texto = textArea.value;
  let textoEncriptado = encriptar(texto);
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
}

//funcion de encriptar
function encriptar(stringEncriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

//funcion de desencriptar

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
  ];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

//evento de click en desencriptar

function btnDesencriptar() {
  let texto = textArea.value;
  let textoDesencriptado = desencriptar(texto);
  mensaje.value = textoDesencriptado;
  textArea.value = "";
  textArea.style.backgroundImage = "none";
}

//evento de click en copiar
function btnCopiar() {
 let texto = mensaje.value;
 textArea.value = texto;
  mensaje.value = "";

}