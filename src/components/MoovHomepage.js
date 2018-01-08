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
import MapView from 'react-native-maps';

// components
import { MapComponent } from '../common/map';
import GooglePlacesAutocomplete from './googleSearch/GooglePlacesInput'
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDAmhVVwfEHfpAuLLRiDJYu58sspa36KGg';

export default class MoovHomepage extends Component {

    state = {
        location: null,
        errorMessage: null,
        latitude: null,
        longitude: null,
        destinationLongitude: null,
        destinationLatitude: null,
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
        const { cabIcon } =  styles;
        let text = 'Waiting..';
        let cords;
        const destination = {latitude: 37.771707, longitude: -122.4053769};
        let origin;

        // const destination = {latitude: 37.771707, longitude: -122.4053769};


        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            text = JSON.stringify(this.state.location);
        }

        if (this.state.location === null) {
            console.log('no location')
        }

        if(this.state.location !== null) {
            cords = { latitude: this.state.latitude, longitude: this.state.longitude}
            origin = { latitude: this.state.latitude, longitude: this.state.longitude}
        }

        // if(this.state.destinationLatitude !== null) {
        //     destination = {
        //         latitude: this.state.destinationLatitude,
        //         longitude: this.state.destinationLongitude
        //     }
        // }

        return (
            <View>
                <View>
                    <Header
                        leftComponent={{ icon: 'menu', color: '#fff' }}
                        centerComponent={{ text: 'MOOV', style: { color: '#fff' } }}
                        rightComponent={{ icon: 'home', color: '#fff' }}
                        backgroundColor='#45215a'
                    />
                    {/*{*/}
                        {/*(this.state.location === null) ? <Text></Text>*/}
                            {/*: <MapComponent*/}
                                {/*latitude={this.state.latitude}*/}
                                {/*longitude={this.state.longitude}*/}
                            {/*/>*/}
                    {/*}*/}
                    {
                        (this.state.location === null) ? <Text></Text>
                            : <MapView style={{ height: 700, alignSelf: 'stretch', }}
                                       initialRegion={{
                                           latitude: this.state.latitude,
                                           longitude: this.state.longitude,
                                           latitudeDelta: 0.0922,
                                           longitudeDelta: 0.0421,
                                       }}
                            >
                                <GooglePlacesAutocomplete
                                    placeholder='Enter Location'
                                    minLength={2}
                                    autoFocus={false}
                                    returnKeyType={'default'}
                                    fetchDetails={true}
                                    styles={{
                                        textInputContainer: {
                                            backgroundColor: 'rgba(0,0,0,0)',
                                            borderTopWidth: 0,
                                            borderBottomWidth:0
                                        },
                                        textInput: {
                                            marginLeft: 0,
                                            marginRight: 0,
                                            height: 38,
                                            color: '#5d5d5d',
                                            fontSize: 16
                                        },
                                        predefinedPlacesDescription: {
                                            color: '#1faadb'
                                        },
                                    }}
                                    currentLocation={false}
                                />
                                <MapView.Marker
                                    coordinate={cords}
                                    title="My Loaction"
                                    description="Some description"
                                />
                                <MapViewDirections
                                    origin={origin}
                                    destination={destination}
                                    apikey={GOOGLE_MAPS_APIKEY}
                                    strokeWidth={3}
                                    strokeColor="blue"
                                    // mode="driving"
                                />
                                <MapView.Marker
                                    anchor={{ x: 0.5, y: 0.5 }}
                                    coordinate={cords}
                                    title='Mr A Car'
                                >
                                    <View>
                                        <Image style={cabIcon} source={require('../../assets/car.png')}/>
                                    </View>
                                </MapView.Marker>
                            </MapView>
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
    cabIcon: {
        height: 40,
        width: 40,

    }
});

export { MoovHomepage };