import React, { useEffect, useState } from 'react';
import {StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Pressable, PermissionsAndroid, ToastAndroid } from 'react-native';
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
        var fileName = Date.now();
        var imageData = imageBase64.split("data:image/png;base64,")[1];
        var path = RNFS.DownloadDirectoryPath + '/' + fileName + '.png';
        RNFS.writeFile(path, imageData, 'base64')
        .then((success) => {
          ToastAndroid.show('Image saved to' + path , ToastAndroid.LONG);
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
    
    let imageURI = `https://chart.googleapis.com/chart?chs=250x250&cht=qr&chl=${encodeURIComponent(string)}&choe=UTF-8`
    
    useEffect(() => {
      ImgToBase64.getBase64String(imageURI)
      .then(base64String => setImageBase64(`data:image/png;base64,${base64String}`))
      .catch(err => doSomethingWith(err));
    },[])

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
          <Image
            source={{uri : imageURI}}
            style = {{height: 300, resizeMode : 'stretch', margin: 5, width: 300 }}
    
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