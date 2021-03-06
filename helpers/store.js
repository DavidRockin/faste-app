import { createStore } from 'redux';
import reducer from '../reducers'

const store = createStore(reducer, {
    authenticated: false,
    coords: {
      latitude: null,
      longitude: null
    },
    posts: [],
    newMessageUser: {
      userId: '',
      userName: ''
    }
  })

export default store
