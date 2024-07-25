import React, { useState } from 'react';
import { View, Image, StyleSheet} from 'react-native';
import Logo from '../../assets/images/golf-buddies-logo.png';
import CustomInput from '../../components/CustomInput/CustomInput';
import CustomButton from '../../components/CustomButton/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons/SocialSignInButtons';
import { useNavigation} from '@react-navigation/native';


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const navigation = useNavigation();

  const onSignInPressed = () => {
    // validate user
    navigation.navigate('Home');
  }

  const onForgotPasswordPressed = () => {
    navigation.navigate('Forgot Password');
  }

  <SocialSignInButtons/>

  const onSignUpPressed = () => {
    navigation.navigate('Register');
  }


  return (
    <View style={styles.root}>
      <Image 
        source={Logo} 
        style={styles.logo} 
        resizeMode='cover'
      />

      <CustomInput //USERNAME 
        placeholder="  Username" 
        value={username} 
        setValue={setUsername}
        shadow={true}
      />
      <CustomInput //PASSWORD
        placeholder="  Password" 
        value={password} 
        setValue={setPassword}
        secureTextEntry={true}
        shadow={true}
      />

    <CustomButton 
        text="Sign In" 
        onPress={onSignInPressed}
        shadow={true}
    />

    <CustomButton 
        text="Forgot password?" 
        onPress={onForgotPasswordPressed} 
        type="TERTIARY"
    />

    <SocialSignInButtons/>

    <CustomButton 
        text="Don't have an account? Create one" 
        onPress={onSignUpPressed} 
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
  logo: {
    width: 300,
    height: 150,
    marginBottom: 20,
  },
});

export default SignInScreen;
 