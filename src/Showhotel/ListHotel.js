import React, { Component } from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import {Redirect} from 'react-router-dom'

class Showhotel extends Component {


    render() {
        const name = this.props.name

        const value =(id)=>{
            return `/DetaiHotel/${id}`
        }
      
        return (
            <React.Fragment>
                
                {name.map((item) =>
                    <Item style={{margin:'3%'}} key={item.id} >
                        
                        <Item.Image src={item.image} />
                        <Item.Content>
                            <Item.Header as='a'>{item.Header}</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>{item.Header2}</span>
                            </Item.Meta>
                            <Item.Description>{item.detail}</Item.Description>
                            <Item.Extra>
                                <Label>{item.status}</Label>
                                <Button primary floated='right' to={value(item.id)} as={NavLink}>
                                    More Info
                                <Icon name='right chevron' />
                                </Button>
                            </Item.Extra>

                        </Item.Content>
                    </Item>

                )}
            </React.Fragment>
        )

    }

}

export default Showhotel

