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
import { Button, Card, CardSection, Input, Spinner } from "../common";


export default class FormPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false
        };
    }

    componentWillMount() {
        firebase.initializeApp({
            apiKey: "AIzaSyDgCnqFB-GhhhQpeNpeVNzv3hI4qH_0aO0",
            authDomain: "jcm-chrch-app.firebaseapp.com",
            databaseURL: "https://jcm-chrch-app.firebaseio.com",
            projectId: "jcm-chrch-app",
            storageBucket: "jcm-chrch-app.appspot.com",
            messagingSenderId: "586498142771"
        });
    }

    signInWIthGoogleAccount() {

        // this.setState({ error: '', loading: true });

        console.log(this.state, 'what entered');

        // let provider = new firebase.auth.GoogleAuthProvider();

        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((response) => {
                console.log(response)
                this.setState({ error: '', loading: false });
            })
            .catch((error) => {
                console.log(error)
                this.onLoginFail(error.message)
                // firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
                //     .then((success) => {
                //         console.log(success)
                //         this.setState({ error: '', loading: false });
                //     })
                //     .catch((error) => {
                //         console.log(error)
                //         this.onLoginFail(error.message)
                //     });
            });
    }

    onLoginFail = (erroMessage) => {
        this.setState({ error: erroMessage, loading: false });
    }

    LoginInWIthGoogleAccount() {
        const { navigate } = this.props.navigation;
        navigate('BlogPage');
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
                    source={require('../../assets/AppLogo2.png')}
                    style={{ height: '40%', width: '80%', marginTop: 100}}
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
                <View>
                    <TouchableOpacity
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            backgroundColor: '#ffffff',
                            alignItems: 'center',
                            height: 30,
                            width: 100,
                            borderRadius: 25
                        }}>
                        {/*<Image*/}
                        {/*source={require('../../assets/googleLogo.png')}*/}
                        {/*style={{ height: 20, width: 20, marginLeft: 17}}*/}
                        {/*/>*/}
                        <Text
                            onPress={() =>  this.signInWIthGoogleAccount()}
                            style={{ color: '#45215a'}}
                        >Sign Up
                        </Text>
                    </TouchableOpacity>
                    {/*<TouchableOpacity>*/}
                    {/*<Text onPress={() =>  this.LoginInWIthGoogleAccount()} style={{ marginLeft: 60, color: 'white' }}>Log in</Text>*/}
                    {/*</TouchableOpacity>*/}
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
        marginBottom: 10
    }
});

export { FormPage };