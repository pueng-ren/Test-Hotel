const initState={
    data : [
        {
            idBooking: '1',
            IdRoom: '2',
            DateStart: '20/02/1999',
            Hotel_name: 'test_hotel',
            DateEnd:'22/02/1999',
            number: '10'
        }
    ]
}
const BookingReducer =(state = initState ,action)=>{
    switch(action.type){
        case 'ADD_BOOKING':
            console.log("create success",action.booking)
            return state.concat([action.booking])
        default:
            return state
    }

}
export default BookingReducer