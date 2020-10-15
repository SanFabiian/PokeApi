const Header = () => {
    const view = `
        <div class="header_logo">
            <a href="/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png" alt="logo Pokémon"/>
            </a>
        </div>
        <nav class="header_nav">
            <a href="/">Home</a>
            <a href="#/about/">About</a>
            </nav>
        <div class="search">
            <input type="search" id="searchInput" name="searchInput" placeholder="Busca por nombre o Id">
            <button>Buscar</button>
        </div>
    `
    return view
}
export default Header