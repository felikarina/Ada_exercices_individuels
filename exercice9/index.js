let sommet1 = " +\n"
let sommet2 = "/*\\\n"
let lineA = "/*"
let lineB = "*\\\n"
let lineC = ""
let lineD = ""
let empty = " "
let star = "*"
let tronc = "  #"
let troncf = ""
let tab = ["*","o","+","*","*","*","*","*"]
let pilou = 5
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
let randomNumber = getRandomInt(7)

function sapin (number) {
    result = ""
    plop = number - 1
    count = 2
    cocount = 0
    if(number > 0) {
        for(i=0; i<number; i++) {
            espace = empty.repeat(plop) //calcul du nombre d'espace en début de ligne
            lineA2 = espace + lineA     
                for(y=0; y<2*i; y++){
                    lineD += "*"
                }
            lineC = lineD
            lineC += "*"
            count --
            if(count == 2 || pilou == 0) {         //tous les 3 étages sapin plus étroit
                lineX = lineC.replace("**","") //enlever des *
                lineC = lineX
                pilou = 0}
            result += lineA2 + lineC + lineB    
            sommet1 = empty + sommet1  
            sommet2 = empty + sommet2
            plop --
            
            lineD = ""
            if (i>0) {
                tronc = empty + tronc
            }
            if(count == 0) {         //tous les 3 étages sapin plus étroit
                lineX = lineC.replace("**","") //enlever des *
                lineC = lineX
                lineA2 = empty + lineA 
                lineA = lineA2      //ajoute de l'espace en début de ligne
                count=3
                cocount ++
            }
        }
    }
    if(number > 3){
        troncf = tronc.replace(" #","##\n")
        tronc = troncf.repeat(cocount)
    }
    result = sommet2 + result  //ajoute le sommet qui ne change jamais
    result = sommet1 + result
    result += tronc         //ajout du tronc
    return result
}
console.log(sapin(6))