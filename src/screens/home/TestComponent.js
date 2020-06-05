import React, {Component} from 'react';
import {
  View,
  Text,
} from 'react-native';

export default class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    this.setState({count: 1});
  }

  render() {
    return (
      <View>

      </View>
    );
  }
}
