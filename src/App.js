import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';

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
        <TouchableOpacity
          style={{
            width: 300,
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'coral',
            elevation: 5
          }}
          onPress={() => {
            // create a path you want to write to
            // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
            // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable
            const path = RNFS.ExternalDirectoryPath + '/test.txt';

            // write the file
            RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
              .then(success => {
                console.warn('FILE WRITTEN!');
              })
              .catch(err => {
                console.warn(err.message);
              });
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: 'white'
            }}
          >
            Create a file!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
