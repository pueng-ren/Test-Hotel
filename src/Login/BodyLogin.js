import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Link } from 'react-router-dom';


class Login extends Component {



    render() {
        let {handleFormChange,Password,Username,close} = this.props

        return (
            <React.Fragment  >

                <Form style={{ padding: '2%' }}>
                    <Input
                        type="text"
                        label="Username"
                        name="Username"
                        onChange={handleFormChange}
                        value={Username}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        placeholder='Username'
                    />
                    <Input
                        type="text"
                        label="Password"
                        name="Password"
                        onChange={handleFormChange}
                        value={Password}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        placeholder='Password'
                    />
                    <Button type='submit'>Submit</Button>
                    <p>Don't have account ? <Link to='/Register' onClick={close}>Create an account</Link></p>
                </Form>
            </React.Fragment>
        )
    }

}



export default Login