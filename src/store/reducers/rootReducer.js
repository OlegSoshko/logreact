import {combineReducers} from 'redux'
import viewLotReducer from './viewLotReducer'

export default combineReducers({
    ...viewLotReducer
})