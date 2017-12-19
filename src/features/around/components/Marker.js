import React from 'react';
import { Marker } from 'react-native-maps';

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const PlaceMarker = props => {
  console.log(props);
  return (
    <Marker
      key={props.i}
      coordinate={props.marker.position}
      title={props.marker.label}
      pinColor={randomColor()}
    />
  );
};

export default PlaceMarker;