import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import BookingRoom from './BookingRoom'
import Login from '../Login/Login'
import Listproperty from './Listproperty'
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
                        <Table.Cell ><Listproperty item={item.detail}/></Table.Cell>
                        <Table.Cell>
                            {item.sizeRoom}
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            {item.available}
                        </Table.Cell>
                        <Table.Cell textAlign='right'>
                            ${item.price}
                        </Table.Cell>
                        <Table.Cell>
                       { item.available >0 ? <Button  onClick={this.handleItemClick} primary>BOOKING</Button> : <Button  onClick={this.handleItemClick} primary disabled>BOOKING</Button> }
                            
                            
                        </Table.Cell>
                    </Table.Row>
                    {
                        auth.uid? 
                        <BookingRoom 
                            setModal={this.state} 
                            close={this.close} 
                            key={item.id} 
                            id_hotel={item.id} 
                            Hotel={item.name} 
                            price={item.price}
                            available={item.available}
                            hotel_name={this.props.hotel}/>
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
