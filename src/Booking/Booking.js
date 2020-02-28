import React, { Component } from 'react'
import Head from '../Header/Head'
import { Container, Table } from 'semantic-ui-react'
import ListBooking from './ListBooking'
import { connect } from 'react-redux'

class Booking extends Component {

    render() {
       
    

        return (

            <React.Fragment>
                <Head />
                <Container>
                    {console.log(this.props.comments)}
                    <h1 style={{ margin: '5%' }} align='center'>MY BOOKING</h1>
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell singleLine style={{ width: '5%' }}>NO.</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>วันที่จอง</Table.HeaderCell>
                                <Table.HeaderCell singleLine style={{ width: '15%' }}>HOTEL</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '15%' }}>ROOM</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>NUMBER</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '20%' }}>วันที่เข้าพัก</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '20%' }}>PRICE</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                                this.props.comments.map((item,i)=>
                                
                                <ListBooking key={item.id} item={item} num={i+1}/>
                                )
                            }
                           
                        </Table.Body>
                    </Table>
                </Container>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state
    }
}

export default connect(mapStateToProps)(Booking)