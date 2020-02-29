import React, { Component } from 'react'

import Model from '../Components/Model'
import BodyBooking from './BodyBooking'
class BookingRoom extends Component {

    
    render() {
        const close = this.props.close
        const {id_hotel,Hotel,available,price}= this.props
        // let {Username,Password}=this.state
        return (
            
            <React.Fragment  >
                <Model 
                    setModal={this.props.setModal} 
                    header="BOOKING"
                    body={<BodyBooking  id_hotel={id_hotel} Hotel={Hotel}  close={close} price={price} hotel_name={this.props.hotel_name}/>} close={close}
                    available={available}
                    />          
            </React.Fragment>
        )
    }

}



export default BookingRoom