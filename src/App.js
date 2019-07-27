import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

class App extends Component {
  render() {
    const page1 = PDFPage.create()
      .setMediaBox(200, 200)
      .drawText('123', {
        x: 10,
        y: 10,
        color: '#007386'
      })
      .drawRectangle({
        x: 25,
        y: 25,
        width: 150,
        height: 150,
        color: '#FF99CC'
      })
      .drawRectangle({
        x: 75,
        y: 75,
        width: 50,
        height: 50,
        color: '#99FFCC'
      });

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
          onPress={async () => {
            const pathToSave = '/sdcard/Android/data/com.school/files';
            const name = 'sample2';
            const pdfPath = `${pathToSave}/${name}.pdf`;
            PDFDocument.create(pdfPath)
              .addPages(page1)
              .write() // Returns a promise that resolves with the PDF's path
              .then(path => {
                console.warn('PDF created at: ' + path);
                // Do stuff with your shiny new PDF!
              });
          }}
        >
          <Text
            style={{
              fontSize: 28,
              color: 'white'
            }}
          >
            Create a PDF!
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
