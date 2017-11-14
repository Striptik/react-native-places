import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Button from '../../shared-ui/Button';

const Home = ({ navigation }) => (

  <View>
    <Text>Home Screen</Text>
    <Button
      onPress={() => navigation.navigate('Places')}
      label="navigate >"
    />
  </View>
);

/*

 */

export default Home;
