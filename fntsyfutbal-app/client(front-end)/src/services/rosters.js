import api from './apiConfig'

export const getRosters = async () => {
    try {
        const resp = await api.get('/rosters')
        return resp.data.rosters
    } catch(error) {
        throw error
    }
}

export const getRosterById = async id => {
    try {
        const resp = await api.get(`/rosters/${id}`)
        return resp.data.roster
    } catch(error) {
        throw error
    }
}

export const createRoster = async roster => {
    try {
        const resp = await api.post('/rosters', roster)
        return resp
    } catch(error) {
        throw error
    }
}

export const updateRoster = async (id, roster) => {
    try {
        const resp = await api.put(`/rosters/${id}`, roster)
        return resp.data
    } catch(error) {
        throw error
    }
}

export const deleteRoster = async id => {
    try {
        const resp = await api.delete(`/rosters/${id}`)
        return resp.data
    } catch(error) {
        throw error
    }
}