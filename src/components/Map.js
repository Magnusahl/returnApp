import React from "react";
import { StyleSheet, View, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import RecycleStations from '../context/RecycleStations'

const screenWidth = Dimensions.get('window').width

export default function Map({ navigation }) {

    return (
        <View style={styles.container}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={styles.map}
                region={{
                    latitude: 59.23834572786042,
                    longitude: 17.970031340012095,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <Marker
                    coordinate={{ latitude: 59.239056, longitude: 17.970975 }}
                    image={{ uri: 'ic_recycle' }}
                >
                    {/* <Image
                        source={require('../../assets/icons/recycling.png')}
                        style={{
                            width: 40,
                            height: 38,
                        }}
                    /> */}
                    <Callout
                        onPress={() => navigation.navigate('RecycleStation')}
                        style={{
                            width: 300, height: 200, justifyContent: 'center',
                            alignItems: 'center', elevation: 10
                        }}
                    >
                        <Text>Återvinningsstation Fullersta</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: screenWidth, marginTop: 10 }}>
                            <View style={{ flexDirection: 'column' }} >


                                <Text>Plast</Text>

                                <Text>Tidningar</Text>
                                <Icon name='newspaper-o' color={'green'} size={38} />

                            </View>
                            <View style={{ flexDirection: 'column' }} ><Text>Metall</Text>
                                <Text>Papper</Text></View>

                        </View>


                    </Callout>
                </Marker>

            </MapView>
            <TouchableOpacity
                style={{
                    justifyContent: 'center',
                    alignItems: 'center', backgroundColor: 'white', width: 45, height: 45, borderRadius: 20, elevation: 10, position: 'absolute', bottom: 25, right: 25
                }}
            >
                <Icon name='search' color={'green'} size={28} />
            </TouchableOpacity>
        </View>
    )

}






const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


