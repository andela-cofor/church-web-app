// react library
import React from 'react';

import { StackNavigator } from 'react-navigation';

// components
import {
    LandingPage,
    MessagesPage,
    EventsPage,
    BlogPage,
    ResourcesPage,
    DevotionsPage,
    ConfessionsPage,
    MusicPage,
    PhotosPage,
    SharePage,
    GivePage,
    LocationPage,
    CallPage,
    VideoPlayer
} from "./src/components";

// AIzaSyA4Gqfw_CIPgI5DkEkwy8rzEWM5DBxJi-I

export default MainStack = StackNavigator({
    LandingPage: { screen: LandingPage },
    MessagesPage: { screen: MessagesPage },
    EventsPage: { screen: EventsPage },
    BlogPage: { screen: BlogPage },
    ResourcesPage: { screen: ResourcesPage },
    DevotionsPage: { screen: DevotionsPage },
    ConfessionsPage: { screen: ConfessionsPage },
    PhotosPage: { screen: PhotosPage },
    MusicPage: { screen: MusicPage },
    SharePage: { screen: SharePage },
    GivePage: { screen: GivePage },
    LocationPage: { screen: LocationPage},
    CallPage: { screen: CallPage},
    VideoPlayer: { screen: VideoPlayer }
}, {
    navigationOptions: {
        header: null
    }
});
