import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//All screens to be used in stack navigator
import SignInScreen from '../Screens/SignInScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import ConfirmEmailScreen from '../Screens/ConfirmEmailScreen/ConfirmEmailScreen';
import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen/ForgotPasswordScreen';
import ResetPasswordScreen from '../Screens/ResetPasswordScreen/ResetPasswordScreen';
import FindPartner from '../Screens/HomeScreen(FindPartner)/FindPartner'
import MessagesScreen from '../Screens/MessagesScreen/messagesScreen';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Messages" component={MessagesScreen} />
                <Stack.Screen name="Login" component={SignInScreen} />
                <Stack.Screen name="Register" component={SignUpScreen} />
                <Stack.Screen name="Confirm" component={ConfirmEmailScreen} />
                <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen} />
                <Stack.Screen name="New Password" component={ResetPasswordScreen} />
                <Stack.Screen name="Home" component={FindPartner} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation