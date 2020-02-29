
// import  { db } from '../../config/fbConfig';
// import 'firebase/auth';
// import 'firebase/firestore';

export const SingIn = ({ credentials, firebase }) => {
  return (dispatch, getState) => {
    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password,
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  }

};


export const SignOut = firebase => (dispatch, getState) => {

  firebase.auth().signOut().then(() => {
    dispatch({ type: 'SIGNOUT_SUCCESS' });
  });
};

export const SignUp = (newUser, firebase) => (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  console.log(firebase)
  firebase.auth().createUserWithEmailAndPassword(
    newUser.email,
    newUser.password,
  )
    .then(resp => firestore.collection('users').doc(resp.user.uid).set({
      firstName: newUser.firstName,
      lastName: newUser.lastName,
      birdday: newUser.birdday,
      initials: `${newUser.firstName[0]}${newUser.lastName[0]}${newUser.birdday[0]}`,
    }))
    .then(() => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    })
    .catch((err) => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
};
