import React, { Component } from "react";
import { StyleSheet } from "react-native";


export default class RecycleStation extends Component {

    render() {


        return (
            <View style={styles.calloutCard}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                marginBottom: 10,
                            }}>

                            <Text style={styles.stationNameText}> Station Fullersta </Text>
                        </View>
                    </View>

                </View>
            </View>);
    }
}

const styles = StyleSheet.create({
    calloutCard: {
        position: 'absolute',
        zIndex: 110,
        bottom: 20,
        left: 20,

        backgroundColor: 'white',
        padding: 10,
        paddingLeft: 20,
    },
});
