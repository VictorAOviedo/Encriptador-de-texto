function encriptar() {
    var texto = document.getElementById("textarea").value.toLowerCase();

    var textCifrado = texto.replace(/e/igm,"enter");
    var textCifrado = textCifrado.replace(/o/igm,"ober");
    var textCifrado = textCifrado.replace(/i/igm,"imes");
    var textCifrado = textCifrado.replace(/a/igm,"ai");
    var textCifrado = textCifrado.replace(/u/igm,"ufat");

    document.getElementById("robot").style.display = "none";
    document.getElementById("result").innerHTML = textCifrado;
    document.getElementById("robot2").style.display = "show";
    document.getElementById("robot2").style.display = "flex";
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "flex";
    document.getElementById("textarea").value = "";

}

function desencriptar() {
    var texto = document.getElementById("textarea").value.toLowerCase();

    var textCifrado = texto.replace(/enter/igm,"e");
    var textCifrado = textCifrado.replace(/ober/igm,"o");
    var textCifrado = textCifrado.replace(/imes/igm,"i");
    var textCifrado = textCifrado.replace(/ai/igm,"a");
    var textCifrado = textCifrado.replace(/ufat/igm,"u");

    document.getElementById("robot").style.display = "none";
    document.getElementById("result").innerHTML = textCifrado;
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "flex";
    document.getElementById("textarea").value = "";

}

function copiar() {
    var contenido = document.getElementById("result").textContent;
    console.log({contenido});
    navigator.clipboard.writeText(contenido);
    //alert("Se copio");
}

const btn1 = document.querySelector('.btn_animated_encriptar')
btn1.addEventListener('click', () => {
  btn1.classList.remove('animate')
  setTimeout(() => btn1.classList.add('animate'), 100)
})

const btn = document.querySelector('.btn_animated_desencriptar')
btn.addEventListener('click', () => {
  btn.classList.remove('animate')
  setTimeout(() => btn.classList.add('animate'), 100)
})
