import axios from "axios";

export const machinesActionsTypes = {
    FETCH_START:"FETCH_START",
    FETCH_SUCCESS:"FETCH_SUCCESS",
    FETCH_ERROR:"FETCH_ERROR",
    FETCH_LIVE_MACHINE:"FETCH_LIVE_MACHINE"
}

export const fetchStart = () => ({
    type: machinesActionsTypes.FETCH_START
}); 

export const fetchSuccess = (data) => ({
    type: machinesActionsTypes.FETCH_SUCCESS,
    data
}); 

export const fetchLiveMachine = (data) => ({
    type: machinesActionsTypes.FETCH_LIVE_MACHINE,
    data
}); 

export const fetchError = () => ({
    type: machinesActionsTypes.FETCH_ERROR
}); 


export const getMaschine = () => (dispatch) => {
   /* {
        headers: {
            token: localStorage.getItem('token')
        }
    }*/
    axios.get("http://localhost:8000/maschine")
    .then((response) => {
        dispatch(fetchSuccess(response.data))
    })
    .catch(() => {
        dispatch(fetchError())
    })
}
 