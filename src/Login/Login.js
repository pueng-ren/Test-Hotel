import React, { Component } from 'react'

import BodyLogin from './BodyLogin'
import Model from '../Components/Model'
import { connect } from 'react-redux'
import { SingIn } from '../store/action/AuthAction'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';

class Login extends Component {

    constructor(props){
        super(props)
    }
    state = {
        email: '',
        password: '',

    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });

    }
  
    clearState() {
        const reset = {
            email: '',
            password: '',
        }
        this.setState(reset)

    }

    handleSubmit = (e) => {
        e.preventDefault();
     
        const { props, state } = this;
        const { firebase } = props;
        const credentials = { ...state };
        const authData = {
            credentials,
            firebase
        };

        this.props.SingIn(authData)
    }



    render() {
      
        const { auth, authError } = this.props;
        const close = this.props.close
        let { email, password } = this.state
       
        
        return (

            <React.Fragment  >
                <Model
                    setModal={this.props.setModal}
                    close={close}
                    header="LOGIN"
                    body={<BodyLogin
                        handleFormChange={this.handleFormChange}
                        handleSubmit={this.handleSubmit}
                        email={email}
                        password={password}
                        close={close}
                        />}
                />
               
            </React.Fragment>
        )
      
    }
   
    

}

const mapStateToProps = state => ({
    authError: state.auth.authError,
    auth: state.firebase.auth,
});

const mapDispatchToProps = dispatch => ({
    SingIn: credentials => dispatch(SingIn(credentials)),
});

export default compose(
    firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps),
)(Login);