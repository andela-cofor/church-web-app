// react library
import React from 'react';

// third-party react library
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// components

export default class App extends React.Component {
  render() {
    return (
        <ImageBackground
          source={require('./assets/NOfor.jpg')}
          style={styles.container}>
          <Text style={styles.welcome}>
              Welcome to React Native!
          </Text>
        </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.5
  },
});


{/*<View style={styles.container}>*/}
    {/*<Text>Open up App.js to start working on your app!</Text>*/}
{/*</View>*/}