const INITIAL_VALUE = {
    list: []
}
export default function favReducer(state = INITIAL_VALUE, action) {
    switch (action.type) {
        case 'GET_MOVIE_LIST':
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}