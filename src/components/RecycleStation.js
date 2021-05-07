import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default function RecycleStation({ navigation }) {
    const screenWidth = Dimensions.get('window').width
    const screenHeight = Dimensions.get('window').height
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', }} >
                <TouchableOpacity
                    onPress={() => navigation.navigate('Map')}>
                    <Icon name='arrow-left' color={'green'} size={38} />
                </TouchableOpacity>
                <Text style={{ fontSize: 50, }} >Fullerstation</Text>
            </View>
            <View style={{ alignItems: 'center', }} >
                <ScrollView>
                    <View style={{
                        justifyContent: 'center',
                        alignItems: 'center', width: screenWidth, height: screenHeight * 0.4
                    }} >
                        <Image
                            source={require('../../assets/icons/FullerstaAVC.png')}
                            style={{ width: screenWidth, height: 200, resizeMode: 'contain' }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', width: screenWidth, marginTop: 10 }}>
                        <View style={{ flexDirection: 'column' }} >

                            <Text style={styles.trashText} >PappersFörp</Text>
                            <TouchableOpacity
                                style={styles.canRecycle}
                            ><Text>Finns plats att tömma</Text></TouchableOpacity>
                            <TouchableOpacity
                                style={styles.fullRecycle}
                            ><Text>Full</Text></TouchableOpacity>


                            <Text style={styles.trashText} >PlastFörp</Text>
                            <TouchableOpacity style={styles.canRecycle}><Text>Finns plats att tömma</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.fullRecycle}><Text>Full</Text></TouchableOpacity>

                        </View>

                        <View style={{ flexDirection: 'column' }} >

                            <Text style={styles.trashText} >MetallFörp</Text>
                            <TouchableOpacity style={styles.canRecycle}><Text>Finns plats att tömma</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.fullRecycle}><Text>Full</Text></TouchableOpacity>

                            <Text style={styles.trashText} >Tidningar</Text>
                            <TouchableOpacity style={styles.canRecycle}><Text>Finns plats att tömma</Text></TouchableOpacity>
                            <TouchableOpacity style={styles.fullRecycle}><Text>Full</Text></TouchableOpacity>


                        </View>
                    </View>



                </ScrollView>
            </View>



        </View>);
}


const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    trashText: {
        marginTop: 10,
        fontSize: 18,
    },
    canRecycle: {
        marginTop: 10,
        backgroundColor: 'green',
        width: 75,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    fullRecycle: {
        marginTop: 10,
        backgroundColor: 'red',
        width: 75,
        height: 45,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
});
