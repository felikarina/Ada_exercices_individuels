let givenNumber = parseInt(prompt("Donnez un numéro"))

function gamePlay () {
    while(givenNumber !== 22) {
        if(givenNumber < 22) {
            alert("plus grand !")
        }
        if(givenNumber > 22) {
            alert("plus petit !")
        }
        givenNumber = parseInt(prompt("Donnez un numéro"))
    }
alert("bravooo")
}
gamePlay()


