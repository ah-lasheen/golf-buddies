import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';

const CustomButton = ({ onPress, text, type = "PRIMARY", bgColor, fgColor, shadow }) => {
  return (
    <Pressable 
      onPress={onPress} 
      style={({pressed}) => [
        styles.container,
        styles[`container_${type}`],
        pressed && styles.pressed, // Added pressed state style
        bgColor ? {backgroundColor: bgColor} : {},
        shadow ? styles.shadow : {} // Conditionally apply shadow style
      ]}>
      <Text 
        style={[
            styles.text,
            styles[`text_${type}`],
            fgColor ? {color: fgColor} : {}
            ]}
        >
            {text}
        </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  
  container: {
    backgroundColor: '#3B71F3',
    width: '60%',
    padding: 15,
    marginVertical: 5,
    alignItems: 'center',
    borderRadius: 5,
  },

  container_PRIMARY: {
    backgroundColor: '#3B71F3',
  },

  container_SECONDARY: {
    backgroundColor: 'transparent',
    borderColor: '#3B71F3',
    borderWidth: 2,
  },

  container_TERTIARY: {
    backgroundColor: 'transparent',
  },

  text: {
    fontWeight: 'bold',
    color: 'white',
  },

  text_SECONDARY: {
    color: '#3B71F3',
  },

  text_TERTIARY: {
    color: 'gray'
  },

  pressed: {
    opacity: 0.65, // Darken the button by reducing its opacity
  },

  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
});

export default CustomButton;
