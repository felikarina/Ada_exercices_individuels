let givenNumber = parseInt(prompt("Donnez un numéro"))

function didIWin (givenNumber) {
    if (givenNumber == 22) {
        console.log(true)
        return true
    }
    if (givenNumber !== 22) {
        console.log(false)
        return false
    }
}

function gamePlay () {
    didIWin(givenNumber)
    
    if (didIWin() == true) {
    }
    if(didIWin() == false) {
        while(givenNumber !== 22){
            if(givenNumber < 22) {
                alert("plus grand")
            }
            if(givenNumber > 22) {
                alert("plus petit")
            }
        givenNumber = parseInt(prompt("Donnez un numéro"))    
        }
    }
alert("bravoooo")
}
gamePlay()


