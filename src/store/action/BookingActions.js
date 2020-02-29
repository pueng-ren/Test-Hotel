
export const BookingActions =(booking,firebase)=>{
    return(dispatch, getState, { getFirestore })=> {
        const authorId = getState().firebase.auth.uid;
        // console.log(firebase)
        // firebase.collection('Booking').add({
        //     Date:booking.Date,
        //     Room_name:booking.Room_name,
        //     number:booking.number,
        //     DateEnd:booking.DateEnd,
        //     DateStart:booking.DateStart,
        //     authorId
        // }).then(()=>dispatch({type : 'ADD_BOOKING', booking})) 
        // .catch(err => dispatch({
        //     type: 'CREATE_PROJECT_ERROR',
        //     err,
        //   }));
        dispatch({type : 'ADD_BOOKING', booking})
    }
}