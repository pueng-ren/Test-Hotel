import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react'

class NavBar extends Component {

    render() {
        const { activeItem } = this.props.value

        return (

            <React.Fragment >
              
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='LOGIN'
                                active={activeItem === 'LOGIN'}
                                onClick={this.props.handleItemClick}
                            />
                        </Menu.Menu>

            </React.Fragment>
        )
    }
}

export default NavBar