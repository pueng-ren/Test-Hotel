import React, { Component } from 'react'
import { Button, Container } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'

class Register extends Component {
    state={
        Name : '',
        LastName :'',
        BirthData : '',
        Email : ''

    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
        
      }

  

   

    render() {
        return (
            <React.Fragment>
                <Container className='body'>
                    <h1>Register</h1>
                    <Form
                        ref="form"
                        onSubmit={this.onSubmit}
                    >
                        <Input
                            type="text"
                            label="Name"
                            name="Name"
                            onChange={this.handleFormChange}
                            value={this.state.Name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Name'
                        />
                        <Input
                            type="text"
                            label="Last Name"
                            name="LastName"
                            onChange={this.handleFormChange}
                            value={this.state.LastName}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Last Name'
                        />
                         <Input
                            type="Date"
                            label="Birth Data"
                            name="BirthData"
                            onChange={this.handleFormChange}
                            value={this.state.BirthData}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Birth Data'
                        />
                         <Input
                            type="email"
                            label="Email"
                            name="Email"
                            onChange={this.handleFormChange}
                            value={this.state.Email}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Email'
                        />
                          <Button color="teal">Submit</Button>
                    </Form>
                </Container>


            </React.Fragment>
        )
    }

}



export default Register