import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import { useNavigation} from '@react-navigation/native';


const ForgotPasswordScreen = () => {
  const [username, setUsername] = useState('');

  const navigation = useNavigation();

  const onSendPressed = () => {
    navigation.navigate('New Password');
  }

  const onSignInPressed = () => {
    navigation.navigate('Login');
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset your password</Text>

      <CustomInput //USERNAME 
        placeholder="  Enter your username" 
        value={username} 
        setValue={setUsername}
        shadow={true}
      />

    <CustomButton 
        text="Send" 
        onPress={onSendPressed}
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

export default ForgotPasswordScreen;
