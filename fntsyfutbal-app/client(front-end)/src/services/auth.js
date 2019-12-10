import api from './apiConfig'

//Create Account
export const join = async credentials => {
    try {
        const resp = await api.post('/api/Users', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch(error) {
        console.error(error)
    }
}

//Login Account
export const logIn = async credentials => {
    try {
        const resp = await api.post('/api/Users', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}

