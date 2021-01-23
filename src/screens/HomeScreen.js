import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeScreen = ({navigator}) => {
    const [ name, setName ] = useState("")
    const [ bank, setBank ] = useState("")
    const [ ifsc, setIfsc ] = useState("")
    const [ string, setString ] = useState("")
  
    const displayQR = () => {
      if(name && bank && ifsc){
        setString(`upi://pay?pa=${bank}@${ifsc}.ifsc.npci&pn=${name}&tn=&am=`)
        navigator.navigate("QR", {string} )
      } else {
        alert("Please complete your details")
      }
    }
  
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="Enter Your Name"
          onChangeText={value=>{
            
            setName(value)
          }}
          value={name}
        />
        <TextInput
          placeholder="Enter Account Number"
          onChangeText={value=>{
  
            setBank(value)
          }}
          value={bank}
        />
        <TextInput
          placeholder="Enter IFSC Code"
          onChangeText={value=>{

            setIfsc(value)
          }}
          value={ifsc}
        />
        <Button
          title="Generate QR Code"
          onPress={()=>{displayQR()}}
        />
        <StatusBar style="auto" />
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default HomeScreen;