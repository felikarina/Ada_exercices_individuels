let sommet1 = "+\n"
let sommet2 = "/*\\\n"
let empty = " "
let debut = "/*"
let fin = "*\\\n"
let line = "*"
let tab = ["o","+","*","*","*","*","*","*"]
let lineX = ""
let count = 0
let cocount = 0
let tronc = " #"

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let randomNumber = getRandomInt(3)

function sapin (num) {
    let result = ""
    let pilou = num-1
    for (i=num; i>0; i--) {
        espace = empty.repeat(pilou)
        debut = espace + debut
        for(x=0; x<line.length; x++){
            lineX += tab[getRandomInt(8)]
        }
        result += debut + lineX + fin
        debut = "/*"
        lineX = ""
        line += "**"
        pilou --
        count ++
        if (count == 2) {
            plop = line.replace("**","")
            line = plop
            count = -1
            pilou ++
            cocount ++
        }
        if (i>0) {
            tronc = empty + tronc
        }
    }
    if(num > 3){
        troncf = tronc.replace(" #","##\n")
        tronc = troncf.repeat(cocount)
    }
    result = (empty.repeat(num+1)) + sommet1 + (empty.repeat(num)) + sommet2 + result
    result += tronc
    return result
}

console.log(sapin(4))