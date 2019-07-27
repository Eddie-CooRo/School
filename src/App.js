import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
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
          Hello there!
        </Text>
      </View>
    );
  }
}

export default App;
