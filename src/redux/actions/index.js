

export const ADD_TO_FAVOURITE = "ADD_TO_FAVOURITE"
export const REMOVE_FAV_COM = "REMOVE_FAV_COM"
export const GET_SUBMIT = 'GET_SUBMIT'
export const GET_JOBS = 'GET_JOBS'

export const addFavouriteAction = (data) => {
    return {
        type: ADD_TO_FAVOURITE,
        payload: data,
    }
}

export const removeFavAction = (data) => {
    return {
        type: REMOVE_FAV_COM,
        payload: data,
    }
}

export const getJobsAction = (params) => {

    const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?company="
    return async (dispatch) => {
        try {
            const response = await fetch(baseEndpoint + params)
            if (response.ok) {
                const { data } = await response.json()
                dispatch({
                    type: GET_JOBS,
                    payload: data,
                })
                console.log(data)
            } else {
                alert("Error fetching results")
            }
        } catch (error) {
            console.log(error)
        }
    }
}

export const getSubmitAction = (query) => {
    const baseEndpoint =
        "https://strive-benchmark.herokuapp.com/api/jobs?search="
    return async (dispatch) => {
        try {
            const response = await fetch(baseEndpoint + query + "&limit=20")
            if (response.ok) {
                const data = await response.json()
                dispatch({
                    type: GET_SUBMIT,
                    payload: data.data,
                })
                console.log(data)
            } else {
                alert("Error fetching results")
            }
        } catch (error) {
            console.log(error)
        }
    }
}