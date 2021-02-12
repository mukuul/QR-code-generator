import React, { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Keyboard } from 'react-native';


const CustomInputField = ({ placeHolder, setTouched, touched, touchedvalue, setTextState, textState, keyboard }) => {
  return (
    <Pressable onPress={() => setTouched(0)}
      onPressOut={() => setTouched(touchedvalue)}>
      {
        touched === touchedvalue || textState[touchedvalue]
          ? <View style={styles.boxStyle}>
            <Text style={styles.textStyle}> {placeHolder}</Text>
            <TextInput
              style={styles.inputStyle}
              autoFocus={true}
              keyboardType={keyboard}
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