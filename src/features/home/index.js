import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Button from "../../shared-ui/Button";
import Svg, { Circle } from 'react-native-svg';
import Homer from '../../shared-ui/HomerSimpson';

const style = {
  text: {
    textAlign: 'center',
    fontFamily: 'KaushanScript-Regular',
    fontSize: 40
  },
};

const Home = ({ navigation }) => (
  <View>
    <Button label="Navigate >" onPress={() => navigation.navigate("Places")} />
    <Text style={style.text}>Home page</Text>
    <Svg
      height="300"
      width="300"
    >
      <Circle
        cx="180"
        cy="150"
        r="100"
        fill="blue"
      />
    </Svg>
    <Homer /> 
  </View>
);

export default Home;
