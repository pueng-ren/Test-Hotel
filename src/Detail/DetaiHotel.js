import React, { Component } from 'react'
import { Container, Table, Grid } from 'semantic-ui-react'
import Room from './Room'
import SimpleMap from '../Map/SimpleMap'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Listproperty from './Listproperty'


class DetailHotel extends Component {
    _isMounted = false;
    state = {
        activeItem: 'Detail',
        data: [],
        location:'',
        latiture:'',
        Loading: false
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    componentDidMount() {
        this._isMounted = true;
        axios.get(`https://cb5e1f83-a66c-46ba-b49b-5c52f546772a.mock.pstmn.io/hotel/${this.props.match.params.id}`)
            .then(res => {
               if (this._isMounted) {

                    const data = res.data.data;
                    this.setState({ data: data, Loading: true ,latiture : data.location.latiture,lontiture : data.location.lontiture})

                }
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
       
        this._isMounted = false;
        this.setState({ activeItem: 'Detail',
        data: [],
        location:'',
        latiture:'',
        Loading: false})
      }

    render() {
        const { data,latiture,lontiture } = this.state
        console.log(data.property)

        const room = () => {
            if (this._isMounted) {
                return (<Room room={data.Room} hotel={data.name_hotel} />)
            }
        }

        return (
            <React.Fragment>

            
                <Container className='body'>

                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <h2>About</h2>
                                <span>{data.detail_hotel}</span>
                                <h2>Property amenities</h2>
                                <span>{this._isMounted?<Listproperty item={data.property} />:null}</span>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h2>Contact</h2>
                                <p>Address : <span>{data.address}</span></p>
                                <p>Tel :<span>{data.contact}</span></p>
                                <p>Website page : <Link to='{data.websize}'>Click HERE</Link> </p>
                                <div  style={{height:'50px'}}> 
                                   
                                    <SimpleMap lat={latiture} lon={lontiture} />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='marginT2'>
                        <Grid.Column >
                            <h2> Meditation room</h2>
                            <Table celled padded>
                           
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell singleLine style={{ width: '20%' }}>Type</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '25%' }}>Detail</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '10%' }}>guests</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '10%' }}>available rooms</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '15%' }}>Price</Table.HeaderCell>
                                        <Table.HeaderCell></Table.HeaderCell>
                                    </Table.Row >
                                </Table.Header>
                                <Table.Body>
                                    {room()}

                                </Table.Body>
                            </Table>
                            </Grid.Column >
                        </Grid.Row>
                    </Grid>



                </Container>
            </React.Fragment>
        )
    }
}

export default DetailHotel