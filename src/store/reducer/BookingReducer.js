
const BookingReducer =(state = [] ,action)=>{
    switch(action.type){
        case 'ADD_BOOKING':
            console.log("create success",action.booking)
            return state.concat([action.booking])
        case 'CREATE_PROJECT_ERROR':
            console.log("create error",action.booking)
            return state
        default:
            return state

    }

}
export default BookingReducer