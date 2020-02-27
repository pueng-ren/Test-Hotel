import React, { Component } from 'react'

import Model from '../Components/Model/Model'
import BodyBooking from './BodyBooking'
class BookingRoom extends Component {
    // state={
    //     Username : '',
    //     Password :'',
       
    // }

    // handleFormChange = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({
    //       [name]: value,
    //     });
        
    //   }
    
    render() {
        let { open } = this.props.setModal
        const close = this.props.close
        // let {Username,Password}=this.state
        return (
            
            <React.Fragment  >
                <Model 
                    setModal={this.props.setModal} 
                    close={close} 
                    header="BOOKING"
                    body={<BodyBooking/>} close={close}
                    />          
            </React.Fragment>
        )
    }

}



export default BookingRoom