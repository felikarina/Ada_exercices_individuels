function decoupeChaine (string) {
    tab = string.split("")
    result = []
    result.push(tab[0])
    for(i=1; i<tab.length; i++){
        if(tab[i]!=tab[i-1]){
            result.push(" "+tab[i])
        }
        else {
            result.push(tab[i])
        }
    }
    return result.join("")
}
function decritChaine (string) {
    decoupeChaine(string)
    result = ""
    trueresult = ""
    for(x=0; x<string.length; x++)
        if (string.charAt(x)==string.charAt(x+1)){
            result += string.charAt(x)
        }
        else {
            result += string.charAt(x)
            trueresult += result.length + result
            result = ""
        }
    return trueresult
}
let string = "1"
function suiteConway () {
    let end = decritChaine(string)+"<br>"
    string = decritChaine(string)
    return end
}

let page = document.getElementById("page")
page.innerHTML = "1<br>"
function pop () {
    page.innerHTML += suiteConway()
}