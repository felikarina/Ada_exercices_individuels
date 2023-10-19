let btn = document.querySelector("button")
let txt = document.querySelector("p")
let reponse = document.querySelector("input")
let intervalle1 = document.querySelector("#inter1")
let intervalle2 = document.querySelector("#inter2")

intervalle1.textContent = 0
intervalle2.textContent = 50
btn.addEventListener("click", update)

let score = 0
function update() {
    let numero = parseInt(reponse.value)
    reponse.value = null
    if (numero < 51 && numero > 0) {
        txt.textContent = "Joueur 2 devinez le numéro du joueur 1"
        btn.removeEventListener("click", update)
        btn.addEventListener("click", function() {
            
            let devinette = parseInt(reponse.value)
            if (devinette < numero) {
                score ++
                if(devinette > intervalle1.textContent){
                alert("plus ! tentative n°" + score)
                intervalle1.textContent = devinette
                }
                else {alert("ce n'est pas dans l'intervalle !")}
                
            } 
            else if (devinette > numero) {
                score ++
                if(devinette < intervalle2.textContent){
                alert("moins ! tentative n°" + score) 
                intervalle2.textContent = devinette
                }
                else {alert("ce n'est pas dans l'intervalle !")}
            } 
            else {
                alert("bravooo ! tu as réussi en " + (score+1) + " tentatives !")
            }
        })
    } else {
        alert("Entre 0 et 50 !")
    }
}

