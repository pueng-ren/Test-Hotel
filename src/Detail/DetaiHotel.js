import React, { Component } from 'react'
import { Container, Table, Grid } from 'semantic-ui-react'
import Room from './Room'
import SimpleMap from '../Map/SimpleMap'
import axios from 'axios'
import { Link } from 'react-router-dom'


class DetailHotel extends Component {
    state = {
        activeItem: 'Detail',
        data: [],
        location:'',
        latiture:'',
        Loading: false
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    componentDidMount() {

        axios.get(`https://3c2f2418-c7f1-4d12-b37d-00442107ebcf.mock.pstmn.io/hotel/1`)
            .then(res => {
                let receive_data = res.data.data
                if (receive_data !== []) {

                    const data = res.data.data;
                    this.setState({ data: data, Loading: true ,latiture : data.location.latiture,lontiture : data.location.lontiture})
                    // console.log(data.location.s)

                }
            })
            .catch(err => console.log(err))


    }

    render() {
        const { data, Loading,latiture,lontiture } = this.state
        const d=new Date()
        console.log(d)

        const room = () => {
            if (Loading) {
                return (<Room room={data.Room} />)
            }
        }
        return (
            <React.Fragment>

                <Container className='body'>

                    <Grid >
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <h2>รายละเอียด</h2>
                                <span>{data.detail_hotel}</span>
                            </Grid.Column>
                            <Grid.Column width={5}>
                                <h2>ติดต่อ</h2>
                                <p>ที่อยู่ : <span>{data.address}</span></p>
                                <p>เบอร์โทร :<span>{data.contact}</span></p>
                                <p>เว็บไซต์ : <Link to='{data.websize}'>Click HERE</Link> </p>
                                <div  style={{height:'50px'}}> 
                                   
                                    <SimpleMap lat={latiture} lon={lontiture} />
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row className='marginT2'>
                        <Grid.Column >
                            <h2>ห้องพัก</h2>
                            <Table celled padded>
                           
                                <Table.Header>
                                    <Table.Row>
                                        <Table.HeaderCell singleLine style={{ width: '20%' }}>ประเภทของห้องพัก</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '25%' }}>สิ่งอำนวยความสะดวก</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '10%' }}>จำนวนผู้เข้าพัก</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '10%' }}>จำนวนห้องที่ว่าง</Table.HeaderCell>
                                        <Table.HeaderCell style={{ width: '15%' }}>ราคาวันนี้</Table.HeaderCell>
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