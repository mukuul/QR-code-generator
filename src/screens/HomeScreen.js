import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [bank, setBank] = useState("")
  const [ifsc, setIfsc] = useState("")

  const displayQR = () => {
    if (name && bank && ifsc) {
      const string = `upi://pay?pa=${bank}@${ifsc}.ifsc.npci&pn=${name}&tn=&am=`
      navigation.navigate("QR", { string })
    } else {
      alert("Please complete your details")
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrap}>
        <View style={styles.item}>
          <Text style={styles.textStyle}>
            Name:
          </Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Your Name"
            onChangeText={value => {
              setName(value)
            }}
            value={name}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.textStyle}>
            Account Number:
          </Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter Account Number"
            onChangeText={value => {

              setBank(value)
            }}
            value={bank}
          />
        </View>
        <View style={styles.item}>
          <Text style={styles.textStyle}>
            IFSC Code:
          </Text>
          <TextInput
            style={styles.textInputStyle}
            placeholder="Enter IFSC Code"
            onChangeText={value => {

              setIfsc(value)
            }}
            value={ifsc}
          />
        </View>
      </View>
      <View
        style={styles.button}>
        <Button
          title="Generate QR Code"
          onPress={() => { displayQR() }}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: "space-evenly",
  },

  wrap: {
    paddingVertical: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",

  },

  item: {
    width: '85%',
    paddingVertical: 10,
    alignItems: "center"
  },

  textStyle: {

    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 5,

  },

  textInputStyle: {
    width: "80%",
    borderWidth: 1,
    height: 25,
    fontSize: 18,
    paddingHorizontal: 10,
    fontFamily: "lucida grande",


  },

  button: {
    justifyContent: "center",
  },
});

export default HomeScreen;