// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import * as firebase from "firebase";

export default class MoovHomepage extends Component {


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
        const { container, viewStyle, textStyle, leftImageStyle } =  styles;
        return (
            <View style={container}>
                <Text onPress={() => this.signOut()}>Welcome to Moove App</Text>
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
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    }
});

export { MoovHomepage };