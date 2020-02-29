import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import MessageExampleError from '../Components/Message'


class BodyLogin extends Component {
    constructor(props) {
        super(props)
    }




    render() {

        const checkLogin = () => {
            if (this.props.authError === 'Login fail') {
                return (
                    <MessageExampleError Header='warning' Body='warning login failed. please try again' />
                )
            }
        }
        const { handleFormChange, handleSubmit, password, email } = this.props
        const onClose=()=>{
            this.props.close()
        }

        return (
            <React.Fragment  >

                <Form style={{ padding: '2%' }}
                    onSubmit={handleSubmit}
                >
                   {checkLogin()}

                    <Input
                        type="email"
                        label="email"
                        name="email"
                        onChange={handleFormChange}
                        value={email}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        placeholder='email'
                    />
                    <Input
                        type="password"
                        label="password"
                        name="password"
                        onChange={handleFormChange}
                        value={password}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        
                        placeholder='password'
                    />
                    <Button type='submit'>Submit</Button>
                   
                </Form>
                <p>Don't have account ? <Link to='./Register'  onClick={onClose.bind()}>Create an account</Link></p>
            </React.Fragment>
        )
    }

}

const mapStateToProps = state => ({
    authError: state.auth.authError,
    auth: state.firebase.auth,
});


export default connect(mapStateToProps)(BodyLogin)