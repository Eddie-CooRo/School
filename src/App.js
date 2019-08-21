import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { fromJS } from 'immutable';

class App extends Component {
  constructor() {
    super();

    this.state = fromJS({
      a: 'test',
      b: 2,
      c: {
        x: 'x',
        y: 'y',
        z: 'z',
        letters: ['q', 'w', 'e', 'r', 't', 'y']
      }
    });
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F8F8FF'
        }}
      >
        <Text
          style={{
            fontSize: 28,
            color: 'black'
          }}
        >
          {this.state.toJS().a}
        </Text>
      </View>
    );
  }
}

export default App;
