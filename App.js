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
    CallPage
} from "./src/components";

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
    CallPage: { screen: CallPage}

}, {
    navigationOptions: {
        header: null
    }
});