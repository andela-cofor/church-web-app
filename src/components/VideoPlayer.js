// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    View,
    WebView,
    Platform
} from 'react-native';
import Header from "./header/Header";


export default class VideoPlayer extends Component {

    render() {
        const { container, viewStyle, textStyle, leftImageStyle } =  styles;
        return (
            <View style={styles.container}>
                <Header />
                <Text>{this.props.navigation.state.params.youtubeId}</Text>
                <WebView
                    style={ styles.WebViewContainer }
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{uri: `https://www.youtube.com/embed/${this.props.navigation.state.params.youtubeId}`}}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        height: '50%'
    },
    WebViewContainer: {

        marginTop: (Platform.OS == 'ios') ? 20 : 0,

    },
    text: {
        fontSize: 40,
    },
});

export { VideoPlayer };
