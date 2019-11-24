export default function reducer(state = {
    authenticated: false
}, action) {
    switch (action) {
        case 'SET_AUTH':
            return { ...state, authenticated: action.value }
        default:
            return state
    }
}