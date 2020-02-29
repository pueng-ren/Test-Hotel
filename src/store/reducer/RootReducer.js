import AuthReducer from './AuthReducer'
import BookingReducer from './BookingReducer'
import {firebaseReducer} from 'react-redux-firebase'
import {combineReducers} from 'redux'

const RootReducer=combineReducers({
    auth : AuthReducer,
    booking : BookingReducer,
    firebase:firebaseReducer
})

export default RootReducer