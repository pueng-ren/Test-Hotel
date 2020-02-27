import React, { Component } from 'react'
import { Table, Button } from 'semantic-ui-react'
import Listproperty from './Listproperty'
import { Model } from '../Components/Model/Model'
import BookingRoom from './BookingRoom'
class Room extends Component {
    state = { open: false }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleItemClick = (e, { name }) => this.setState({ open: true }) 


    render() {
        const room = this.props.room
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
                    <BookingRoom setModal={this.state} close={this.close} key={item.id}/>
                </React.Fragment>
                )
            }
        ))
    }
}

export default Room