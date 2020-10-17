!function(n){var e={};function a(t){if(e[t])return e[t].exports;var i=e[t]={i:t,l:!1,exports:{}};return n[t].call(i.exports,i,i.exports,a),i.l=!0,i.exports}a.m=n,a.c=e,a.d=function(n,e,t){a.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},a.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},a.t=function(n,e){if(1&e&&(n=a(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var i in n)a.d(t,i,function(e){return n[e]}.bind(null,i));return t},a.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return a.d(e,"a",e),e},a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},a.p="",a(a.s=0)}([function(n,e,a){"use strict";a.r(e);var t=()=>'\n        <div class="header_logo">\n            <a href="/">\n                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo Pokémon"/>\n            </a>\n        </div>\n        <nav class="header_nav">\n            <a href="/">Home</a>\n            <a href="#/about/">About</a>\n            </nav>\n        <div class="search">\n            <input type="search" id="searchInput" name="searchInput" placeholder="Busca por nombre o Id">\n            <button>Buscar</button>\n        </div>\n    ';var i=async(n,e)=>{const a="https://pokeapi.co/api/v2/pokemon?limit=151&offset=0",t=n?`${a}${n}`:a;try{const n=await fetch(t);return await n.json()}catch(n){}};var o=async()=>{const n=await i();console.log(n.next,"page");return'\n\t\t<a href="#/page=" id="backPage">Atras</a>\n\t\t<a href="#/page=" id="nextPage">Página siguiente</a>\n\t'};var s=async function(n){const e="https://pokeapi.co/api/v2/pokemon/"+n,a="https://pokeapi.co/api/v2/pokemon-species/"+n,t=await fetch(e),i=await t.json(),o=await fetch(a),s=await o.json(),r="https://pokeapi.co/api/v2/evolution-chain/"+n,c=await fetch(r),p=(await c.json(),s.flavor_text_entries);console.log(s,"description");const l=p.filter((function(n){if("es"===n.language.name)return n})),d=i.abilities.map((function(n){if("ability"in n)return" "+n.ability.name})),u=i.stats.map((function(n){if("base_stat"in n)return{name:n.stat.name,base:n.base_stat}}));return{img:String((.001*s.id).toFixed(3)).slice(2),description:[l[0].flavor_text,l[1].flavor_text,l[2].flavor_text],abilities:d,habitat:s.habitat.name,name:s.name,is_legendary:s.is_legendary,id:s.id,color:s.color.name,types:i.types,height:i.height/10,weight:i.weight/10,stats:u}};var r=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/";var c=async()=>{const n=r(),e=await s(n);return`\n    <div class="card ${e.color}">\n        <a href="/" id="card_close" class="card_close">X</a>\n        <article class="card_img">\n            <img class="" src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${e.img}.png" alt="${e.name}">\n        </article>\n        <div class="card_description">\n            <h2>${e.name}</h2>\n            <p>${e.description[0]}</p>\n            <p>${e.description[1]}</p>\n            <p>${e.description[2]}</p>\n        </div>\n        <div class="card_details">\n            <h3>Color: <span>${e.color}</span></h3>\n            <h3>Altura: <span>${e.height} m</span></h3>\n            <h3>Peso: <span>${e.weight} Kg</span></h3>\n            <h3>Tipo: <span>${e.types.map(n=>`<span class="${n.type.name}">${n.type.name}</span>`)}</span></h3>\n            <h3>Habilidades: <span>${e.abilities}</span></h3>\n            <h3>Habitat: <span>${e.habitat}</span></h3>\n            <h3 class="${e.is_legendary}">Legendario: </h3>\n        </div>\n        <div>\n            ${e.stats[0].name}\n        </div>\n    </div>`};var p=async()=>{const n=await r();return`\n      <div class="pokemons_wrap">\n        ${(await i(n)).results.map(n=>`\n          <article class="pokemon_item">\n          <h3>N° ${n.id=n.url.replace("https://pokeapi.co/api/v2/pokemon/","").replace("/","")}</h3>\n          <span class="none">${n.img=String((.001*n.id).toFixed(3)).slice(2)}</span>\n            <a href="#/${n.id}">\n              <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${n.img}.png" alt="${n.name}">\n              <div class="pokemon_name"><h2>${n.name}</h2><p></p></div>\n            </a>\n          </article>\n        `).join("")}\n      </div>\n    `};var l=n=>{if("about"!=n){if("/"===n)return n;if(n.length<=3)return"/:id";if(n.includes("page"))return"/:pages"}return"/"+n};var d=async()=>{const n=document.getElementById("header"),e=document.getElementById("footer"),a=document.getElementById("content"),i=document.getElementById("modal");let s=r();await l(s);n.innerHTML=await t(),e.innerHTML=await o(),a.innerHTML=await p(),i.innerHTML=await c()};window.addEventListener("load",d),window.addEventListener("hashchange",d)}]);