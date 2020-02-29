import React, { Component } from 'react'
import { Header, Table } from 'semantic-ui-react'


class ListBooking extends Component {

    render() {
        const booking = this.props.item
        return (
            <React.Fragment key={this.props.key}>
               

                <Table.Row>
                    <Table.Cell>
                        
                    {this.props.num}
                    </Table.Cell>
                    <Table.Cell singleLine>
                        {booking.Date}
                        </Table.Cell>
                    <Table.Cell>
                    
                    {booking.Hotel_name}
                    </Table.Cell>
                    <Table.Cell >
                    {booking.Room_name}
                    </Table.Cell>
                    <Table.Cell>
                    {booking.number}
                    </Table.Cell>
                    <Table.Cell>
                    {booking.DateStart}-{booking.DateEnd}
                    </Table.Cell>
                    <Table.Cell>{booking.price}</Table.Cell>
                    
                </Table.Row>
            </React.Fragment>
        )
    }
}

export default ListBooking