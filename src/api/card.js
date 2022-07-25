import axios from '@/api/axios'

const getCard = async () => {
    console.log('res')
    const res = await axios.get('/card')
    console.log(res)
    return res
}

export default {
    getCard
}