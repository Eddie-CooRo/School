import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TextInput,
  TouchableOpacity
} from 'react-native';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isOpen: false,
      isConnected: false,
      numbers: [],
      message: ''
    };

    this.initSocket();
  }

  initSocket() {
    const url = 'ws://0.tcp.ngrok.io:12050/ws';

    this.ws = new WebSocket(url);

    this.ws.onopen = () => {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = undefined;
      }
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

      this.timer = setInterval(() => {
        this.ws = new WebSocket(url);
      }, 2000);

      console.warn(`closing: code: ${e.code} - reason: ${e.reason}`);
    };
  }

  componentWillUnmount() {
    this.ws.close();
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
          <View
            style={{
              flex: 8,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderWidth: 2,
              borderRadius: 10
            }}
          >
            <FlatList
              ref={flatList => {
                this.flatList = flatList;
              }}
              style={{
                flex: 1,
                alignSelf: 'stretch'
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

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'stretch',
              borderWidth: 2,
              borderRadius: 10,
              marginTop: 10
            }}
          >
            <TextInput
              style={{
                flex: 8,
                alignSelf: 'stretch',
                fontSize: 20,
                paddingHorizontal: 10
              }}
              value={this.state.message}
              onChangeText={message => this.setState({ message })}
              onSubmitEditing={() => {
                this.ws.send(this.state.message);
                this.setState({ message: '' });
              }}
              placeholder='your fucking message'
            />

            <TouchableOpacity
              style={{
                flex: 2,
                justifyContent: 'center',
                alignItems: 'center',
                alignSelf: 'stretch',
                backgroundColor: 'coral'
              }}
              onPress={() => {
                this.ws.send(this.state.message);
                this.setState({ message: '' });
              }}
            >
              <Text style={{ fontSize: 26 }}>⬆️</Text>
            </TouchableOpacity>
          </View>
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
