import React, { Component } from 'react'
import { Container, Header, Table, Rating } from 'semantic-ui-react'
import MenuHotel from './MenuHotel'
import Room from './Room'


class DetailHotel extends Component {
    state = {
        activeItem: 'Detail'
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const detail=
            {
                "id" : "1",
                "name_hotel" : "Hotel The Serras",
                "detail_hotel" : "This luxury boutique hotel comprises 28 trendy and very spacious rooms and suites, a Michelin star Chef Restaurant and a chill out rooftop terrace. This elegant 5-star boutique hotel overlooking the new luxury Port Vell alongside the Mediterranean Sea, offers a unique hideaway with a modern understated decor. Ideal for your weekend breaks, business trips and luxury holidays in the heart of Barcelona. It boasts a cool, trendy atmosphere, world class amenities and dedicated personal service for a truly memorable hotel experience in the first studio of Pablo Picasso on vibrant Barrio Gotico. Restaurant Informal Our Michelin Star Chef invites you to experience his Catalan specialties in a delicious selection of Mediterranean tapas, prepared from fresh seasonal ingredients sourced from our local market. Rooftop Terrace Offering breathtaking views of the Mediterranean Sea and the new Marina of Port Vell, our stylish rooftop terrace comes beautifully appointed with a superb infinity pool and comfortable lounge area.",
                "address" : "Passeig de Colom, 9, 08002 Barcelona Spain",
                "contact" : "00 34 931 69 18 68",
                "websize" : "https://www.tripadvisor.com/Hotel_Review-g187497-d7142609-Reviews-Hotel_The_Serras-Barcelona_Catalonia.html",
                "location":{
                    "latiture":"1000",
                    "lontiture":"10",
                },
                "Room" : [
                    {
                        "id" : "1",
                        "name" : "Connecting rooms",
                        "property":{
                            "(WiFi)":"1",
                            "Fitness":"1",
                            "Pool":"1",
                            "Rooftop":"1",
                            "Meeting":"1",
                        },
                        "sizeRoom" : "5",
                        "available" : "5",
                        "price" : "$20",
                    }
                ]

            }
        
        return (
            <React.Fragment>
             
                <Container className='body'>
                    <div style={{ marginTop: '2%' }}></div>
                    <h2 >ชื่อโรงแรม</h2>
                   <div style={{padding:'1%'}}>
                   <MenuHotel activeMenu={this.state.activeMenu} onSelected={this.handleItemClick} />
                    <div id='Detail' style={{padding:'3%'}}>
                        <h2>รายละเอียด</h2>
                        <span>When the brother of a senior judge in the central province of
                            Nakhon Sawan was abducted in broad daylight in front of the Bangkok South Criminal Court
                            on February 4, police feared the worst. Today, three of the six suspects alleged to have been
                            involved in the abduction and subsequent murder were escorted by officers of the Crime Suppression Division (CSD) to three locations
                            for re-enactments of the crime.
                    </span>
                    </div>
                    <div id='Contact' style={{padding:'3%'}}>
                    <h2>ติดต่อ</h2>
                    <p>ที่อยู่ : <span>126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand  </span></p>
                    <p>เบอร์โทร :<span>126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand  </span></p>
                    <p>เว็บไซต์ : <span>126 Pracha Uthit Rd., Bang Mod, Thung Khru, Bangkok 10140, Thailand  </span></p>
                    </div>
                    <div id='Meditationroom' style={{padding:'3%'}}>
                    <h2>ห้องพัก</h2>
                    <Table celled padded>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell singleLine style={{ width: '20%' }}>ประเภทของห้องพัก</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '20%' }}>สิ่งอำนวยความสะดวก</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '10%' }}>จำนวนผู้เข้าพัก</Table.HeaderCell>
                                <Table.HeaderCell style={{ width: '20%' }}>ราคาวันนี้</Table.HeaderCell>
                                <Table.HeaderCell></Table.HeaderCell>
                            </Table.Row >
                        </Table.Header>

                        <Table.Body>
                            <Room room={detail.Room}/>
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