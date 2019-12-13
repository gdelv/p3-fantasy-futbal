import api from './apiConfig'

export const join = async credentials => {
    try {
        const resp = await api.post('/sign-up', credentials)
        localStorage.setItem('token', resp.data.token)
        return resp.data
    } catch(error) {
        console.error(error)
    }
}

export const logIn = async credentials => {
    try {
        const resp = await api.post('/sign-in', credentials)
        console.log(resp)
        return resp.data
    } catch (error) {
        console.error(error)
    }
}


export const signOut = async user => {
    try {
        await localStorage.clear()
        return true
    } catch(error) {
        throw error
    }
}