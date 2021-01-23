import QRCode from 'react-native-qrcode-svg';
import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const QR_Screen = ({ navigator, string}) => {
    return (
        <View>
            <QRCode
            size={200}
            bgColor='#000000'
            fgColor='#FFFFFF'
            value={string}  
          />
        </View>
    )
}

export default QR_Screen;