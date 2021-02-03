import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Pressable, Keyboard } from 'react-native';
import CustomInputField from '../components/CustomInputField.js'

const HomeScreen = ({ navigation }) => {
  const [name, setName] = useState("")
  const [bank, setBank] = useState("")
  const [ifsc, setIfsc] = useState("")
  const [touched, setTouched] = useState(0);

  const displayQR = () => {
    if (name && bank && ifsc) {
      const string = `upi://pay?pa=${bank}@${ifsc}.ifsc.npci&pn=${name}&tn=&am=`
      navigation.navigate("QR", { string })
    } else {
      alert("Please complete your details")
    }
  }

  return (
    <Pressable onPress={() => {
      //setTouched(0)
      Keyboard.dismiss();

    }}>
      <View style={styles.container}>
        <CustomInputField placeHolder="Name" touched={touched} touchedvalue={1} setTouched={setTouched} setTextState={[null, setName, setBank, setIfsc]} textState={[null, name, bank, ifsc]} />
        <CustomInputField placeHolder="Bank Account Number" touched={touched} touchedvalue={2} setTouched={setTouched} setTextState={[null, setName, setBank, setIfsc]} textState={[null, name, bank, ifsc]} />
        <CustomInputField placeHolder="Ifsc Code" touched={touched} touchedvalue={3} setTouched={setTouched} setTextState={[null, setName, setBank, setIfsc]} textState={[null, name, bank, ifsc]} />
      </View>
      <View style={styles.button}>
        <Button
          title="Generate QR Code"
          onPress={() => { displayQR() }}
        />
      </View>
    </Pressable>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
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