import React, { Component } from 'react'
import { Button, Icon, Image, Item, Label, Container } from 'semantic-ui-react'
import ListHotel from './ListHotel'

const paragraph = <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />

class Showhotel extends Component {

    render() {
        const name = [
            {
                img: 'https://react.semantic-ui.com/images/wireframe/image.png',
                Header: '12 Years a Slave',
                Header2: 'Union Square 14',
                detail: 'The number of reported cases from the novel coronavirus (Covid-19) has risen to 80,150 across the world, resulting in 2,701 deaths. 27,595 people have recovered from the virus, the death rate is still hovering below 2%. ',
                status: 'available'
            }
        ]
        return (
            <Container className='dd'>
                <h1 style={{margin: '5%'}} align='center'>ALL HOTELS</h1>
                <Item.Group divided>
                    <ListHotel name={name} />
                </Item.Group>
            </Container>
        )
    }
}



export default Showhotel