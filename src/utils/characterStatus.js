import GetData from './getData'
import GetHash from './getHash'

const characterStatus = async () => {
    const id = GetHash()
    const character = await GetData(id)
    const status = character.status
    if(status === 'Alive') {
    } else if (status === 'Dead'){
    }
    return character
}
export default characterStatus