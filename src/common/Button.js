// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Button = ({ onPress, text }) => {
    const { buttonStyle, buttonTextStyle } = styles;
    return (
        <View>
            <TouchableOpacity
                style={buttonStyle}>
                <Text
                    onPress={onPress}
                    style={buttonTextStyle}
                > {text}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        height: 30,
        width: 100,
        borderRadius: 25

    },
    buttonTextStyle: {
        color: '#45215a',
    }
});

export { Button };