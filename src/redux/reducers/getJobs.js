
import { GET_JOBS } from "../actions"

const initialState = {
    job: [],
}

const getJobsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_JOBS:
            return {
                ...state,
                job: action.payload
            }
        default:
            return state
    }
}

export default getJobsReducer