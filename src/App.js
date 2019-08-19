import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isConnected: false,
      numbers: []
    };

    this.initSocket();
  }

  initSocket() {
    const url = 'ws://0.tcp.ngrok.io:16210/ws';

    this.ws = new WebSocket(url);

    this.ws.onopen = () => {
      // connection opened
      this.setState({ isConnected: true, isOpen: true });

      // this.ws.send('something'); // send a message
    };

    this.ws.onmessage = e => {
      // a message was received
      let newData = [...this.state.numbers];
      newData.push({
        key: `${Date.now()}`,
        value: e.data
      });

      this.setState({ numbers: newData });
    };

    this.ws.onerror = e => {
      // an error occurred
      console.warn(`error: ${e.message}`);
    };

    this.ws.onclose = e => {
      // connection closed
      this.setState({ isOpen: false });

      console.warn(`closing: code: ${e.code} - reason: ${e.reason}`);
    };
  }

  render() {
    if (this.state.isConnected) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F8F8FF',
            padding: 10
          }}
        >
          <FlatList
            ref={flatList => {
              this.flatList = flatList;
            }}
            style={{
              flex: 1,
              alignSelf: 'stretch',
              borderWidth: 2,
              borderRadius: 10
            }}
            data={this.state.numbers}
            renderItem={({ item }) => (
              <View
                style={{
                  height: 85,
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'stretch',
                  borderRadius: 10,
                  backgroundColor: 'coral',
                  margin: 10
                }}
              >
                <Text
                  style={{
                    fontSize: 28,
                    color: 'white'
                  }}
                >
                  {item.value}
                </Text>
              </View>
            )}
            onContentSizeChange={() => this.flatList.scrollToEnd()}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F8F8FF'
          }}
        >
          <ActivityIndicator size='large' color='coral' />
        </View>
      );
    }
  }
}

export default App;
