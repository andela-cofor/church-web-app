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

var stripe = require('stripe-client')('pk_test_vIAvHCv83xRtGsH6eLG2C0HL');

// var information = {
//     card: {
//         number: '4242424242424242',
//         exp_month: '02',
//         exp_year: '21',
//         cvc: '999',
//         name: 'Billy Joe'
//     }
// }

export default class GivePage extends Component {


    state = {
        card: {
            number: '4242424242424242',
            exp_month: '02',
            exp_year: '21',
            cvc: '999',
            name: 'Billy Joe'
        }
    };

    componentDidMount () {
        this.onPayment().then((response) => {
            console.log('called', response)
        })
    }

    async onPayment() {
        var card = await stripe.createToken(this.state.card);
        var token = card.id;
        // send token to backend for processing
        console.log(token, 'yup')
    }

    render() {
        const { container, viewStyle, textStyle, leftImageStyle } =  styles;
        return (
            <View style={container}>
                <Text>Give Page</Text>
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

export { GivePage };