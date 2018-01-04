// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ImageBackground,
    TextInput,
    ActivityIndicator
} from 'react-native';
import * as firebase from "firebase";

// component
import { Button } from "../common";


export default class SignInPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }


    signInWIthGoogleAccount = () => {
        const { navigate } = this.props.navigation;

        this.setState({ error: '', loading: true });
        // No user is signed in.
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                console.log(response)
                this.setState({ error: '', loading: false });
                // navigate('MoovHomepage');
            })
            .catch((error) => {
                console.log(error)
                this.onLoginFail(error.message)
            });
    }

    resetUserPassword = () => {
        this.setState({ error: '', loading: true });

        var auth = firebase.auth();
        var emailAddress = this.state.email;

        auth.sendPasswordResetEmail(emailAddress).then(() => {
            // Email sent.
            console.log('verification sent');
            this.setState({ error: 'Reset link has been sent to your email', loading: false });

        }).catch((error) => {
            // An error happened.
            console.log(error)
            console.log(error.message, 'verification failed')
            this.setState({ error: error.message, loading: false });

        });
    }

    onLoginFail = (erroMessage) => {
        this.setState({ error: erroMessage, loading: false });
    }

    render() {
        const {
            container,
            inputContainerStyle,
            inputLabelStyle,
            inputStyle,
            activityIndicator,
            errorTextStyle
        } =  styles;

        if (this.state.loading) {
            return (
                <View style={{flex: 1}}>
                    <ActivityIndicator
                        color = '#45215a'
                        size = "large"
                        style={activityIndicator}
                    />
                </View>
            );
        }

        return (
            <View style={container}>
                <Image
                    source={require('../../assets/AppLogo.png')}
                    style={{ height: '20%', width: '80%', marginTop: 150, marginBottom: 100 }}
                />
                <View>
                    <View style={inputContainerStyle}>
                        <Text style={inputLabelStyle}>Email</Text>
                        <TextInput
                            style={inputStyle}
                            placeholder='user@mail.com'
                            value={this.state.email}
                            onChangeText={(email) => this.setState({email})}
                        />
                    </View>
                    <View style={inputContainerStyle}>
                        <Text style={inputLabelStyle}>Password</Text>
                        <TextInput
                            secureTextEntry
                            style={inputStyle}
                            placeholder='password'
                            value={this.state.password}
                            onChangeText={(password) => this.setState({password})}
                        />
                    </View>
                </View>
                <Text style={errorTextStyle}>
                    {this.state.error}
                </Text>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{ justifyContent: 'center' }}>
                        <Button onPress={() =>  this.signInWIthGoogleAccount()} text='Log In'/>
                        <Text onPress={() => this.resetUserPassword()} style={{ paddingTop: 6, justifyContent: 'center', fontSize: 13 }}>Forgot Password</Text>
                    </View>
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
        backgroundColor:'#45215a',
        alignItems: 'center',
    },
    backgroundImage: {
        flex: 1,
        width: null,
        height: null,
        resizeMode: 'cover'
    },
    logoText: {
        color: '#fed554'
    },

    text: {
        textAlign: 'center',
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0)',
        fontSize: 32
    },
    inputContainerStyle: {
        height: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        padding: 5,
        position: 'relative',
        marginBottom: 10
    },
    inputLabelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    inputStyle: {
        color: 'black',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2,
        height: 40
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    errorTextStyle: {
        fontSize: 15,
        alignSelf: 'center',
        color: 'red',
    }
});

export { SignInPage };