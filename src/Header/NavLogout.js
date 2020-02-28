import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login'
class NavBar extends Component {

    render() {
        const { activeItem } = this.props.value

        return (

            <React.Fragment >
              
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='LOGOUT'
                                active={activeItem === 'LOGOUT'}
                                onClick={this.props.handleItemClick}
                            />
                        </Menu.Menu>

            </React.Fragment>
        )
    }
}

export default NavBar