let start = Date.now()

function somme () {
    let count = 0
    for (i=0; i<1000000; i++){
        count ++
    }
    return count
}
somme()
console.log(somme())

let end = Date.now()
console.log(end - start)