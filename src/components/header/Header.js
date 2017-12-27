// react libraries
import React from 'react';

// react-native libraries
import { StyleSheet, View, Text } from 'react-native';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { headerText } = this.props
        const { container, textStyle } = styles;
        return (
            <View style={container}>
                <Text style={textStyle}>{headerText}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F8F8F8',
        height: 60,
        paddingTop: 35,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    }
});