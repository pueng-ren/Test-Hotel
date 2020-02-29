
const BookingReducer =(state = [] ,action)=>{
    switch(action.type){
        case 'ADD_BOOKING':
            console.log("create success",action.booking)
            return state.concat([action.booking])
        default:
            return state
    }

}
export default BookingReducer