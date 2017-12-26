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

export default class DevotionsPage extends Component {

    render() {
        const { container, viewStyle, textStyle, leftImageStyle } =  styles;
        return (
            <View style={container}>
                <Text>Devotions Page</Text>
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

export { DevotionsPage };