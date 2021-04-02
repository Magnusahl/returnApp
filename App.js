import React, { Component } from "react";
import { StyleSheet, View, PermissionsAndroid } from "react-native";
import MapboxGL from "@react-native-mapbox-gl/maps";
import Geolocation from 'react-native-geolocation-service';

MapboxGL.setAccessToken("pk.eyJ1IjoiZmx1YW4iLCJhIjoiY2ttemEza3gyMDhucTJycXVhMnZxdnF4MiJ9.7TGFB6oiWOkVfemwfmD81w");
MapboxGL.setConnected(true);

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

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

  componentDidMount = () => {
    this.requestUserLocationPermission();
    // this.getUserLocation();
    Geolocation.getCurrentPosition(
      (position) => {
        console.log(position);
      },
      (error) => {
        // See error code charts below.
        console.log(error.code, error.message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }


  // getUserLocation = () => {
  //   Geolocation.getCurrentPosition(
  //     (position) => {
  //       this.setState({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     },
  //     (error) => {
  //       console.log(error);
  //     },
  //     {
  //       enableHighAccuracy: false,
  //       timeout: 30000,
  //       maximumAge: 1000,
  //     },
  //   );
  // }



  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map} ref={(map) => {
            this.map = map;
          }} >
            <MapboxGL.Camera
              zoomLevel={12}
              centerCoordinate={[59.238139947678405, 17.96961559757469]}
              ref={(r) => {
                this.camera = r;
              }}
            >
            </MapboxGL.Camera>
            <MapboxGL.UserLocation visible={true}></MapboxGL.UserLocation>
          </MapboxGL.MapView>
        </View>
      </View >
    );
  }
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