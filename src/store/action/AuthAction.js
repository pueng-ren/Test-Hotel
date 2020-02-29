
export const SingIn = ({ credentials, firebase }) =>{
    return   (dispatch, getState)=>{
        console.log(credentials.email+" "+credentials.password)
        firebase.auth().signInWithEmailAndPassword(
          credentials.email,
          credentials.password,
        ).then(() => {
        // console.log('ddd')
          dispatch({ type: 'LOGIN_SUCCESS' });
        }).catch((err) => {
            // console.log('11')
            dispatch({ type: 'LOGIN_ERROR', err });
        });
    }
   
  };


  export const SignOut = firebase => (dispatch, getState) => {
    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' });
    });
  };