import axios from 'axios'
import config from '../config/app'
import { AsyncStorage } from 'react-native'

class Network {
    static token = ''
    static userData = null
    static authenticated = false
    static store = null

    static signout() {
        Network.store.dispatch({
            type: 'SET_AUTH',
            value: false
        })
        AsyncStorage.removeItem(`superSecureCredentials`)
    }

    static getHeaders() {
        return {
            'Authorization': Network.token.type + ' ' + Network.token.token
        }
    }

    static getUserData() {
        return axios.get(config.endpoint + `/api/user`, {
            headers: {
                ...Network.getHeaders()
            }
        })
        .then(({ data }) => {
            if (data.error) throw new Error(data.error)
            return Network.userData = data
        })
    }

    static getAdListings() {
        return axios.get(config.endpoint + `/api/ads`, {
            headers: { 
                ...Network.getHeaders()
            }
        })
        .then(({ data }) => {
            if (data.error) throw new Error(data.error)
            return data
        })
    }

    static async getUserId() {
        if (Network.userData !== null) {
            return Network.userData._id
        }

        return await Network.getUserData()
            .then(userData => {
                return userData._id
            })
            .catch(() => null)
    }

    static async updateUserInfo(data) {
        return axios.post(config.endpoint + `/api/user`, data, {
            headers: { 
                ...Network.getHeaders()
            }
        })
        .then(({ data }) => {
            if (data.error) throw new Error(data.error)
            return data
        })
    }

    static async createAd(data) {
        return axios.post(config.endpoint + `/api/ads`, data, {
            headers: { 
                ...Network.getHeaders()
            }
        })
        .then(({ data }) => {
            if (data.error) throw new Error(data.error)
            return data
        })
    }
}

export default Network
