import React, { Component } from 'react'
import { Modal } from 'semantic-ui-react'



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