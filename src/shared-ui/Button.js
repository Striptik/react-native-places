import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    padding: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#CCC",
    alignSelf: "flex-start",
  },
  text: {
    fontSize: 30
  },
});

const AppButton = props => (
  <TouchableOpacity onPress={props.onPress} style={styles.button}>
    <Text style={styles.text}>{props.label}</Text>
  </TouchableOpacity>
);

export default AppButton;
