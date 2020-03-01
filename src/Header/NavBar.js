import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import Login from '../Login/Login'
import NavLogin from './NavLogin'
import NavLogout from './NavLogout'
import {connect} from 'react-redux'
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
class NavBar extends Component {
    constructor(props){
        super(props)
    }
    state = { activeItem: 'home', open: false }

    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
    handleItemClick = (e, { name }) => 
        (name === 'LOGIN') ? this.setState({ activeItem: name, open: true }) : this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { auth, profile } = this.props;
        const links = auth.uid ?  <NavLogin profile={profile}  handleItemClick={this.handleItemClick} value={activeItem} />:<NavLogout handleItemClick={this.handleItemClick} value={activeItem}/> ;
        console.log(profile)
        return (

            <React.Fragment >
                <div className='Nav'>
                    <Menu secondary   >
                        <Menu.Item
                            as={NavLink}
                            to="/"
                            name='HOME'
                            active={activeItem === 'HOME'}
                            onClick={this.handleItemClick}
                        />
                        {links}

                        <Login setModal={this.state} close={this.close} />
                    </Menu>


                </div>

            </React.Fragment>
        )
    }
}

const mapStateToProps = state => ({
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  });
  
  export default compose(
    firebaseConnect(),
    connect(mapStateToProps),
  )(NavBar);