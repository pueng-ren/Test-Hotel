import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import { Input, Menu, Header, Icon } from 'semantic-ui-react'
import logo from './bg.jpg'


class NavBar extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })
    render() {
        const { activeItem } = this.state


        return (
            <React.Fragment>
               
                <Header as='h2' style={{backgroundImage: `url(${logo})`,height:'500px'}}> 
                <Menu secondary  style={{padding:'2%'}} fixed>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='messages'
                        active={activeItem === 'messages'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='friends'
                        active={activeItem === 'friends'}
                        onClick={this.handleItemClick}
                    />
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Input icon='search' placeholder='Search...' />
                        </Menu.Item>
                        <Menu.Item
                            name='logout'
                            active={activeItem === 'logout'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu>
                   
                </Header>

            </React.Fragment>
        )
    }
}

export default NavBar