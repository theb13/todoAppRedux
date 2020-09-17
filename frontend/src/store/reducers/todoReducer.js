const initialState = {
    description: '',
    list: []
}

export default (state = initialState, action) => {

    switch (action.type) {
        case 'DESCRIPTION_CHANGED':
            return (
                { ...state, description: action.payload }
            )
        case 'TODO_SEARCH':
            return (
                { ...state, list: action.payload.data }
            )
        case 'TODO_CLEAR':
            return (
                { ...state, description: '' }
            )
        default:
            return state
    }
}