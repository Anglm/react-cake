import {createStore,applyMiddleware} from "redux"
import thunk from 'redux-thunk'
import reducer from './reduser'

var store = createStore(reducer,applyMiddleware(thunk))

export default store