// import Hash from './utils/getHash.js'
import pokeRender from './utils/pokeRender.js'
import getHash from './utils/getHash.js'

document.addEventListener('load',pokeRender())
const pokedex_item = document.getElementsByClassName('pokedex_item')
const Hash = getHash()
const pokedex = document.getElementById('pokedex')
const showMore = document.getElementById('showMore')

function ResolveRoutes(id){
    if (id != 'error'){
        if (id === '/'){
            console.log('/')
            return id
        }else {
            console.log(`${id}`)
            return `${id}`
        }
    }
    return `/${id}`;
}
ResolveRoutes(Hash)

showMore.addEventListener('click', numPage => {
    let i = numPage
    i=+ 10
    pokedex.innerHTML = ''
    pokeRender(i)
})


const Router = async (hash) => {
    // const header = null || document.getElementById('header')
    const pokedex = null || document.getElementById('pokedex')

    let route = await ResolveRoutes(Hash)
    console.log(hash, 'nopo')
    let render = route['/'] ? route['/'] : console.log('404')
    pokedex.innerHTML = await render()
}

Router(Hash)












// const pokedex_item = document.getElementsByClassName('pokedex_item')

// console.log(pokedex_item)


// // const Hash = document.addEventListener('click',()=>{
// //     location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'
// //     console.log(location.hash, 'hash, hash')
// //     return location.hash

// // })

// async() => {
//     await pokedex_item[1].addEventListener('click',()=> {
//         console.log('number')

//     })
// }










