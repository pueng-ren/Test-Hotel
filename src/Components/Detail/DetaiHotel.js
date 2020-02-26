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
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            <Room />
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