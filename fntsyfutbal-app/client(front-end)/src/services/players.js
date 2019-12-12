import api from './apiConfig'

export const getPlayers = async () => {
    try {
        const resp = await api.get('/players')
        return resp.data.players
    } catch(error) {
        throw error
    }
}

export const getPlayerById = async id => {
    try {
        const resp = await api.get(`/players/${id}`)
        return resp.data.player
    } catch(error) {
        throw error
    }
}

export const createPlayer = async player => {
    try {
        const resp = await api.post('/players', player)
        return resp
    } catch(error) {
        throw error
    }
}

export const updatePlayer = async (id, player) => {
    try {
        const resp = await api.put(`/players/${id}`, player)
        return resp.data
    } catch(error) {
        throw error
    }
}

export const deletePlayer = async id => {
    try {
        const resp = await api.delete(`/players/${id}`)
        return resp.data
    } catch(error) {
        throw error
    }
}