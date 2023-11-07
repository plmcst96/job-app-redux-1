import { combineReducers, configureStore } from "@reduxjs/toolkit";
import favReducer from "../reducers/favourite";
import handelSearch from "../reducers/getSubmit";
import getJobsReducer from "../reducers/getJobs";

const bigReducer = combineReducers({
    favourite: favReducer,
    search: handelSearch,
    jobs: getJobsReducer,
})

const store = configureStore({
    reducer: bigReducer,
})

export default store