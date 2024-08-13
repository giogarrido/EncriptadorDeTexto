//crear variables
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje__contenido__mensaje");
const informacion = document.querySelector(".mensaje__contenido__informacion");
const copiar = document.querySelector(".btn-copiar");

//crear matriz de codigo
const matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

//evento de click en encriptar
function btnEncriptar() {
  let texto = textArea.value;
  let textoEncriptado = encriptar(texto);
  mensaje.style.display = 'block';
  mensaje.value = textoEncriptado;
  textArea.value = "";
  mensaje.style.backgroundImage = "none";
  informacion.style.display = 'none';
  copiar.style.display = 'block';

}

//funcion de encriptar
function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();
  stringEncriptada = removerAcentosYCaracteresEspeciales(stringEncriptada);

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
  stringDesencriptada = stringDesencriptada.toLowerCase();
  stringDesencriptada =
    removerAcentosYCaracteresEspeciales(stringDesencriptada);

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
  textArea.value = texto; //copiar al textArea
  mensaje.value = "";
  navigator.clipboard.writeText(texto); //copiar al portapapeles
}

//funcion para remover acentos y caracteres especiales
function removerAcentosYCaracteresEspeciales(stringSinAcentosNiEspeciales) {
  // Mapea los caracteres acentuados a sus equivalentes sin acento
  const accentsMap = {
    á: "a",
    é: "e",
    í: "i",
    ó: "o",
    ú: "u",
    Á: "A",
    É: "E",
    Í: "I",
    Ó: "O",
    Ú: "U",
    ü: "u",
    Ü: "U",
  };

  return stringSinAcentosNiEspeciales
    .split("")
    .map((char) => accentsMap[char] || char) // Reemplaza los acentos usando el mapa
    .join("")
    .replace(/[^a-zA-ZñÑ0-9 ]/g, ""); // Acepta letras, números, espacios y "ñ"
}
