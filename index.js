/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import AppContainer from './App';
// import Geolocation from '@react-native-community/geolocation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { name as appName } from './app.json';

const ReturnApp = () => (
    <NavigationContainer>
        <AppContainer />
    </NavigationContainer>
)

AppRegistry.registerComponent(appName, () => ReturnApp);