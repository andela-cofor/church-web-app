// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    ScrollView,
    TouchableHighlight,
    Image,
    ImageBackground
} from 'react-native';

// component
import Header from "./header/Header";

export default class MessagesPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            date: []
        }
    }

    static navigationOptions={
        title: 'Home',
        headerStyle: {
            backgroundColor: '#212121',
        },
        headerTitleStyle: {
            color: '#fff'
        }
    }


    componentDidMount() {
        const APIKey = 'AIzaSyA4Gqfw_CIPgI5DkEkwy8rzEWM5DBxJi-I'
        const ChannelID = 'UCjPsrfQC2hdWV7Gx18VzNRg'
        return fetch(`https://www.googleapis.com/youtube/v3/search?key=${APIKey}
        &channelId=${ChannelID}&part=snippet,id&order=date&maxResults=20`)
            .then((response) => response.json())
            .then((responseJson) => {
                let videoId = [];
                console.log(responseJson)
                responseJson.items.forEach((item) => {
                    videoId.push(item)
                })
                console.log(responseJson)

                this.setState({
                    isLoading: false,
                    data: videoId
                }, function() {
                    // do something with new state
                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    render() {
        const { navigate } = this.props.navigation;
        const { container, activityIndicator, button, buttonText } =  styles;

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
            <View>
                <Header headerText="All Videos" />
                <ScrollView>
                    <View style={container}>
                        <ImageBackground style={{ width: undefined, height: undefined}} source={require('../../assets/purple.jpg')}>
                            {this.state.data.map((item, i) =>
                                <TouchableHighlight key={item.id.videoId} onPress={() => navigate('VideoPlayer', {
                                    youtubeId: item.id.videoId
                                })}>
                                    <View style={button}>
                                        <Image
                                            source={{url: item.snippet.thumbnails.medium.url}}
                                            style={{ height: 180, width: 320}}>
                                        </Image>
                                        <Text style={buttonText}>{item.snippet.title}</Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                        </ImageBackground>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});

export { MessagesPage };