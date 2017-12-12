import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView from 'react-native-maps';


const style = StyleSheet.create({
  view: {
    flex: 1,
    //backgroundColor: 'green',
  },
  map: {
    flex: 1,
  },
});

const Around = (props) => {
  console.log(props);
  return (
    <View style={style.view}>
      <MapView style={style.map}
        initialRegion={{
          latitude: 48.864716,
          longitude: 2.349014,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0200,
        }}


      />
    </View>
  );
}

export default Around;
