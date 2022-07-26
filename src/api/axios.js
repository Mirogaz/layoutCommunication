import axios from 'axios'

const hhtpClient = axios.create({
    baseURL: 'https://62de71809c47ff309e73812f.mockapi.io/api/v1'
})

export default hhtpClient 