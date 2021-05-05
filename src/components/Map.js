import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MapView from 'react-native-maps';
import RecycleStations from '../context/RecycleStations'
import * as Location from 'expo-location';

// const { width, height } = Dimensions.get('screen');

export default function Map() {
    // const [setErrorMsg] = useState(null);
    // const [mapRegion, setMapRegion] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         let { status } = await Location.requestForegroundPermissionsAsync();
    //         if (status !== 'granted') {
    //             setErrorMsg('Permission to access location was denied');
    //             return;
    //         }
    //         Show user location on the map
    //         let location = await Location.getCurrentPositionAsync({});
    //         setMapRegion({
    //             longitude: location.coords.longitude,
    //             latitude: location.coords.latitude,
    //             latitudeDelta: 0.0922,
    //             longitudeDelta: 0.0421,
    //         });
    //     })();
    // }, [setErrorMsg]);


};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    mapView: {
        width: '100%',
        height: '100%',
    },
});


