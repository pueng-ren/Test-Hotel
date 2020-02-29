import React, { Component } from 'react';
import { Menu} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import {SignOut} from '../store/action/AuthAction'

class NavLogin extends Component {
    constructor(props){
        super(props)
    }
   
    render() {
        const { activeItem } = this.props.value

        const handleSignOut = () => {
            const { firebase } = this.props;
            this.props.SignOut(firebase);
          };

        return (

            <React.Fragment >
              
                        <Menu.Item
                            name='MY BOOKING'
                            as={NavLink}
                            to="/Booking"
                            active={activeItem === 'MY BOOKING'}
                            onClick={this.props.handleItemClick}
                        />
                        
                        <Menu.Menu position='right'>
                            <Menu.Item
                                name='LOGOUT'
                                active={activeItem === 'LOGOUT'}
                                onClick={handleSignOut}
                            />
                        </Menu.Menu>

            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => ({
    SignOut: firebase => dispatch(SignOut(firebase)),
  });
  
export default compose(
    firebaseConnect(),
    connect(null, mapDispatchToProps),
  )(NavLogin);
