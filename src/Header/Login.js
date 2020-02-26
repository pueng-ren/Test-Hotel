import React, { Component } from 'react'
import { Modal, Button, Form, Checkbox } from 'semantic-ui-react'

class Login extends Component {
    render() {
        let { dimmer, open } = this.props.setModal
        const close = this.props.close
        return (
            <React.Fragment  >
                <Modal size='tiny' dimmer={dimmer} open={open} onClose={close}>
                    <Modal.Header style={{textAlign:'center'}} >LOGIN</Modal.Header>
                    <Modal.Content>
                        <Form style={{padding:'2%'}}>
                            <Form.Field>
                                <label>First Name</label>
                                <input placeholder='First Name' />
                            </Form.Field>
                            <Form.Field>
                                <label>Last Name</label>
                                <input placeholder='Last Name' />
                            </Form.Field>
                            <Form.Field>
                                <Checkbox label='I agree to the Terms and Conditions' />
                            </Form.Field>
                            <Button type='submit' >Submit</Button>
                        </Form>
                    </Modal.Content>
                    <Modal.Actions  style={{textAlign:'center'}}>
                       <span>Don't have account ? <a  href="#" onClick={close}>Create an account</a></span>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }

}



export default Login