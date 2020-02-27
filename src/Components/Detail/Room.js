import React, { Component } from 'react'
import { Header, Table, Rating, Button } from 'semantic-ui-react'


class Room extends Component {

    render() {
        const  room  = this.props.room
        return (
            <React.Fragment>
                {
                    room.map((item) => {
                        return (
                            <Table.Row key={item.id}>
                                <Table.Cell>
                                    <Header as='h2' textAlign='center'>
                                    {item.name}
                        </Header>
                                </Table.Cell>
                                <Table.Cell singleLine>Power Output Power Output</Table.Cell>
                                <Table.Cell>
                                    <Rating icon='star' defaultRating={3} maxRating={3} />
                                </Table.Cell>
                                <Table.Cell textAlign='right'>
                                    80% <br />
                                    <a href='#'>18 studies</a>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button />
                                </Table.Cell>
                            </Table.Row>

                        )
                    }
                    )
                }


            </React.Fragment>
        )
    }
}

export default Room