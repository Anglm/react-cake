import {LISTDATA} from "../../store/actionType"
var iniState ={
    list:[]
}

const reducer = (state = iniState.list,action) =>{
    var newState = {...state}
    switch (action.type) {
        case LISTDATA:
            newState.list = action.list
            return newState
        default:
           return state
    }
}

export default reducer