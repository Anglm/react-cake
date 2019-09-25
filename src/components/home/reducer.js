import {HOMEDATA} from "../../store/actionType"
var iniState ={
    lsit:[]
}

const reducer = (state = iniState.lsit, action) => {
    var newState = {...state}
    switch (action.type) {
    case HOMEDATA:
        newState.list = action.list
        return newState
    
    default:
        return state
    }
}
export default reducer