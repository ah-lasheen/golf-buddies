import React from 'react';
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

const HeaderButtons = () => {
    
    const onProfilePressed = () => {
        console.log('Profile Pressed');
    }
    
    const onMarketPlacePressed = () => {
        console.log('Marketplace Pressed');
    }
    
    const onHomeButtonPressed = () => {
        console.log('Home Button Pressed');
    }
    
    const onBettingButtonPressed = () => {
        console.log('Betting Button Pressed');
    }
    
    const onMessagesPressed = () => {
        console.log('Messages Pressed');
    }

    return (
        <>
            <TouchableOpacity style={styles.profileButton} onPress={onProfilePressed}>
                <Image
                    style={styles.buttonImage}
                    source={require('../../assets/images/blank-profile.png')}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.marketplaceButton} onPress={onMarketPlacePressed}>
                <Text style={styles.buttonText}>Marketplace</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.homeButton} onPress={onHomeButtonPressed}>
                <Image
                    style={styles.buttonImage}
                    source={require('../../assets/images/golf-buddies-logo.png')}
                />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.bettingButton} onPress={onBettingButtonPressed}>
                <Text style={styles.buttonText}>Betting</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.messageButton} onPress={onMessagesPressed}>
                <Image
                    style={styles.buttonImage}
                    source={require('../../assets/images/direct-messages.png')}
                />
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    marketplaceButton: {
        width: 100,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#e8f5e9',
        marginTop: 25,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        position: 'absolute',
        left: '45%',
        transform: [{ translateX: -100 }],
    },
    homeButton: {
        width: 150,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
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
        borderWidth: 1,
        borderColor: 'black',
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
        borderWidth: 1,
        borderColor: 'black',
    },
    messageButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#e8f5e9',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#c8e6c9',
    },
    buttonImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        borderRadius: 10, // Change this value to adjust the border radius
    },
    buttonText: {
        fontSize: 18,
        color: '#4caf50',
    },
});

export default HeaderButtons;
