export default function reducer(state = {
    authenticated: false,
    coords: {
        latitude: null,
        longitude: null
    },
    posts: []
}, action) {
    switch (action.type) {
        case 'SET_AUTH':
            return { ...state, authenticated: action.value }
        case 'SET_GEO':
            return { ...state, coords: action.coords }
        case 'SET_POSTS':
            return { ...state, posts: action.posts }
        default:
            return state
    }
}