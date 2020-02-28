const HotelReducer =(state = [] ,action)=>{
    switch(action.type){
        case 'ADD_BOOKING':
        return state.concat([action.data])
        default:
        return state
    }

}
export default HotelReducer