import React,{Component} from 'react'
import Head from '../../Header/Head'
import { Container, Table } from 'semantic-ui-react'
import ListBooking from './ListBooking'

class Booking extends Component {
    
    render(){
       
        return(
            <React.Fragment>
            <Head />
            <Container>
                <h1  style={{ margin: '5%' }} align='center'>MY BOOKING</h1>
                <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                            <Table.HeaderCell singleLine style={{ width: '5%' }}>NO.</Table.HeaderCell>
                            <Table.HeaderCell style={{ width: '10%' }}>วันที่จอง</Table.HeaderCell>
                                <Table.HeaderCell singleLine style={{ width: '20%' }}>HOTEL</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '20%' }}>ROOM</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>NUMBER</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>วันที่เข้าพัก</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '20%' }}>PRICE</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <ListBooking />
                        </Table.Body>
                    </Table>
            </Container>
        </React.Fragment>
        )
    }
}
export default Booking