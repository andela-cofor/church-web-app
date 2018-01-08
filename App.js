// react library
import React from 'react';

import { StackNavigator } from 'react-navigation';

// components
import {
    LandingPage,
    BlogPage,
    ResourcesPage,
    DevotionsPage,
    PhotosPage,
    SharePage,
    GivePage,
    CallPage,
    VideoPlayer,
    Fetch,
    LoginPage,
    SignInPage,
    SignUpPage,
    MoovHomepage
} from "./src/components";

// AIzaSyA4Gqfw_CIPgI5DkEkwy8rzEWM5DBxJi-I

export default MainStack = StackNavigator({
    LoginPage: { screen: LoginPage },
    SignInPage: { screen: SignInPage },
    LandingPage: { screen: LandingPage },
    BlogPage: { screen: BlogPage },
    ResourcesPage: { screen: ResourcesPage },
    DevotionsPage: { screen: DevotionsPage },
    PhotosPage: { screen: PhotosPage },
    SharePage: { screen: SharePage },
    GivePage: { screen: GivePage },
    VideoPlayer: { screen: VideoPlayer },
    Fetch: { screen: Fetch },
    SignUpPage: {screen: SignUpPage },
    MoovHomepage: { screen: MoovHomepage },

}, {
    navigationOptions: {
        header: null
    }
});
