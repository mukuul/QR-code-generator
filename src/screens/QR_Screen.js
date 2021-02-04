import QRCode from 'react-native-qrcode-generator';
import React, { useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, PermissionsAndroid } from 'react-native';
import { captureScreen } from "react-native-view-shot";
import Share from 'react-native-share';
import ImgToBase64 from 'react-native-image-base64';
import RNFS from 'react-native-fs';

const QR_Screen = ({ navigation }) => {
    const { string } = navigation.state.params;
    const [imageBase64, setImageBase64] = useState('')

    const shareQR = () => {
      console.log(imageBase64.slice(0, 100))
      Share.open({url : imageBase64})
    }
    const downloadQR = () => {
      requestStoragePermission()
      .then(()=>{
      var imageData = imageBase64.split("data:image/png;base64,")[1];
      var path = RNFS.DownloadDirectoryPath + '/QRcode.png';
      RNFS.writeFile(path, imageData, 'base64')
      .then((success) => {
      console.log('FILE WRITTEN! to' + path );
        })
      .catch((err) => {
      console.log(err.message);
      }); })
    }
  
    const requestStoragePermission = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          console.log("You can use the storage");
        } else {
          console.log("storage permission denied");
        }
      } catch (err) {
        console.warn(err);
      }
    };
    
    return (
      <View>
        <View style={styles.shareContainer}>      
          <TouchableOpacity 
           style={styles.button}
            onPress={shareQR}> 
            <Image
              source={require("../Images/share.png")}
              style={styles.image} />        
            <View style={styles.view}>
              <Text style={styles.smallText}>share</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity
            style={styles.button}
            onPress={downloadQR}>  
            <Image
              source={require("../Images/download.png")}
              style={styles.image} />     
            <View style={styles.view}>
              <Text style={styles.smallText}>download</Text>
            </View>
        </TouchableOpacity>  
      </View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>QR Code:</Text>
          <QRCode
             style={styles.qrStyle}
            size={250}
            bgColor='#000000'
            fgColor='#FFFFFF'
            value={string}
            getImageOnLoad={(base64)=> setImageBase64(base64)}
          />    
         </View>    
      </View>
    )
    
}

const styles = StyleSheet.create({
  container: {
      alignItems: "center",
      justifyContent: "space-between",
      paddingTop: 50,
  },
  textStyle: {
      fontSize: 27,
      fontWeight: "bold",
      paddingBottom: 10,
  },
  shareContainer:{
    justifyContent: "flex-end",
    flexDirection: "row",
     },
  smallText:{
    fontSize: 12
  },
  button:{
    padding: 5,
    alignItems: "center",
  },
  qrStyle:{
    padding: 20
  },
  image:{
    width: 30,
    height: 30,
    resizeMode: 'stretch',
  }
})

export default QR_Screen;