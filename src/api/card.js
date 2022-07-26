import hhtpClient from '@/api/axios'

const getCard = async () => {
    return await hhtpClient.get('/card')
}

const postCard = async (payload) => {
    return await hhtpClient.post('/card', payload)
}

const deleteCard = async (payload) => {
    return await hhtpClient.delete(`/card/${payload}`)
}

export default {
    getCard,
    postCard,
    deleteCard
}