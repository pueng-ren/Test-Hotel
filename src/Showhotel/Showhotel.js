import React, { Component } from 'react'
import { Item, Container } from 'semantic-ui-react'
import ListHotel from './ListHotel'
import Head from '../Header/Head'
import axios from 'axios'


class Showhotel extends Component {

    _isMounted = false;
    state ={
        data : []
    }

    componentDidMount() {
        this._isMounted = true;
        axios.get(`https://cb5e1f83-a66c-46ba-b49b-5c52f546772a.mock.pstmn.io/hotel`)
          .then(res => {
            if (this._isMounted) {
            const data = res.data.data;
            this.setState({data:data})
            }
          })
      }

      componentWillUnmount() {
        this._isMounted = false;
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