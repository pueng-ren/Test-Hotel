import React, { Component } from 'react'

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