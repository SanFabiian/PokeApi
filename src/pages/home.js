import getData from '../utils/getData'
import GetHash from '../utils/getHash'

const Home = async () => {
  const page = await GetHash();
  const pokemons = await getData(page)
    const view = `
      <div class="pokemons_wrap">
        ${pokemons.results.map(pokemon => `
          <article class="pokemon_item">
          <h3>N° ${pokemon.id = pokemon.url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')}</h3>
          <span class="none">${pokemon.img = String((0.001 * pokemon.id).toFixed(3)).slice(2)}</span>
            <a href="#/${pokemon.id}">
              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.img}.png" alt="${pokemon.name}">
              <div class="pokemon_name"><h2>${pokemon.name}</h2><p></p></div>
            </a>
          </article>
        `).join('')}
      </div>
    `
    return view;
}
export default Home