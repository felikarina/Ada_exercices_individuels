let good = 0
let presquegood = 0
let start = 0
let input1 = ""
let input2 = ""
let input3 = ""
let input4 = ""
let couleur = []
let devine1 = ""
let devine2 = ""
let devine3 = ""
let devine4 = ""
let resultat = []
let result = []
let tab = ["rouge","bleu","jaune","vert","violet","orange","blanc","noir"]
let casevide = document.getElementById('case')
let resetgame = document.getElementById('reset')
let mess2 = document.getElementById('mess2')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function generate () {
    devine1 = tab[getRandomInt(8)]
    devine2 = tab[getRandomInt(8)]
    devine3 = tab[getRandomInt(8)]
    devine4 = tab[getRandomInt(8)]
}

function verif (input) {
    if (input == "bleu" || input == "rouge" || input == "jaune" || input == "vert" ||
     input == "violet" || input == "orange" || input == "blanc" || input == "noir") {
        return true
    } 
    else { return false }
}

function goodOrNot (input) {
    if (input == devine1) {
        good ++
    }
    else if ((input == devine2 && devine2 != input2) || (input == devine3 && devine3 != input3) || (input == devine4 && devine4 != input4)) {
        presquegood ++
    }
    else {
        plop = 0
    }
}

function goodOrNot2 (input) {
    if (input == devine2) {
        good ++
    }
    else if ((input != input1) && ((input == devine1 && devine1 != input1) || (input == devine3 && devine3 != input3) || (input == devine4 && devine4 != input4))) {
        presquegood ++
    }
    else {
        plop = 0
    }
}

function goodOrNot3 (input) {
    if (input == devine3) {
        good ++
    }
    else if ((input != input1 && input != input2) && ((input == devine1 && devine1 != input1) || (input == devine2 && devine2 != input2) || (input == devine4 && devine4 != input4))) {
        presquegood ++
    }
    else {
        plop = 0
    }
}

function goodOrNot4 (input) {
    if (input == devine4) {
        good ++
    }
    else if ((input != input1 && input != input2 && input != input3) && ((input == devine1 && devine1 != input1) || (input == devine3 && devine3 != input3) || (input == devine2 && devine2 != input2))) {
        presquegood ++
    }
    else {
        plop = 0
    }
}

function end () {
    if (input1 == devine1 && input2 == devine2 && input3 == devine3 && input4 == devine4) {
        alert("Vous avez gagné le jeu !")
    }
    else {
        plop = 0
    }
}

function reply_click () {
    image(event.srcElement.id)
}

function image (couleur) {
    if (input1 == "") {
        input1 = couleur
    }
    else if (input2 == "") {
        input2 = couleur
    }
    else if (input3 == "") {
        input3 = couleur
    }
    else if (input4 == "") {
        input4 = couleur
    }
    else { start ++}
}

function validercombi () {
    if (verif(input1) && verif(input2) && verif(input3) && verif(input4)) {
        console.log(devine1 + devine2 + devine3 + devine4)
        goodOrNot(input1)
        goodOrNot2(input2)
        goodOrNot3(input3)
        goodOrNot4(input4)
        end()
        casevide.innerHTML += ` Couleurs justes : ${good} Couleurs à la mauvaise place : ${presquegood}<br>`
        good = 0
        presquegood = 0
        start = 0
        input1 = ""
        input2 = ""
        input3 = ""
        input4 = ""
        casevide.innerHTML += `<br>` 
    }
    else { 
        mess2.innerHTML = "Il faut 4 couleurs pour valider !"
    }
}

function reset () {
        casevide.innerHTML = ""
        mess2.innerHTML = ""
        generate()
}

function boutoncouleur (couleur) {
    if (start > 0) {
        mess2.innerHTML = "Seulement 4 couleurs !"
    }
    else {
        casevide.innerHTML += `<img src="img/${couleur}.png">`
    }
}

generate()
