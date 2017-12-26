// react library
import React from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Image,
    TouchableOpacity
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import {DevotionsPage} from "./index";


// components

export default class LandingPage extends React.Component {

    /**
     * appNavigation
     *
     * @param {string} page - Page to navigate
     */
    appNavigation = (page) => {
        const { navigate } = this.props.navigation;
        if(page === 'message') {
            console.log(navigate('MessagesPage'));
        }

        if(page === 'events') {
            console.log(navigate('EventsPage'));
        }

        if(page === 'blog') {
            console.log(navigate('BlogPage'));
        }

        if(page === 'resource') {
            console.log(navigate('ResourcesPage'));
        }

        if(page === 'devotions') {
            console.log(navigate('DevotionsPage'));
        }

        if(page === 'confessions') {
            console.log(navigate('ConfessionsPage'));
        }

        if(page === 'photos') {
            console.log(navigate('PhotosPage'));
        }

        if(page === 'music') {
            console.log(navigate('MusicPage'));
        }

        if(page === 'share') {
            console.log(navigate('SharePage'));
        }

        if(page === 'give') {
            console.log(navigate('GivePage'));
        }

        if(page === 'location') {
            console.log(navigate('LocationPage'));
        }

        if(page === 'call') {
            console.log(navigate('CallPage'));
        }
    }

    render() {
        const { container, viewStyle, textStyle, leftImageStyle } =  styles;
        return (
            <ImageBackground
                source={require('../../assets/purple.jpg')}
                style={container}>
                <View>
                    <TouchableOpacity>
                        <Image source={require('../../assets/ic_event_white_24dp_2x.png')}/>
                        <Text style={{ marginRight: 1, color: 'white' }}>About Us</Text>
                    </TouchableOpacity>
                </View>
                <View style={viewStyle}>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('events')}>
                            <Image style={{ marginRight: 70 }} source={require('../../assets/ic_event_white_24dp_2x.png')} />
                            <Text style={{ marginRight: 40, color: 'white' }}>Events</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('blog')}>
                            <Image source={require('../../assets/blog.png')} />
                            <Text style={textStyle}>Blog</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('resource')}>
                            <Image style={{ marginLeft: 70 }} source={require('../../assets/resources.png')} />
                            <Text style={{ marginLeft: 60, color: 'white' }}>Resources</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={viewStyle}>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('message')}>
                            <Image style={{ marginRight: 30 }} source={require('../../assets/bible.png')} />
                            <Text style={{  color: 'white' }}>Messages</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('devotions')}>
                            <Image style={{ marginLeft: 50 }} source={require('../../assets/devotionals.png')} />
                            <Text style={{ marginLeft: 40, color: 'white' }}>Devotionals</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('confessions')}>
                            <Image style={{ marginLeft: 65 }} source={require('../../assets/confessions.png')} />
                            <Text style={{ marginLeft: 50, color: 'white' }}>Confession</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={viewStyle}>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('photos')}>
                            <Image style={{ marginRight: 80 }} source={require('../../assets/photos.png')} />
                            <Text style={{ color: 'white' }}>Photos</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('music')}>
                            <Image style={{ marginRight: 70 }} source={require('../../assets/music.png')} />
                            <Text style={{ marginLeft: 5, color: 'white' }}>Music</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('share')}>
                            <Image style={{ marginRight: 10 }} source={require('../../assets/share.png')} />
                            <Text style={{ marginRight: 20, color: 'white' }}>Share</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={viewStyle}>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('give')}>
                            <Image style={leftImageStyle} source={require('../../assets/give.png')} />
                            <Text style={{ marginLeft: 10, color: 'white' }}>Give</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('location')}>
                            <Image source={require('../../assets/location.png')} />
                            <Text style={{ color: 'white' }}>Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() =>  this.appNavigation('call')}>
                            <Image style={{ marginLeft: 70 }} source={require('../../assets/call.png')} />
                            <Text style={{ marginLeft: 75, color: 'white' }}>Call</Text>
                        </TouchableOpacity>
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

export { LandingPage };