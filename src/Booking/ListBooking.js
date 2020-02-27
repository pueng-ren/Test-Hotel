import React, { Component } from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'


class ListBooking extends Component {

    render() {
        return (
            <React.Fragment>

                <Table.Row>
                    <Table.Cell>
                        <Header as='h2' textAlign='center'>
                            A
                        </Header>
                    </Table.Cell>
                    <Table.Cell singleLine>Output</Table.Cell>
                    <Table.Cell>
                        <Rating icon='star' defaultRating={3} maxRating={3} />
                    </Table.Cell>
                    <Table.Cell textAlign='right'>
                        80% <br />
                    </Table.Cell>
                    <Table.Cell>

                    </Table.Cell>
                    <Table.Cell>

                    </Table.Cell>
                    <Table.Cell>

                    </Table.Cell>
                </Table.Row>
            </React.Fragment>
        )
    }
}

export default ListBooking