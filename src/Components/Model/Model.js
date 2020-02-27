import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Link } from 'react-router-dom';


class Model extends Component {
    
    render() {
        let { dimmer, open } = this.props.setModal
        const {close,body,header} = this.props
        return (
            
            <React.Fragment  >
                 <Modal size='tiny' dimmer={dimmer} open={open} onClose={close}>
                    <Modal.Header style={{textAlign:'center'}} >{header}</Modal.Header>
                    <Modal.Content>
                       {body}
                    </Modal.Content>
                    <Modal.Actions  style={{textAlign:'center'}}>
                    </Modal.Actions>
                </Modal>
            </React.Fragment>
        )
    }

}



export default Model