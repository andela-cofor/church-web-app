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
import Modal from 'react-native-simple-modal';



// components

export default class LandingPage extends React.Component {

    state = { showModal: false, modalHeadText: '', ModalBodyText: '' };

    /**
     *
     *
     */
    setModaltext = () => {
        this.setState({ modaHeadText: 'Address' })
    }

    /**
     * appNavigation
     *
     * @param {string} page - Page to navigate
     */
    appNavigation = (page) => {
        const { navigate } = this.props.navigation;
        if(page === 'message') {
            navigate('Fetch', {
                channelID: 'UCjPsrfQC2hdWV7Gx18VzNRg',
                numOfVideos: '20'
            })
        }

        if(page === 'events') {
            navigate('Fetch', {
                channelID: 'UCpCrgB9N3nF4AYELN63bbdQ',
                numOfVideos: '20'
            })
        }

        if(page === 'blog') {
            navigate('BlogPage');
        }

        if(page === 'resource') {
            navigate('ResourcesPage');
        }

        if(page === 'devotions') {
            navigate('DevotionsPage');
        }

        if(page === 'live') {
            navigate('Fetch', {
                channelID: 'UCpCrgB9N3nF4AYELN63bbdQ',
                numOfVideos: '1'
            })
        }

        if(page === 'photos') {
            navigate('PhotosPage');
        }

        if(page === 'music') {
            navigate('Fetch', {
                channelID: 'UCbertc-gMbkkHuSmg0qwnxw',
                numOfVideos: '20'
            })
        }

        if(page === 'share') {
            navigate('SharePage');
        }

        if(page === 'give') {
            navigate('GivePage');
        }

        if(page === 'location') {
           navigate('LocationPage');
        }

        if(page === 'call') {
            navigate('CallPage');
        }
    }

    render() {
        const {
            container,
            viewStyle,
            textStyle,
            leftImageStyle,
            modalStyle,
            confirmationTextStyle,
            modalBottomViewContainer,
            modalBodyText
        } =  styles;
        return (
            <ImageBackground
                source={require('../../assets/lion-3040797_1280.jpg')}
                style={container}>
                <Modal
                    offset={this.state.offset}
                    open={this.state.showModal}
                    modalDidClose={() => this.setState({ showModal: false })}
                    style={modalStyle}
                >
                    <View style={{ height: 168 }}>
                        <Text
                            style={confirmationTextStyle}
                        >
                            { this.state.modalHeadText }
                        </Text>
                        <View style={modalBottomViewContainer} >
                            <Text
                                style={modalBodyText}
                                onPress={() => console.log(this.state.password)}
                            >
                                { this.state.ModalBodyText }
                            </Text>
                        </View>
                    </View>
                </Modal>
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
                            <Image style={{ marginRight: 30, zIndex: -1 }} source={require('../../assets/bible.png')} />
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
                        <TouchableOpacity onPress={() =>  this.appNavigation('live')}>
                            <Image style={{ marginLeft: 50 }} source={require('../../assets/confessions.png')} />
                            <Text style={{ marginLeft: 55, color: 'white' }}>Live</Text>
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
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({
                                    showModal: true,
                                    modalHeadText: 'Address',
                                    ModalBodyText: 'No 32 osho-drive at 1st benue bus stop, Olodi Apapa lagos Nigeria'
                                })}
                        >
                            <Image source={require('../../assets/location.png')} />
                            <Text style={{ color: 'white' }}>Location</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity
                            onPress={() =>
                                this.setState({
                                    showModal: true,
                                    modalHeadText: 'Phone Number:',
                                    ModalBodyText: '+2347030296746'
                                })}
                        >
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
        opacity: 0.8
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
    },
    modalStyle: {
        alignItems: 'center',
    },
    confirmationTextStyle: {
        fontSize: 20,
        marginTop: 10,
        paddingLeft: 15,
        color: '#616161',
        fontWeight: '700'
    },
    modalBottomViewContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    modalBodyText: {
        paddingTop: 10,
        paddingLeft: 15,
        textAlign: 'center',
        fontFamily: 'AvenirNextCondensed-Medium',
        color: '#4a4a4a',
    }
});

export { LandingPage };
