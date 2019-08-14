import React, { Component } from 'react';
import { View } from 'react-native';
import { Card } from './Components';

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
        <Card subtitle='...' borderColor='coral' />
      </View>
    );
  }
}

export default App;
