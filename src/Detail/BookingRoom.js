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
        const close = this.props.close
        const {id_hotel,Hotel,available}= this.props
        // let {Username,Password}=this.state
        return (
            
            <React.Fragment  >
                <Model 
                    setModal={this.props.setModal} 
                    close={close} 
                    header="BOOKING"
                    body={<BodyBooking  id_hotel={id_hotel} Hotel={Hotel}/>} close={close}
                    available={available}
                    />          
            </React.Fragment>
        )
    }

}



export default BookingRoom