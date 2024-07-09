import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { useNavigation} from '@react-navigation/native';

const HeaderButtons = () => {
    
    const navigation = useNavigation();

    const onProfilePressed = () => {
        console.log('Profile Pressed');
    }
    
    const onMarketPlacePressed = () => {
        console.log('Marketplace Pressed');
    }
    
    const onHomeButtonPressed = () => {
        console.log('Home Button Pressed');
        navigation.navigate('Home');
    }
    
    const onBettingButtonPressed = () => {
        console.log('Betting Button Pressed');
    }
    
    const onMessagesPressed = () => {
        console.log('Messages Pressed');
    }

    return (
        <>
            <TouchableOpacity style={[styles.profileButton, styles.shadow]} onPress={onProfilePressed}>
                <Image
                    style={styles.buttonImage}
                    source={require('../../assets/images/blank-profile.png')}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.marketplaceButton, styles.shadow]} onPress={onMarketPlacePressed}>
                <Text style={styles.buttonText}>Marketplace</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.homeButton, styles.shadow]} onPress={onHomeButtonPressed}>
                <Image
                    style={styles.homeButtonImage}
                    source={require('../../assets/images/golf-buddies-logo.png')}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.bettingButton, styles.shadow]} onPress={onBettingButtonPressed}>
                <Text style={styles.buttonText}>Betting</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={[styles.messageButton, styles.shadow]} onPress={onMessagesPressed}>
                <Image
                    style={styles.buttonImage}
                    source={require('../../assets/images/direct-messages.png')}
                />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    marketplaceButton: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8f5e9',
        marginTop: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#c8e6c9',
        position: 'absolute',
        left: '45%',
        transform: [{ translateX: -100 }],
    },
    homeButton: {
        width: 150,
        height: 85,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        backgroundColor: '#e8f5e9',
        borderRadius: 5,
        borderColor: '#c8e6c9',
        position: 'absolute', // Position absolutely within the header
        left: '50%', // Center horizontally
        transform: [{ translateX: -50 }], // Adjust for the button's width
    },
    bettingButton: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8f5e9',
        marginTop: 25,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#c8e6c9',
        position: 'absolute',
        left: '55%',
        transform: [{ translateX: 50 }],
    },
    profileButton: {
        width: 50,
        height: 50,
        backgroundColor: '#e8f5e9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    messageButton: {
        width: 50,
        height: 50,
        backgroundColor: '#e8f5e9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5, // Ensure the borderRadius is consistent with other buttons
    },
    homeButtonImage: {
        width: 150,
        height: 85,
        borderRadius: 5,
        resizeMode: 'cover',
    },
    
    buttonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    buttonText: {
        fontSize: 18,
        color: '#4caf50',
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,
    },
});

export default HeaderButtons;