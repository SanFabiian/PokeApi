import Header from '../templates/header'
import Footer from '../templates/footer'
import detailsPoke from '../pages/detailsPoke'
import Home from '../pages/home'
import Error404 from '../pages/error404'
import GetHash from '../utils/getHash'
import ResolveRoutes from '../utils/resolveRoutes'

const routes = {
    '/': Home,
    '/:id': detailsPoke,
    '/contact': 'Contact',
    '/:pages': Home,
}
const Router = async () => {
    const header = null || document.getElementById('header')
    const footer = null || document.getElementById('footer')
    const content = null || document.getElementById('content')
    const modal = null || document.getElementById('modal')

    let hash = GetHash()
    let route = await ResolveRoutes(hash)
    let render = routes ? route : Error404
    header.innerHTML = await Header()
    footer.innerHTML = await Footer()
    content.innerHTML = await Home()
    modal.innerHTML = await detailsPoke()
}
export default Router