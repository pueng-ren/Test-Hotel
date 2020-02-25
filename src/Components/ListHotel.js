import React, { Component } from 'react'
import { Button, Icon, Image, Item, Label, Container } from 'semantic-ui-react'
class Showhotel extends Component {

    render() {
        const name = this.props.name
        return (
            <React.Fragment>
                {name.map((item) =>
                    <Item>
                        <Item.Image src={item.img} />

                        <Item.Content>
                            <Item.Header as='a'>{item.Header}</Item.Header>
                            <Item.Meta>
                                <span className='cinema'>{item.Header2}</span>
                            </Item.Meta>
                            <Item.Description>{item.detail}</Item.Description>
                            <Item.Extra>
                                <Label>{item.status}</Label>
                                <Label icon='globe' content='Additional Languages' />
                                <Button primary floated='right'>
                                    Buy tickets
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

