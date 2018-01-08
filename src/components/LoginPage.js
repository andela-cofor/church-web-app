// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    Text,
    Image,
    View,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import * as firebase from "firebase";

// component
import { SignInPage } from "./SignInPage";


export default class LoginPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: '',
            loading: false,
            form: ''
        };
    }

    componentDidMount() {

        if(!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: "AIzaSyDgCnqFB-GhhhQpeNpeVNzv3hI4qH_0aO0",
                authDomain: "jcm-chrch-app.firebaseapp.com",
                databaseURL: "https://jcm-chrch-app.firebaseio.com",
                projectId: "jcm-chrch-app",
                storageBucket: "jcm-chrch-app.appspot.com",
                messagingSenderId: "586498142771"
            });

        }
    }

    onLoginFail = (erroMessage) => {
        this.setState({ error: erroMessage, loading: false });
    }

    LoginInWIthGoogleAccount() {
        const { navigate } = this.props.navigation;
        navigate('BlogPage');
    }

    appNavigation = (page) => {
        this.setState({ loading: true });

        if (page === 'signup') {
            const { navigate } = this.props.navigation;

            navigate('SignUpPage');

            // firebase.auth().onAuthStateChanged((user) => {
            //     if (user) {
            //         console.log('logged in')
            //         this.setState({ loading: false });
            //         // User is signed in.
            //         navigate('MoovHomepage');
            //     } else {
            //         this.setState({ loading: false });
            //         console.log('not logged in')
            //         navigate('SignUpPage');
            //     }
            // });
        }

        if (page === 'login') {
            const { navigate } = this.props.navigation;

            navigate('MoovHomepage');

            // firebase.auth().onAuthStateChanged((user) => {
            //     if (user) {
            //         console.log('logged in')
            //         this.setState({ loading: false });
            //         // User is signed in.
            //         navigate('MoovHomepage');
            //     } else {
            //         this.setState({ loading: false });
            //         console.log('not logged in')
            //         navigate('SignInPage');
            //     }
            // });
        }
    }

    render() {
        const {
            container,
            activityIndicator,
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
                    style={{ height: '50%', width: '80%', marginTop: 150}}
                />
                <View style={{
                    flexDirection: 'row',
                }}>
                    <View style={{ marginRight: 60 }}>
                        <TouchableOpacity onPress={() =>  this.appNavigation('signup')}>
                            <Text style={{ color: 'white' }}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginLeft: 60 }}>
                        <TouchableOpacity onPress={() =>  this.appNavigation('login')}>
                            <Text style={{ color: 'white' }}>Log In</Text>
                        </TouchableOpacity>
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
        marginBottom: 10
    }
});

export { LoginPage };