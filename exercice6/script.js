//ETAPE 1
function maxDaysInMonth(day) {
    day = day.split("/")
    month = parseInt(day[1])
    day = parseInt(day[0])
    result = (day <= 31 && month <= 12)? true : false
    return result
}
function maxYear(year) {
    year = parseInt(year)
    result = (999 < year && year < 9999)? true : false
    return result
}
function isValidDate(date) {
    result = (maxDaysInMonth(date.substr(0,5)) && maxYear(date.substr(6,4)))? true : false
    return result
}

//ETAPE 2
function reverseString (string) {
    return string.split("").reverse().join("")
}
function isPalindrome (date) {
    day = date.substr(0,2)
    month = date.substr(3,2)
    moitie1 = day.concat(month)
    moitie2 = date.substr(6,4)
    moitie2 = reverseString(moitie2)
    result = (moitie1 == moitie2) ? true : false
    return result
}

//ETAPE 3
function isPalindrome2 (date) {
    date = date.toString()
    day = date.substr(0,2)
    month = date.substr(3,2)
    moitie1 = day.concat(month)
    moitie2 = date.substr(6,4)
    moitie2 = reverseString(moitie2)
    result = (moitie1 == moitie2) ? true : false
    return result
}

function getNextPalindromes (x) {
    let resultat = []
    let count = x
    
    for (let i=0; count == 0; i++) {
        let pate = new Date().toLocaleDateString("uk-Uk")
        
        if (isPalindrome2(pate)) {
            patou = pate.toString(pate)
            console.log(patou)
            resultat = resultat.push(patou)
            count --
        }
        else { }
        
    }
    return resultat
}
console.log(getNextPalindromes(4))

//ETAPE 4
function isPalindromeString (string) {
    compare = reverseString(string)
    result = (compare == string) ? true : false
    return result
}
function isDatePalindrome (date) {
    result = (isValidDate(date) && isPalindrome(date))? true : false
    return result
}
