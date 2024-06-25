import React from 'react'
import CustomButton from '../CustomButton/CustomButton'


const SocialSignInButtons = () => {
    const onSignInGoogle = () => {
        console.log('onSignInGoogle');
      }
    
      const onSignInFacebook = () => {
        console.log('onSignInFacebook');
      }
    
        return (
            <>
                <CustomButton 
                    text="Sign in with Google" 
                    onPress={onSignInGoogle}
                    bgColor="#FAE9EA"
                    fgColor="#DD4D44"
                    shadow={true} 
                />

                <CustomButton 
                    text="Sign in with Facebook" 
                    onPress={onSignInFacebook}
                    bgColor="#E7EAF4"
                    fgColor="#4765A9"
                    shadow={true}
                />
            </>
    )
}

export default SocialSignInButtons