const initState ={}

const AuthReducer =(state = initState ,action)=>{
    switch(action.type){
        case 'ADD_BOOKING':
        return state.concat([action.data])
        default:
        return state
    }

}
export default AuthReducer