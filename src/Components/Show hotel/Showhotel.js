import React, { Component } from 'react'
import { Button, Icon, Image, Item, Label, Container } from 'semantic-ui-react'
import ListHotel from './ListHotel'
import Head from '../../Header/Head'
import axios from 'axios'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class Showhotel extends Component {

    state ={
        data : []
    }

    componentWillMount() {

        axios.get(`https://3c2f2418-c7f1-4d12-b37d-00442107ebcf.mock.pstmn.io/hotel`)
          .then(res => {
            const data = res.data.data;
            this.setState({data:data})
          })
      }

    render() {
        const {data}=this.state
        return (
            <React.Fragment>
                <Head />
                <Container>
                    <h1  style={{ margin: '5%' }} align='center'>ALL HOTELS</h1>
                    <Item.Group style={{padding:'5%'}} divided>
                        <ListHotel name={data} />
                    </Item.Group>
                </Container>
            </React.Fragment>
        )
    }
}



export default Showhotel