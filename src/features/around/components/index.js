import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Marker from './Marker'
import MapView from 'react-native-maps';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  map: {
    flex: 1
  }
});

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}



const Around = (props) => {
  console.log('PROPS ');
  console.log(props);
  return (
    <View style={styles.root}>
      <MapView
        style={styles.map}
      >
        {
          props.places && props.places.map((place, i) => (<Marker key={i} marker={place}/>))
        }
      </MapView>
    </View>
  );
}


export default Around;
