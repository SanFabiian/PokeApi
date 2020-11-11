import data from '../utils/data'
import GetHash from '../utils/getHash'
const Pokemons = async () => {
    const id = GetHash()
    const pokemon = await data(id)
    const view = `
    <div class="card ${pokemon.color}">
        <a href="/" id="card_close" class="card_close">X</a>
        <article class="card_img">
            <img class="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.img}.png" alt="${pokemon.name}">
        </article>
        <div class="card_description">
            <h2>${pokemon.name}</h2>
            <p>${pokemon.description[0]}</p>
            <p>${pokemon.description[1]}</p>
            <p>${pokemon.description[2]}</p>
        </div>
        <div class="card_details">
            <h3>Color: <span>${pokemon.color}</span></h3>
            <h3>Altura: <span>${pokemon.height} m</span></h3>
            <h3>Peso: <span>${pokemon.weight} Kg</span></h3>
            <h3>Tipo: <span>${pokemon.types.map(obj => `<span class="${obj.type.name}"></span>`).join('')}</span></h3>
            <h3>Habilidades: <span>${pokemon.abilities}</span></h3>
            <h3>Habitat: <span>${pokemon.habitat}</span></h3>
            <h3 class="${pokemon.is_legendary}">Legendario: </h3>
        </div>
        <div class="card_stats">
            <h3>Vida: <span>${pokemon.stats[0].base}</span></h3>
            <h3>Ataque: <span>${pokemon.stats[1].base}</span></h3>
            <h3>Defensa: <span>${pokemon.stats[2].base}</span></h3>
            <h3>Ataque especial: <span>${pokemon.stats[3].base}</span></h3>
            <h3>Defensa especial: <span>${pokemon.stats[4].base}</span></h3>
            <h3>Velocidad: <span>${pokemon.stats[5].base}</span></h3>
        </div>
    </div>`
    return view
}
export default Pokemons