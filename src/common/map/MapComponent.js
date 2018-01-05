// react library
import React, { Component } from 'react';

// third-party react library
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDAmhVVwfEHfpAuLLRiDJYu58sspa36KGg';

// components
import MapView from 'react-native-maps';

const MapComponent = ({ longitude, latitude }) => {
    const { container } =  styles;
    let cords = { latitude, longitude}

    const origin = {latitude: latitude, longitude: longitude};
    const destination = {};
    // const destination = {latitude: 37.771707, longitude: -122.4053769};

    return (
        <View style={container}>
            <MapView style={{ height: 700, alignSelf: 'stretch', }}
                     initialRegion={{
                         latitude: latitude,
                         longitude: longitude,
                         latitudeDelta: 0.0922,
                         longitudeDelta: 0.0421,
                     }}
            >
                <MapView.Marker
                    coordinate={cords}
                    title="My Marker"
                    description="Some description"
                />
                {
                    (destination.longitude)
                    ? <MapViewDirections
                            origin={origin}
                            destination={destination}
                            apikey={GOOGLE_MAPS_APIKEY}
                            strokeWidth={3}
                            strokeColor="blue"
                            // mode="driving"
                        />
                        : <Text></Text>
                }
            </MapView>
        </View>
    )

}

// export default class MapComponent extends Component {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             latitude: null,
//             longitude: null
//         };
//     }
//
//     componentWillReceiveProps(nextProps) {
//         // update original states
//         console.log(nextProps);
//     }
//
//     // state = {
//     //     location: null,
//     //     errorMessage: null,
//     //     latitude: null,
//     //     longitude: null
//     // };
//
//     // componentWillMount() {
//     //     if (Platform.OS === 'android' && !Constants.isDevice) {
//     //         this.setState({
//     //             errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
//     //         });
//     //     } else {
//     //         this._getLocationAsync();
//     //     }
//     // }
//
//     // _getLocationAsync = async () => {
//     //     let { status } = await Permissions.askAsync(Permissions.LOCATION);
//     //     if (status !== 'granted') {
//     //         this.setState({
//     //             errorMessage: 'Permission to access location was denied',
//     //         });
//     //     }
//     //
//     //     let location = await Location.getCurrentPositionAsync({});
//     //
//     //     this.setState({
//     //         location,
//     //         latitude: location['coords'].latitude,
//     //         longitude: location['coords'].longitude
//     //     });
//     // };
//
//     render() {
//         // let text = 'Waiting..';
//         // if (this.state.errorMessage) {
//         //     text = this.state.errorMessage;
//         // } else if (this.state.location) {
//         //     text = JSON.stringify(this.state.location);
//         // }
//
//
//         const { container } =  styles;
//         // const { longitude, latitude } = props
//
//         return (
//             <View style={container}>
//                 <MapView style={{ height: 750, alignSelf: 'stretch', }}
//                     initialRegion={{
//                         latitude: 37.785834,
//                         longitude: -122.406417,
//                         latitudeDelta: 0.0922,
//                         longitudeDelta: 0.0421,
//                     }}
//                 >
//                     {/*{this.state.markers.map(marker => (*/}
//                         {/*<MapView.Marker*/}
//                             {/*coordinate={marker.latlng}*/}
//                             {/*title={marker.title}*/}
//                             {/*description={marker.description}*/}
//                         {/*/>*/}
//                     {/*))}*/}
//                 </MapView>
//                 {/*<View style={styles.container}>*/}
//                     {/*<Text style={styles.paragraph}>{text}</Text>*/}
//                 {/*</View>*/}
//             </View>
//         )
//     }
// }

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // width: undefined,
        // height: undefined,
        // backgroundColor:'transparent',
        // justifyContent: 'space-around',
        // alignItems: 'center',
    },
});

export { MapComponent };