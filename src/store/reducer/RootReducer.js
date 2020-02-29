import AuthReducer from './AuthReducer'
import BookingReducer from './BookingReducer'
import {firebaseReducer} from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'; 

import {combineReducers} from 'redux'

const RootReducer=combineReducers({
    auth : AuthReducer,
    booking : BookingReducer,
    firestore: firestoreReducer,
    firebase:firebaseReducer
})

export default RootReducer