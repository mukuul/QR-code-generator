import QRCode from 'react-native-qrcode-svg';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const QR_Screen = ({ navigation }) => {
    const { string } = navigation.state.params;
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>QR Code:</Text>
            <QRCode
                size={200}
                bgColor='#000000'
                fgColor='#FFFFFF'
                value={string}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "space-evenly",
        paddingTop: 100,
    },
    textStyle: {
        fontSize: 17,
        fontWeight: "bold",
        paddingBottom: 25,
    }
})

export default QR_Screen;