import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class MenuHotel extends Component {
    
    render() {
        const { activeMenu,onSelected } = this.props
        return (
            <div>
                <Menu pointing secondary>
                    <Menu.Item
                        name='Detail'
                        active={activeMenu === 'Detail'}
                        onClick={onSelected.bind(this)}
                    />
                    <Menu.Item
                        name='Contact'
                        active={activeMenu === 'Contact'}
                        onClick={onSelected.bind(this)}
                    />
                    <Menu.Item
                        name='Meditation Room'
                        active={activeMenu === 'MeditationRoom'}
                        onClick={onSelected.bind(this)}
                    />
                  
                </Menu>
            </div>
        )
    }

}

export default MenuHotel


