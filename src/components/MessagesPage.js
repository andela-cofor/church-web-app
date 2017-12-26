// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator
} from 'react-native';

export default class MessagesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            date: []
        }
    }

    componentDidMount() {
        const APIKey = 'AIzaSyA4Gqfw_CIPgI5DkEkwy8rzEWM5DBxJi-I'
        const ChannelID = 'UC3XTzVzaHQEd30rQbuvCtTQ'
        return fetch(`https://www.googleapis.com/youtube/v3/search?key=${APIKey}
        &channelId=${ChannelID}&part=snippet,id&order=date&maxResults=20`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                }, function() {
                    // do something with new state
                });
                console.log(responseJson, 'Here!!!')
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { container, activityIndicator } =  styles;

        if (this.state.isLoading) {
            return (
                <View style={{flex: 1}}>
                    <ActivityIndicator
                        color = 'blue'
                        size = "large"
                        style={activityIndicator}
                    />
                </View>
            );
        }

        return (
            <View style={container}>
                <Text>Up with pack I roll</Text>
            </View>
        )
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
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    }
});

export { MessagesPage };