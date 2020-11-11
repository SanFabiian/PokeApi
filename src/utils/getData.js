const GetData = async (id, page) => {
    const API = `https://pokeapi.co/api/v2/pokemon?limit=20&offset=0`
    const apiUrl = id ? `${API}${id}` : API
    try {
        const response = await fetch(apiUrl)
        const data = await response.json()
        return data
    } catch (error) {
        console.log('Fetch Error', error)
    }
}
export default GetData