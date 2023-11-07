import { GET_SUBMIT } from "../actions"

const initialState = {
    search: [],
}

const handelSearch = (state = initialState, action) => {

    switch (action.type) {
        case GET_SUBMIT:
            return {
                ...state,
                search: action.payload
            }

        default:
            return state

    }
}

export default handelSearch