import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from 'react-native-geolocation-service';

Geolocation.getCurrentPosition(info => console.log(info));

MapboxGL.setAccessToken("pk.eyJ1IjoiZmx1YW4iLCJhIjoiY2ttemEza3gyMDhucTJycXVhMnZxdnF4MiJ9.7TGFB6oiWOkVfemwfmD81w");
MapboxGL.setConnected(true);

componentDidMount = () => {
  requestUserLocationPermission();
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 720,
    width: 400,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});



export default class App extends Component {

  //Request user location Android
  async requestUserLocationPermission() {
    try {
      const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Access user location');
      } else {
        console.log('Permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} />
        </View>
      </View>
    );
  }
}