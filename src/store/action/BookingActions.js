export const BookingActions =(booking)=>{
    return(dispatch,getState)=> {
       dispatch({type : 'ADD_BOOKING', booking})
    }
}