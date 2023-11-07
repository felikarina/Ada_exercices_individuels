let taper = document.querySelector("#input1")
let taper2 = document.querySelector("#input2")
let intervalle1 = document.querySelector("#inter1")
let intervalle2 = document.querySelector("#inter2")
let btn1 = document.querySelector("#btn1")
let btn2 = document.querySelector("#btn2")
intervalle1.textContent = ""
intervalle2.textContent = ""

const latinToMorse = {
    'A': '.-',
    'B': '-...',
    'C': '-.-.',
    'D': '-..',
    'E': '.',
    'F': '..-.',
    'G': '--.',
    'H': '....',
    'I': '..',
    'J': '.---',
    'K': '-.-',
    'L': '.-..',
    'M': '--',
    'N': '-.',
    'O': '---',
    'P': '.--.',
    'Q': '--.-',
    'R': '.-.',
    'S': '...',
    'T': '-',
    'U': '..-',
    'V': '...-',
    'W': '.--',
    'X': '-..-',
    'Y': '-.--',
    'Z': '--..'
}

const morseToLatin = {
    '-': "T", 
    '--': "M",
    '---': "O", 
    '--.': "G", 
    '--.-': "Q", 
    '--..': "Z", 
    '-.': "N", 
    '-.-': "K", 
    '-.--': "Y", 
    '-.-.': "C", 
    '-..': "D", 
    '-..-': "X", 
    '-...': "B", 
    '.': "E", 
    '.-': "A", 
    '.--': "W", 
    '.---': "J", 
    '.--.': "P", 
    '.-.': "R", 
    '.-..': "L", 
    '..': "I", 
    '..-': "U", 
    '..-.': "F", 
    '...': "S", 
    '...-': "V", 
    '....': "H"
}

function getLatinCharacterList(text) {
    let result = text.split("")
    return result
}

function getMorseCharacterList(morse) {
    let result = morse.split(" ")
    return result
}

function translateLatinCharacter(chara) {
    let result = latinToMorse[chara]
    return result
}

function translateMorseCharacter(bout) {
    let result = morseToLatin[bout]
    return result
}

function encode(mot) {
    let result = getLatinCharacterList(mot)
    let reponse = []
    for (const element of result) {
        reponse.push(translateLatinCharacter(element.toUpperCase()))
    }
    return reponse.join(" ")
}

function decode(morsee) {
    let result = getMorseCharacterList(morsee)
    let reponse = []
    for (const element of result) {
        reponse.push(translateMorseCharacter(element))
    }
    return reponse.join("/")
}

btn1.addEventListener("click", update)
function update() {
    let resultat = encode(taper.value)
    intervalle1.textContent = resultat
}

btn2.addEventListener("click", update2)
function update2() {
    let resultat = decode(taper2.value)
    intervalle2.textContent = resultat
}