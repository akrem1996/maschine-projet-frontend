import {machinesActionsTypes} from "../Actions/machineAction"

const initialState = {machine: [], error: false, loading: false}

const machineReducer = (state = initialState, action) => {
    switch(action.type) {
        case machinesActionsTypes.FETCH_START:
            return{...state, loading: true}
        case machinesActionsTypes.FETCH_ERROR:
            return{...state,error: true, loading: false}
        case machinesActionsTypes.FETCH_SUCCESS:
            return{...state,machine: [...action.data], loading: false}
        case machinesActionsTypes.FETCH_LIVE_MACHINE:
            console.log(action.data)
            const newMachine = [...state.machine,action.data]
            console.log(newMachine)
                return{...state,machine: newMachine}
        default: 
            return state
    }
}

export default machineReducer;

