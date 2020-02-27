import React, { Component } from 'react'
import { Container, Table } from 'semantic-ui-react'
import MenuHotel from './MenuHotel'
import Room from './Room'
import axios from 'axios'


class DetailHotel extends Component {
    state = {
        activeItem: 'Detail',
        data:[ ],
        Loading:false
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })


    componentDidMount() {

        axios.get(`https://3c2f2418-c7f1-4d12-b37d-00442107ebcf.mock.pstmn.io/hotel/1`)
        .then(res => {
        let receive_data=res.data.data
        if(receive_data!==[]){
           
                const data = res.data.data;
                this.setState({data:data,Loading:true})
          
            }
         })            
         .catch(err => console.log(err))

         
      }

    render() {
        const {data,Loading}=this.state

        const room =()=>{if (Loading) {
            return( <Room room={data.Room}/>) 
        }}
        return (
            <React.Fragment>
            //     {console.log(data)}
             
                <Container className='body'>
                    <div style={{ marginTop: '2%' }}></div>
                    <h2 >{data.name_hotel}</h2>
                   <div style={{padding:'1%'}}>
                   <MenuHotel activeMenu={this.state.activeMenu} onSelected={this.handleItemClick} />
                    <div id='Detail' style={{padding:'3%'}}>
                        <h2>รายละเอียด</h2>
                        <span>{data.detail_hotel}
                    </span>
                    </div>
                    <div id='Contact' style={{padding:'3%'}}>
                    <h2>ติดต่อ</h2>
                    <p>ที่อยู่ : <span>{data.address}</span></p>
                    <p>เบอร์โทร :<span>{data.contact}</span></p>
                    <p>เว็บไซต์ : <span>{data.websize}</span></p>
                    </div>
                    <div id='Meditationroom' style={{padding:'3%'}}>
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
                    </div>
                   </div>


                </Container>
            </React.Fragment>
        )
    }
}

export default DetailHotel