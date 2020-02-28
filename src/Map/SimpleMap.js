import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
 
class SimpleMap extends Component {
  constructor(props) {
    super(props);
  }

  displayMarkers = () => {
   
      return <Marker position={{
       lat: this.props.lat,
       lng: this.props.lon
     
    }}
    ></Marker>
  }
  

  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };    

    return (
        <Map
          google={this.props.google}
          zoom={8}
          style={mapStyles}
          initialCenter={{ lat: this.props.lat, lng: this.props.lon}}
        >
          {this.displayMarkers()}
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCw1Cu5QmZqsFLWq-D7m12E3Qqjjj13xWY'
})(SimpleMap)