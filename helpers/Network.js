import axios from 'axios'
import config from '../config/app'

class Network {
    static token = ''
    static userData = null

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
}

export default Network
