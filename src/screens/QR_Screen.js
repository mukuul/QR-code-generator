import QRCode from 'react-native-qrcode-svg';
import React, { useState } from 'react';
import {StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import { captureScreen } from "react-native-view-shot";
import Share from 'react-native-share';


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
            <Button
              style={styles.buttonStyle} 
              onPress={()=> { captureScreen({format: "jpg",quality: 0.8}).then(uri =>Share.open({url: uri}))}}
              title="share"
              />
        </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 100,
  },
  textStyle: {
      fontSize: 17,
      fontWeight: "bold",
      paddingBottom: 25,
  },
  buttonStyle:{
    paddingTop: 25,
  }
})

export default QR_Screen;