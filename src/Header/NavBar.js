import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login'
import NavLogin from './NavLogin'
import NavLogout from './NavLogout'

class NavBar extends Component {
    state = { activeItem: 'home', open: false }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleItemClick = (e, { name }) => 
        (name === 'LOGIN') ? this.setState({ activeItem: name, open: true }) : this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (

            <React.Fragment >
                <div className='Nav'>
                    <Menu secondary   >
                        <Menu.Item
                            as={NavLink}
                            to="/Showhotel"
                            name='HOME'
                            active={activeItem === 'HOME'}
                            onClick={this.handleItemClick}
                        />
                        <NavLogin handleItemClick={this.handleItemClick} value={activeItem} />
                        <NavLogout handleItemClick={this.handleItemClick} value={activeItem} />

                        <Login setModal={this.state} close={this.close} />
                    </Menu>


                </div>

            </React.Fragment>
        )
    }
}

export default NavBar