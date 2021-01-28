import QRCode from 'react-native-qrcode-svg';
import { StatusBar } from 'expo-status-bar';
import React, { Component, useState } from 'react';
import { Share, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ViewShot from "react-native-view-shot";
import ImgToBase64 from 'react-native-image-base64';
import * as FileSystem from 'expo-file-system';

class QR_Screen extends Component {
    state = { image64: "a" }

    onCapture = url => {

        console.log("do something with ", url);
    }
    onShare = async () => {
        try {
            const result = await Share.share({
                message: this.state.image64

            });

            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    render() {
        return (
            <ViewShot onCapture={this.onCapture} captureMode="mount">
                <View style={styles.container}>
                    <Text style={styles.textStyle}>QR Code:</Text>
                    <QRCode
                        size={200}
                        bgColor='#000000'
                        fgColor='#FFFFFF'
                        value={"00string"}
                    />
                </View>
                <Text>...Something to rasterize...</Text>
                <Button onPress={this.onShare} title="Share" />
            </ViewShot>
        );
    }
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