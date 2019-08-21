import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from '../Actions/Types';

class LoginPage extends Component {
  render() {
    const { dispatch, firstName, lastName } = this.props;

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View
          style={{
            width: 300,
            height: 75,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            borderWidth: 2,
            marginBottom: 20
          }}
        >
          <Text>{`${firstName} - ${lastName}`}</Text>
        </View>

        <Button
          title='Change it!'
          onPress={() =>
            dispatch({
              type: Actions.CHANGE_FIRSTNAME,
              payload: { firstName: 'Mohamad', lastName: 'Khajavi' }
            })
          }
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    firstName: state.auth.firstName,
    lastName: state.auth.lastName
  };
};

export const Login = connect(mapStateToProps)(LoginPage);
