// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import Youtube from 'react-native-youtube';

export default class YoutubeViewer extends Component {

    render() {
        const APIKey = 'AIzaSyA4Gqfw_CIPgI5DkEkwy8rzEWM5DBxJi-I'
        const { container, viewStyle, textStyle, leftImageStyle } =  styles;
        return (
            <View style={styles.container}>
                <Text>{this.props.navigation.state.params.youtubeId}</Text>
                <Youtube
                    ref={(component) => { this._youTubePlayer = component }}
                    videoId={this.props.navigation.state.params.youtubeId}
                    play={true}
                    fullscreen={true}
                    loop={false}z
                    apiKey={APIKey}
                    onReady={e => this.setState({ isReady: true })}
                    onChangeState={e => this.setState({ status: e.state })}
                    onChangeQuality={e => this.setState({ quality: e.quality })}
                    onError={e => this.setState({ error: e.error })}
                    onProgress={e => this.setState({ currentTime: e.currentTime, duration: e.duration })}

                    style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black', marginVertical: 10}}
                >
                </Youtube>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    text: {
        fontSize: 40,
    },
});

export { YoutubeViewer };
