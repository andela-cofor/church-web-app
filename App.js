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
    LocationPage,
    CallPage,
    VideoPlayer,
    Fetch,
} from "./src/components";

// AIzaSyA4Gqfw_CIPgI5DkEkwy8rzEWM5DBxJi-I

export default MainStack = StackNavigator({
    LandingPage: { screen: LandingPage },
    BlogPage: { screen: BlogPage },
    ResourcesPage: { screen: ResourcesPage },
    DevotionsPage: { screen: DevotionsPage },
    PhotosPage: { screen: PhotosPage },
    SharePage: { screen: SharePage },
    GivePage: { screen: GivePage },
    LocationPage: { screen: LocationPage},
    CallPage: { screen: CallPage},
    VideoPlayer: { screen: VideoPlayer },
    Fetch: { screen: Fetch }
}, {
    navigationOptions: {
        header: null
    }
});
