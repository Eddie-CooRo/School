import React, { Component } from 'react';
import { View, ActivityIndicator } from 'react-native';

class Splash extends Component {
  constructor() {
    super();

    this.loadToken();
  }

  loadToken() {
    let token = 'abcd';

    setTimeout(() => {
      this.props.navigation.navigate(token ? '_RootStack' : '_AuthStack');
    }, 100);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='red' />
      </View>
    );
  }
}

export { Splash };
