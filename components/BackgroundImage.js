import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native';

class BackgroundImage extends Component {

    render() {
        return (
            <Image source={require('../assets/NOfor.jpg')}
                   style={styles.backgroundImage}>

                {this.props.children}

            </Image>
        )
    }
}

const styles = StyleSheet.create({
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

export default BackgroundImage;