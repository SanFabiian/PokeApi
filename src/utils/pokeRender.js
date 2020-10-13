// import getHash from './getHash.js'
// const pokedex_item = document.getElementsByClassName('pokedex_item')
async function loadApi(page) {
    let numPage = page
    // let Hash = pokedex_item.addEventListener('click', getHash())
    const API = `https://pokeapi.co/api/v2/pokemon/?offset=${page}&limit=20`
    const getPokemon = async () => {
        const response = await fetch(API)
        const data = await response.json()
        return data
    }

    const pokemon = await getPokemon()
    // console.log(pokemon)
    function addInfo(){
        for(let i = 0; i < pokemon.results.length; i++){
            const num = String(((0.001 + 0) * (i + 1)).toFixed(3)).slice(2)
            pokemon.results[i].id = i + 1
            pokemon.results[i].img = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${num}.png`
        }
    }
    addInfo()

    function createTemplate(poke) {
        return (
            `<section class="pokedex_item">
                <a href="#/${poke.id}" id="${poke.id}">
                    <h2>${poke.name}</h2>
                    <h3> Poke # ${poke.id}</h3>
                    <picture class="pokedex_item-picture">
                        <img src="${poke.img}" alt="${poke.name}">
                    </picture>
                </a>
            </section>`
        )
    }

    function createElement(HTMLString) {
        const html = document.implementation.createHTMLDocument()
        html.body.innerHTML = HTMLString
        return html.body.children[0]
    }

    pokemon.results.forEach((item) => {
        const HTMLString = createTemplate(item)
        const html = document.implementation.createHTMLDocument()
        html.body.innerHTML = HTMLString
        pokedex.append(html.body.children[0])
    })
    return {numPage, pokemon}
}
export default loadApi