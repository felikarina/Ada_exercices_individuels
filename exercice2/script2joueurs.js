let btn = document.querySelector("button")
let txt = document.querySelector("p")
let reponse = document.querySelector("input")
let intervalle1 = document.querySelector("#inter1")
let intervalle2 = document.querySelector("#inter2")
let score = 0

intervalle1.textContent = 0
intervalle2.textContent = 50



function checkWin(devinette, numero){
    if (devinette < numero) {
        alert("plus ! tentative n°" + score)
        intervalle1.textContent = devinette
    }
    else if (devinette > numero) {
        alert("moins ! tentative n°" + score)
        intervalle2.textContent = devinette
    } 
    else 
        alert("bravooo ! tu as réussi en " + score + " tentatives !")
}

function checkInterval(value){
    if (value >= intervalle1.textContent && value <= intervalle2.textContent) return true
    else return false
}

function process(numero) {
    score++
    let devinette = parseInt(reponse.value)
    if (checkInterval(devinette)) 
        checkWin(devinette, numero)
    else 
        alert("ce n'est pas dans l'intervalle !")
}

function update() {
    let numero = parseInt(reponse.value)
    reponse.value = null
    if (checkInterval(numero)) {
        txt.textContent = "Joueur 2 devinez le numéro du joueur 1"
        btn.removeEventListener("click", update)
        btn.addEventListener("click", function() {
            process(numero)
        })
    } else {
        alert("Entre " + intervalle1.textContent + " et " + intervalle2.textContent + " !")
    }
}


btn.addEventListener("click", update)