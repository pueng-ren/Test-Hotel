import React, { Component } from 'react'
import { Modal, Button,  Checkbox } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'


class Login extends Component {
    state={
        Username : '',
        Password :'',
       
    }

    handleFormChange = (e) => {
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
        
      }
    
    render() {
        let { dimmer, open } = this.props.setModal
        const close = this.props.close
        return (
            
            <React.Fragment  >
                <Modal size='tiny' dimmer={dimmer} open={open} onClose={close}>
                    <Modal.Header style={{textAlign:'center'}} >LOGIN</Modal.Header>
                    <Modal.Content>
                        <Form style={{padding:'2%'}}>
                          
                        <Input
                            type="text"
                            label="Username"
                            name="Username"
                            onChange={this.handleFormChange}
                            value={this.state.Username}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Username'
                        />
                        <Input
                            type="text"
                            label="Password"
                            name="Password"
                            onChange={this.handleFormChange}
                            value={this.state.Password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            placeholder='Password'
                        />
                            
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions  style={{textAlign:'center'}}>
                       <span>Don't have account ? <a  href='/Register' onClick={close}>Create an account</a></span>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }

}



export default Login