import AuthReducer from './AuthReducer'
import BookingReducer from './BookingReducer'
import {} from 'react-redux-firebase'
import {combineReducers} from 'redux'

const RootReducer=combineReducers({
    auth : AuthReducer,
    booking : BookingReducer
})

export default RootReducer