import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation} from '@react-navigation/native';

const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('Confirm');
  }

  const onSignInPressed = () => {
    navigation.navigate('Login');
  }
    //TERMS OF SERVICE NEEDS TO BE CREATED AT A LATER TIME
  const onTermsOfUsePressed = () => {
    console.log('onTermsOfUsePress');
  }
    //PRIVACY POLICY NEEDS TO BE CREATED AT A LATER TIME
  const onPrivacyPolicyPressed = () => {
    console.log('onPrivacyPolicyPressed');
  }

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create an account</Text>

      <CustomInput //USERNAME 
        placeholder="  Username" 
        value={username} 
        setValue={setUsername}
        shadow={true}
      />

      <CustomInput //EMAIL 
        placeholder="  Email" 
        value={email} 
        setValue={setEmail}
        shadow={true}
      />
      
      <CustomInput //PASSWORD
        placeholder="  Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
        shadow={true}
      />

      <CustomInput //PASSWORD CONFIRM
        placeholder="  Confirm Password" 
        value={passwordConfirm} 
        setValue={setPasswordConfirm}
        secureTextEntry={true}
        shadow={true}
      />

    <CustomButton 
        text="Register" 
        onPress={onRegisterPressed}
        shadow={true}
    />

    <Text style={styles.text}>
      By registering, you confirm that you accept our{' '}
      <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
      <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>  
    </Text>

    <SocialSignInButtons/>

    <CustomButton 
        text="Have an account? Sign in" 
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

export default SignUpScreen;