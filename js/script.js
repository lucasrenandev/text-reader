"use strict"

const textArea = document.getElementById("text-area")
const button = document.getElementById("button")

function readText() {
    if(textArea.value) {
        const read = new SpeechSynthesisUtterance(textArea.value)
        read.lang = "pt-BR"
        window.speechSynthesis.speak(read)
    }
    else {
        window.alert("Digite um texto para ser lido!")
    }
}

button.addEventListener("click", readText)