import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { FormInput } from 'react-native-elements';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row"
  },
  input: {
    flex: 1,
    marginLeft: 40,
    marginTop: 20,
    height: 40,
    padding: 10,
    backgroundColor: "#FFF",
    borderBottomWidth: 1
  },
  button: {
    flex: 0,
    height: 50,
    marginVertical: 20,
    paddingTop: 15,
    marginRight: 20
  }
});
export default class Input extends Component {
  constructor() {
    super();
    this.addHandler = this.addHandler.bind(this);
    this.state = {
      text: undefined
    };
  }
  addHandler() {
    if (this.props.onAdd) this.props.onAdd(this.state.text);
    this.setState({
      text: undefined
    });
  }
  render() {
    return (
      <View style={styles.root}>


        <FormInput
          placeholder="Enter a destination"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
          inputStyle={styles.input}
        />


        <TouchableOpacity style={styles.button} onPress={this.addHandler}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
