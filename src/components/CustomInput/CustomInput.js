import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({ value, setValue, placeholder, secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <TextInput 
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        placeholderTextColor="#999" // Optional: to make placeholder text contrast with white input color 
        
        style={styles.input}
        secureTextEntry={secureTextEntry}


      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '60%', // Use percentage to make it responsive

    borderColor: '#e8e8e8',
    borderWidth: 1,
    borderRadius: 5,

    paddingHorizontal: 10,
    paddingVertical: 15, // Added vertical padding
    marginVertical: 10, // Adjusted margin
  },
  input: {
    color: 'black', // Text color
    height: 35, // Ensures a proper height for the input field
  },
});

export default CustomInput;
