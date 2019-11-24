export default function reducer(state = {
    authenticated: false,
    coords: {
        latitude: null,
        longitude: null
    }
}, action) {
    switch (action.type) {
        case 'SET_AUTH':
            return { ...state, authenticated: action.value }
        case 'SET_GEO':
            return { ...state, coords: action.coords }
        default:
            return state
    }
}