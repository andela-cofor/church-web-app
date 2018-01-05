// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ImageBackground, Platform
} from 'react-native';
import * as firebase from "firebase";
import { Header } from 'react-native-elements';
import { Constants, Location, Permissions } from 'expo';

// components
import { MapComponent } from '../common/map';


export default class MoovHomepage extends Component {

    state = {
        location: null,
        errorMessage: null,
        latitude: null,
        longitude: null,
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            this.setState({
                errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({
                errorMessage: 'Permission to access location was denied',
            });
        }

        let location = await Location.getCurrentPositionAsync({});

        this.setState({
            location: {coords: { latitude: 37.78825, longitude: -122.4324}},
            latitude: location['coords'].latitude,
            longitude: location['coords'].longitude
        });
    };


    signOut = () => {
        firebase.auth().signOut()
            .then((response) => {
                // Sign-out successful.
                console.log(response)
            })
            .catch((error) => {
                // An error happened.
                console.log(error)
            });

        const { navigate } = this.props.navigation;

        navigate('LoginPage');
    }

    render() {
        let text = 'Waiting..';
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        if (this.state.location === null) {
            console.log('no location')
        }

        return (
            <View>
                <View>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'MOOV', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        backgroundColor='#45215a'
                    />
                    {
                        (this.state.location === null) ? <Text></Text>
                            : <MapComponent
                                latitude={this.state.latitude}
                                longitude={this.state.longitude}
                            />
                    }
                </View>
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
});

export { MoovHomepage };