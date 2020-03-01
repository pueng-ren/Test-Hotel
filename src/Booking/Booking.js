import React from 'react'
import Head from '../Header/Head'
import { Container, Table } from 'semantic-ui-react'
import ListBooking from './ListBooking'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

const Booking =(props)=> {
   
       const {auth,profile}=props
       console.log(props.booking)

        if(!auth.uid){
          return <Redirect to='/'/>
        }
        // const authorId = getState().firebase.auth.uid;

        console.log(auth)
        return (
           
            <React.Fragment>

                <Head />
                <Container  className='body'>
                    <h1 style={{ margin: '5%' }} align='center'>MY BOOKING</h1>
                       <h3>FIRST NAME :{profile.firstName}  </h3>
                       <h3 style={{marginBottom:'2%'}}>    LAST NAME :{profile.lastName}</h3>
                        <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell singleLine style={{ width: '5%' }}>No.</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>Booking date</Table.HeaderCell>
                                <Table.HeaderCell singleLine style={{ width: '15%' }}>Hotel</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '15%' }}>Room</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>Number</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '30%' }}>Check in - Check out date</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>Price</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {
                              
                                props.booking.map((item,i)=>
                                
                                <ListBooking key={item.id} item={item} num={i+1}/>
                                )
                           
                            }
                           
                        </Table.Body>
                    </Table>
                    
                   
                </Container>
            </React.Fragment>
        )
    
}

const mapStateToProps = state => {
    return {
        booking: state.booking,
        auth: state.firebase.auth,
        profile: state.firebase.profile,
    }
}

export default connect(mapStateToProps)(Booking)