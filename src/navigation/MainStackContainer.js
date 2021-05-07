import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Map from '../components/Map';
import RecycleStation from '../components/RecycleStation'

const Stack = createStackNavigator();

export default function MyStack() {

    return (

        <Stack.Navigator
            initialRouteName="Map"
            screenOptions={{
                headerShown: false,
            }}>
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="RecycleStation" component={RecycleStation} />
        </Stack.Navigator>

    );
}
