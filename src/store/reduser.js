import {combineReducers} from 'redux'
import homeReducer from '../components/home/reducer'
import listReducer from '../components/list/reducer'
import detailReducer from '../components/detail/reducer'

var reducer = combineReducers({
    home:homeReducer,
    list:listReducer,
    detail:detailReducer
})
export default reducer