async function data(num) {
    const apiURL = `https://pokeapi.co/api/v2/pokemon/${num}`
    const speciesURL = `https://pokeapi.co/api/v2/pokemon-species/${num}`

    const responsePoke = await fetch(apiURL)
    const dataPoke = await responsePoke.json()

    const responseSpecies = await fetch(speciesURL)
    const dataSpecies = await responseSpecies.json()

    const evolutionURL = `https://pokeapi.co/api/v2/evolution-chain/${num}`
    const responseEvolution = await fetch(evolutionURL)
    const dataEvolution = await responseEvolution.json()

    const descriptions = dataSpecies.flavor_text_entries
console.log(dataSpecies, 'description')
    function esFilter(obj) {
        if(obj.language.name === 'es') {
            return obj
        }
    }
    const lanES = descriptions.filter(esFilter)

    function abilityFilter(obj) {
        if('ability' in obj) {
            return ' ' + obj.ability.name
        }
    }
    const abilities = dataPoke.abilities.map(abilityFilter)


    function statsFilter(obj) {
        if('base_stat' in obj) {
            return {name:obj.stat.name, base:obj.base_stat}
        }
    }
    const stats = dataPoke.stats.map(statsFilter)
    const pokemon = {
        img: String((0.001 * dataSpecies.id).toFixed(3)).slice(2),
        description: [
            lanES[0].flavor_text,
            lanES[1].flavor_text,
            lanES[2].flavor_text
        ],
        abilities: abilities,
        habitat: dataSpecies.habitat.name,
        name: dataSpecies.name,
        is_legendary: dataSpecies.is_legendary,
        id: dataSpecies.id,
        color: dataSpecies.color.name,
        types: dataPoke.types,
        height: dataPoke.height / 10,
        weight: dataPoke.weight / 10,
        stats: stats,
    }
    return pokemon
}

export default data