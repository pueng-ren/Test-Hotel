import React, { Component } from 'react';
import './App.css';
import { BrowserRouter,Route } from "react-router-dom";
import Showhotel from './Showhotel/Showhotel'
import DetaiHotel from './Detail/DetaiHotel'
import Booking from './Booking/Booking'
import Login from './Login/Login'
import Register from './Header/Register'
import NavBar from './Header/NavBar'

import SimpleMap from './Map/SimpleMap'

class App extends Component {

  

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <switch>
            <Route exact path={"/home"} component={Showhotel} />
            <Route exact path={"/DetaiHotel"} component={DetaiHotel} />
            <Route exact path={"/Login"} component={Login} />
            <Route exact path={"/Register"} component={Register} />
            <Route exact path={"/Booking"} component={Booking} />
            <Route exact path={"/BodyBooking/:id"} component={Booking} />
            <Route exact path={"/SimpleMap"} component={SimpleMap} />

          </switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;


