import getData from '../utils/getData'
const Footer = async() => {
	const pages = await getData()
	console.log(pages.next, 'page')

	const view = `
		<a href="#/page=" id="backPage">Atras</a>
		<a href="#/page=" id="nextPage">Página siguiente</a>
	`
	return view
}
export default Footer