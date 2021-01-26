import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';


const CustomInputField = ({ placeHolder, setTouched, touched, touchedvalue, setTextState, textState }) => {
  return (
    <Pressable onPressIn={() => setTouched(0)}
      onPressOut={() => setTouched(touchedvalue)}>
      {
        touched === touchedvalue || textState[touchedvalue]
          ? <View style={styles.boxStyle}>
            <Text style={styles.textStyle}> {placeHolder}</Text>
            <TextInput
              style={styles.inputStyle}
              autoFocus={true}
              onChangeText={value => {
                setTextState[touchedvalue](value)
              }}
              value={textState[touchedvalue]} />
          </View>
          : <View style={styles.boxStyle}>
            <Text style={styles.defaultTextStyle}> {placeHolder} </Text>
          </View>
      }
    </Pressable>
  );
}

/*export default function App() {
  const [touched, setTouched] = useState(0);

  return (
    <Pressable onPress={() => {
      setTouched(0)
      // Keyboard.dismiss;

    }}>
      <View style={styles.container}>
        <CustomInputField placeHolder="Username" touched={touched} touchedvalue={1} setTouched={setTouched} />
        <CustomInputField placeHolder="Password" touched={touched} touchedvalue={2} setTouched={setTouched} />
        <CustomInputField placeHolder="Captcha" touched={touched} touchedvalue={3} setTouched={setTouched} />
        <StatusBar hidden={true} />
      </View>
    </Pressable>
  );
}
*/
const styles = StyleSheet.create({
  container: {
    paddingVertical: 50,
    backgroundColor: '#cccccc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    height: 70,
    width: 250,
    padding: 15,
    margin: 10,
    borderRadius: 15,
    backgroundColor: "#c0d0d0",
  },

  textStyle: {
    fontFamily: "sans-serif-light",
    fontSize: 12,
  },

  inputStyle: {
    fontFamily: "notoserif",
  },

  defaultTextStyle: {

    fontFamily: "sans-serif-thin",
  }
});

export default CustomInputField;
