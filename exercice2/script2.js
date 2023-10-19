function didIWin (givenNumber) {
    if (givenNumber == nombreAdeviner) {
        console.log(true)
        return true
    }
    if (givenNumber !== nombreAdeviner) {
        console.log(false)
        return false
    }
}
let nombreAdeviner = parseInt(prompt("Donnez un numéro entre 0 et 50 que l'adversaire devra deviner"))
function gamePlay () {
    
    let givenNumber = parseInt(prompt("Donnez un numéro"))
    if (didIWin() == true) {
    }
    if(didIWin() == false) {
        while(givenNumber !== nombreAdeviner){
            if(givenNumber < nombreAdeviner) {
                alert("plus grand")
            }
            if(givenNumber > nombreAdeviner) {
                alert("plus petit")
            }
        givenNumber = parseInt(prompt("Donnez un numéro"))    
        }
    }
alert("bravoooo")
}