import React, { Component } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

class Counter extends Component {
  render() {
    const { increment, decrement, count } = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>

        <View style={styles.label}>
          <Text style={styles.buttonText}>{count}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },

  button: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'coral'
  },

  buttonText: {
    fontSize: 28
  },

  label: {
    marginVertical: 30
  }
});

export { Counter };
