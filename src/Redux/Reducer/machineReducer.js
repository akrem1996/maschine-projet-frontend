import {machinesActionsTypes} from "../Actions/machineAction"

const initialState = {machine: [], error: false, loading: false}

const machineReducer = (state = initialState, action) => {
    switch(action.type) {
        case machinesActionsTypes.FETCH_START:
            return{...state, loading: true}
        case machinesActionsTypes.FETCH_ERROR:
            return{...state,error: true, loading: false}
        case machinesActionsTypes.FETCH_LIVE_MACHINE:
            const newMachine = [...state.machine,action.data]
            const element = state.machine.find(obj => obj.modelDisplayName === action.data.modelDisplayName)
            if(!element){
                return{...state,machine: newMachine}
            } else {
                const machines = state.machine.filter(obj => obj.modelDisplayName !== element.modelDisplayName)
                console.log(machines)
                return {...state,machine:[...machines,action.data]}
            }        
        default: 
            return state
    }
}

export default machineReducer;

