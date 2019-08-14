import React, { Component } from 'react';
import { View, Text } from 'react-native';

class App extends Component {
  constructor() {
    super();

    this.state = {
      points: []
    };
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
        onStartShouldSetResponder={e => {
          let newPoints = this.state.points;
          newPoints.push({
            width: e.nativeEvent.pageX,
            height: e.nativeEvent.pageY
          });

          this.setState({
            points: newPoints
          });
        }}
      >
        <View
          style={{
            width: 300,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: 'coral',
            borderWidth: 2,
            borderRadius: 10
          }}
        >
          <Text
            style={{
              fontSize: 22,
              color: 'coral'
            }}
          >
            Touch the screen!
          </Text>
        </View>

        {this.state.points.map((point, index) => (
          <View
            key={index}
            style={{
              width: 5,
              height: 5,
              backgroundColor: 'red',
              position: 'absolute',
              borderRadius: 100,
              top: point.height,
              left: point.width
            }}
          />
        ))}
      </View>
    );
  }
}

export default App;
