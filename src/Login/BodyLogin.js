import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Link } from 'react-router-dom';


class Login extends Component {




    render() {
        let {handleFormChange,handleSubmit,password,email,close} = this.props

        return (
            <React.Fragment  >

                <Form style={{ padding: '2%' }}
                onSubmit={handleSubmit}
                >
                    {/* {console.log(Username+" "+Password)} */}
                    <Input
                        type="text"
                        label="email"
                        name="email"
                        onChange={handleFormChange}
                        value={email}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        placeholder='email'
                    />
                    <Input
                        type="text"
                        label="password"
                        name="password"
                        onChange={handleFormChange}
                        value={password}
                        validators={['required']}
                        errorMessages={['this field is required']}
                        placeholder='password'
                    />
                    <Button type='submit'>Submit</Button>
                    <p>Don't have account ? <Link to='/Register' onClick={close}>Create an account</Link></p>
                </Form>
            </React.Fragment>
        )
    }

}



export default Login