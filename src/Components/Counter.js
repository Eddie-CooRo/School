import React from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../Actions/Types';

const Counter = props => {
  const { dispatch, count } = props;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#001234'
      }}
    >
      {/* Status Bar */}
      <StatusBar hidden animated />

      {/* Increment Button */}
      <TouchableOpacity
        style={{
          width: 200,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'coral',
          borderRadius: 5
        }}
        onPress={() => dispatch({ type: Actions.COUNTER_INCREMENT })}
      >
        <Text style={{ fontSize: 28, color: 'white' }}>+</Text>
      </TouchableOpacity>

      {/* Count */}
      <View style={{ marginVertical: 40 }}>
        <Text style={{ fontSize: 38, color: 'white' }}>{count}</Text>
      </View>

      {/* Increment Button */}
      <TouchableOpacity
        style={{
          width: 200,
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'coral',
          borderRadius: 5
        }}
        onPress={() => dispatch({ type: Actions.COUNTER_DECREMENT })}
      >
        <Text style={{ fontSize: 28, color: 'white' }}>-</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
