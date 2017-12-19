import React, { Component } from "react";
import { Animated } from "react-native";
import Animation from 'lottie-react-native';
import world from '../../shared-ui/animation/world'

export default class HomeAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    console.log('MOUNT');
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
    }).start();
  }

  render() {
    return (
      <Animation
        style={{
          width: 200,
          height: 200,
          // backgroundColor: 'blue',
        }}
        source={world}
        progress={this.state.progress}
      />
    );
  }
}