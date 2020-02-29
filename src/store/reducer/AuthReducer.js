const initState = {};

const AuthReducer = (state = initState, action) => {
    switch (action.type) {
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError: 'Login fail',
            }



        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: 'Login success',
            };

        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state;


        case 'SIGNUP_SUCCESS':
            console.log('SIGNUP_SUCCESS');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('SIGNUP_ERROR');
            return {
                ...state,
                authError: action.err.message
            };
        default:
            return state;

    }
   
}
export default AuthReducer