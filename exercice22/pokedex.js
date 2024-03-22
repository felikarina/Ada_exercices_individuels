const fs = require('fs')

const jsonData = fs.readFileSync('pokedex.json', 'utf-8')
try {
    const data = JSON.parse(jsonData)
    const pokemons = data.pokemon
    let count = 0
    let count10 = 0

    pokemons.forEach(pokemon => {
        count++
        if(parseInt(pokemon.weight) > 10){
            count10++
        }
    })
        console.log("count +10 : " + count10)
        console.log("count total : " + count)
    } catch (error) {
        console.log('error')
}