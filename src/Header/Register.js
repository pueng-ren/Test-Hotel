import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { connect } from 'react-redux'
import { SignUp } from '../store/action/AuthAction'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import {Redirect} from 'react-router-dom'

class Register extends Component {

    constructor(props){
        super(props)
    }
    state = {
        firstName: '',
        lastName: '',
        birdday: '',
        email: '',
        password: ''

    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });

    }

    handeleSubmit = (e) => {
        e.preventDefault();

        const { props, state } = this;
        const { firebase } = props;
        const newUser = { ...state };
        this.props.SignUp(newUser, firebase);

    }





    render() {
        const {auth}=this.props
        if(auth.uid)
        {
            return <Redirect to='/home'/>
        }



        return (
            <React.Fragment>
                <Container className='body'>
                    <h1>Register</h1>
                    <Form
                        ref="form"
                        onSubmit={this.handeleSubmit}
                    >
                        <Input
                            type="email"
                            label="Email"
                            name="email"
                            onChange={this.handleFormChange}
                            value={this.state.email}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Email'
                        />
                        <Input
                            type="text"
                            label="Password"
                            name="password"
                            onChange={this.handleFormChange}
                            value={this.state.password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Password'
                        />
                        <Input
                            type="text"
                            label="First Name"
                            name="firstName"
                            onChange={this.handleFormChange}
                            value={this.state.firstName}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='First Name'
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            name="lastName"
                            onChange={this.handleFormChange}
                            value={this.state.lastName}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Last Name'
                        />
                        <Input
                            type="Date"
                            label="Birth Data"
                            name="birdday"
                            onChange={this.handleFormChange}
                            value={this.state.birdday}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Birth Data'
                        />

                        <Button color="teal">Submit</Button>
                    </Form>
                </Container>


            </React.Fragment>
        )
    }

}

const mapStateToProps=(state)=>({
    auth : state.firebase.auth,
    authError: state.auth.authError,
})

const mapDispatchToProps=dispatch=>({
    SignUp: (newUser, firebase) => dispatch(SignUp(newUser, firebase)),
})



export default compose(
    firebaseConnect(),
    connect(mapStateToProps, mapDispatchToProps),
)(Register);