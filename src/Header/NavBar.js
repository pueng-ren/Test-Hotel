import React, { Component } from 'react';
import { Menu, Modal, Image, Header, Button } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Login from './Login'
class NavBar extends Component {
    state = { activeItem: 'home', open: false }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleItemClick = (e, { name }) => (name==='LOGIN') ? this.setState({ activeItem: name, open: true }) : this.setState({ activeItem: name}  )

    render() {
        const { activeItem } = this.state

        return (

            <React.Fragment >
                <div style={{ padding: '0.5%', position: 'fixed', backgroundColor: '#F2F2F2', width: '100%' }}>
                    <Menu secondary   >
                        <Menu.Item
                            as={NavLink}
                            to="/Showhotel"
                            name='HOME'
                            active={activeItem === 'HOME'}
                            onClick={this.handleItemClick}
                        />
                        <Menu.Item
                            name='MY BOOKING'
                            as={NavLink}
                            to="/Showhotel"
                            active={activeItem === 'MY BOOKING'}
                            onClick={this.handleItemClick}
                        />

                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='LOGIN'
                                active={activeItem === 'LOGIN'}
                                onClick={this.handleItemClick}
                            />
                        </Menu.Menu>

                        <Login setModal={this.state} close={this.close} />
                    </Menu>


                </div>

            </React.Fragment>
        )
    }
}

export default NavBar