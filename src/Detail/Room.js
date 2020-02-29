import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Listproperty from './Listproperty'
import BookingRoom from './BookingRoom'
import Login from '../Login/Login'

import { connect } from 'react-redux'

class Room extends Component {
    constructor(props) {
        super(props)
    }


    state = { open: false }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleItemClick = (e, { name }) => this.setState({ open: true }) 


    render() {
        const room = this.props.room
        const {auth}=this.props
       
        return (
        room.map((item) => {
            return (
                <React.Fragment  key={item.id}>
                    <Table.Row>
                        <Table.Cell>
                            {item.name}
                        </Table.Cell>
                        <Table.Cell ><Listproperty item={item.property} /></Table.Cell>
                        <Table.Cell>
                            {item.sizeRoom}
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            {item.available}
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            {item.price}
                        </Table.Cell>
                        <Table.Cell>
                            <Button  onClick={this.handleItemClick} primary>BOOKING</Button>
                            
                        </Table.Cell>
                    </Table.Row>
                    {
                        auth.uid? 
                        <BookingRoom setModal={this.state} close={this.close} key={item.id} id_hotel={item.id} Hotel={item.name} available={item.available}/>
                        :<Login setModal={this.state} close={this.close} key={item.id}/>
                        
                    }
                   
                </React.Fragment>
                )
            }
        ))
    }
}
const mapStateToProps = state => ({
    authError: state.auth.authError,
    auth: state.firebase.auth,
});


export default connect(mapStateToProps)(Room)
