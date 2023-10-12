
function askName() {
let PrenomUtilisatrice = prompt("Quel est votre prénom ?")
let bienvenue = ("👋 Bonjour " + PrenomUtilisatrice)

let H2 = document.createElement("h2")
H2.textContent = bienvenue
document.body.appendChild(H2) 
}

function askBirthYear() {
let AnneedeNaissance = parseInt(prompt("Quelle est votre année de naissance ?"))
let age = 2023 - AnneedeNaissance
let message = "Vous avez " + age + " ans"

let H3 = document.createElement("h3")
H3.textContent = message
document.body.appendChild(H3)
}

askName()
askBirthYear()