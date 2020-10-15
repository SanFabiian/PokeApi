import data from '../utils/data'
import GetHash from '../utils/getHash'
const Pokemons = async () => {
    const id = GetHash()
    const pokemon = await data(id)
    console.log(pokemon.img)
    const view = `
    <div class="pokemon_inner">
        <a href="/" id="closeModal">X</a>
        <article class="pokemon_card">
            <img class="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.img}.png" alt="${pokemon.name}">
        </article>
        <div class="pokemon_card-description">
            <h2>${pokemon.name}</h2>
            <p>${pokemon.description[0]}</p>
            <p>${pokemon.description[1]}</p>
            <p>${pokemon.description[2]}</p>
            <h3>Altura: <span>${pokemon.height} m</span></h3>
            <h3>Peso: <span>${pokemon.weight} Kg</span></h3>
            <h3>Tipo: <span>${pokemon.types}</span></h3>
            <h3>Habilidades: <span>${pokemon.abilities}</span></h3>
            <h3>Habitat: <span>${pokemon.habitat}</span></h3>
            <h3>Legendario: <span>${pokemon.is_legendary}</span></h3>
        </div>
    </div>`
    return view
}
export default Pokemons