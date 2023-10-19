let btn = document.querySelector("button")
let txt = document.querySelector("p")
let reponse = document.querySelector("input")
let intervalle1 = document.querySelector("#inter1")
let intervalle2 = document.querySelector("#inter2")
btn.addEventListener("click", update)

function update() {
    let numero = parseInt(reponse.value)
    if (numero < 51 && numero > 0) {
        txt.textContent = "Joueur 2 devinez le numéro du joueur 1"
        btn.removeEventListener("click", update)
        btn.addEventListener("click", function() {
            let devinette = parseInt(reponse.value)
            if (devinette < numero) {
                alert("plus")
            } 
            else if (devinette > numero) {
                alert("moins")
            } 
            else {
                alert("bravooo")
            }
        })
    } else {
        alert("Entre 0 et 50!")
    }
}

