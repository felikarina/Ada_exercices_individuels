let PrenomUtilisatrice = prompt("Quel est votre prénom ?")
let bienvenue = ("👋 Bonjour " + PrenomUtilisatrice)

document.body.innerHTML += bienvenue

let AnneedeNaissance = parseInt(prompt("Quelle est votre année de naissance ?"))
let age = 2023 - AnneedeNaissance

document.body.innerHTML += age