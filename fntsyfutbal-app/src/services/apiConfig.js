import axios from 'axios'

const JwToken = localStorage.getItem('token') || null

const api = Axios.create({
    baseURL: apiUrl,
    headers: {
            Authorization: `Bearer ${JwToken}`,
            'Access-Control-Allow-Origin': '*'
    }
})

export default api