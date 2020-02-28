import React, { Component } from 'react'
import { Header, Table } from 'semantic-ui-react'


class ListBooking extends Component {

    render() {
        const booking = this.props.item
       
        // console.log(booking.idBooking.toDateString())
        return (
            <React.Fragment key={this.props.key}>
               

                <Table.Row>
                    <Table.Cell>
                        <Header as='h2' textAlign='center'>
                           {this.props.num}
                        </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>{booking.idBooking.toLocaleDateString()}</Table.Cell>
                    <Table.Cell>
                        {booking.Hotel_name}
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        80% <br />
                    </Table.Cell>
                    <Table.Cell>
                    {booking.number}
                    </Table.Cell>
                    <Table.Cell>
                    {booking.number}-{booking.DateEnd}

                    </Table.Cell>
                    <Table.Cell>

                    </Table.Cell>
                </Table.Row>
            </React.Fragment>
        )
    }
}

export default ListBooking