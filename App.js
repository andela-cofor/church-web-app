// react library
import React from 'react';

// third-party react library
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

// components

export default class App extends React.Component {
  render() {
      const { container, viewStyle, textStyle, leftImageStyle } =  styles;
    return (
        <ImageBackground
          source={require('./assets/purple.jpg')}
          style={container}>
            <View>
                <Image source={require('./assets/ic_event_white_24dp_2x.png')}/>
                <Text style={{ marginRight: 1, color: 'white' }}>About Us</Text>
            </View>
            <View style={viewStyle}>
                <View>
                    <Image style={{ marginRight: 70 }} source={require('./assets/ic_event_white_24dp_2x.png')} />
                    <Text style={{ marginRight: 40, color: 'white' }}>Events</Text>
                </View>
                <View>
                    <Image source={require('./assets/blog.png')} />
                    <Text style={textStyle}>Blog</Text>
                </View>
                <View>
                    <Image style={{ marginLeft: 70 }} source={require('./assets/resources.png')} />
                    <Text style={{ marginLeft: 60, color: 'white' }}>Resources</Text>
                </View>
            </View>
            <View style={viewStyle}>
                <View>
                    <Image style={{ marginRight: 70 }} source={require('./assets/bible.png')} />
                    <Text style={{ marginLeft: 10, color: 'white' }}>Bible</Text>
                </View>
                <View>
                    <Image style={{ marginLeft: 10 }} source={require('./assets/devotionals.png')} />
                    <Text style={{ marginLeft: 0, color: 'white' }}>Devotionals</Text>
                </View>
                <View>
                    <Image style={{ marginLeft: 50 }} source={require('./assets/confessions.png')} />
                    <Text style={{ marginLeft: 40, color: 'white' }}>Confession</Text>
                </View>
            </View>
            <View style={viewStyle}>
                <View>
                    <Image style={{ marginRight: 80 }} source={require('./assets/photos.png')} />
                    <Text style={{ color: 'white' }}>Photos</Text>
                </View>
                <View>
                    <Image style={{ marginRight: 70 }} source={require('./assets/music.png')} />
                    <Text style={{ marginLeft: 5, color: 'white' }}>Music</Text>
                </View>
                <View>
                    <Image style={{ marginRight: 10 }} source={require('./assets/share.png')} />
                    <Text style={{ marginRight: 20, color: 'white' }}>Share</Text>
                </View>
            </View>
            <View style={viewStyle}>
                <View>
                    <Image style={leftImageStyle} source={require('./assets/give.png')} />
                    <Text style={{ marginLeft: 10, color: 'white' }}>Give</Text>
                </View>
                <View>
                    <Image source={require('./assets/location.png')} />
                    <Text style={{ color: 'white' }}>Location</Text>
                </View>
                <View>
                    <Image style={{ marginLeft: 70 }} source={require('./assets/call.png')} />
                    <Text style={{ marginLeft: 75, color: 'white' }}>Call</Text>
                </View>
            </View>
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
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  viewStyle: {
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-around',
  },
  leftImageStyle: {
      marginRight: 70
  },
  textStyle: {
      textAlign: 'center',
      color: 'white'
  }
});


{/*<View style={styles.container}>*/}
    {/*<Text>Open up App.js to start working on your app!</Text>*/}
{/*</View>*/}