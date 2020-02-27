import React, { Component } from 'react'
import { Modal, Button } from 'semantic-ui-react'
import { Form, Input } from 'semantic-ui-react-form-validator'
import { Link } from 'react-router-dom';
import BodyLogin from './BodyLogin'
import Model from '../Components/Model/Model'

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
        let {Username,Password}=this.state
        return (
            
            <React.Fragment  >
                <Model 
                    setModal={this.props.setModal} 
                    close={close} 
                    header="LOGIN"
                    body={<BodyLogin handleFormChange={this.handleFormChange} Username={Username} Password={Password} close={close}/>}
                    />          
            </React.Fragment>
        )
    }

}



export default Login