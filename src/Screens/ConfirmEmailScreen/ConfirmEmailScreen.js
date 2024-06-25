import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation} from '@react-navigation/native';

const ConfirmEmailScreen = () => {
  const [code, setCode] = useState('');

  const navigation = useNavigation();

  const onConfirmPressed = () => {
    navigation.navigate('Home');
  }

  const onSignInPressed = () => {
    navigation.navigate('Login');
  }

  // RESENDING CODE NEEDS TO BE IMPLEMENTED
  const onResendPressed = () => {
    console.log('onResendPressed');
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Confirm your email</Text>

      <CustomInput //Code 
        placeholder="  Enter your confirmation code" 
        value={code} 
        setValue={setCode}
        shadow={true}
      />

    <CustomButton 
        text="Confirm" 
        onPress={onConfirmPressed}
        shadow={true}
    />
    
    <CustomButton 
        text="Resend code" 
        onPress={onResendPressed} 
        type="SECONDARY"
        shadow={true}
    />
    
    <CustomButton 
        text="Back to sign in" 
        onPress={onSignInPressed} 
        type="TERTIARY"
    />
    
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F9FBFC', // Ensuring the background is gray
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  link: {
    color: '#cdcb71'
  },
});

export default ConfirmEmailScreen;
