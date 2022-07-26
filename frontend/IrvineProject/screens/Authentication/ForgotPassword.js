import React from 'react';
import {
    View,
    Text, TouchableOpacity, Image
} from 'react-native';
import { AuthLayout } from './AuthLayout';
import { utils } from '../../utils';
import { FormInput} from '../../components/formInput';
import { TextButton} from '../../components/TextButton';
import { COLORS, icons, SIZES } from '../../constants';
export const ForgotPassword = ({navigation}) => {
	
  const [emailError, setEmailError] = React.useState("");
	const [email, setEmail] = React.useState("");

    function isEnable() {
  return email!="" 
 }
    return (
    	<>
         <AuthLayout
         title="Password Recovery"
         subtitle="Please enter your Email"
         titleContainerStyle={{
         	marginTop:SIZES.padding*2,
         }}
         >
        <View style={{
          	flex:1,
          	marginTop:SIZES.padding*2,
          }}> 

         <FormInput 
           label="Email"
           value={email}

           containerStyle={{
               marginTop:SIZES.radius
           }}
           onChange= {
           	(value) => {
            utils.validateEmail(value, setEmailError)
           		setEmail(value)
           	}

           }
          
           appendComponent={
               <TouchableOpacity style={{
                   width:40,
                   alignItems:'flex-end',
                   justifyContent:'center',
               }}
               >
            <Image 
                   source={email == "" || (email!= "" && emailError=="" )?icons.correct : icons.correct  } 

                   style={{
                       height:20,
                       width:20,
                       tintColor:email=="" ? COLORS.gray : (email !="" && emailError =="" )?
                       COLORS.green : COLORS.red,
                   }}
                   />
               </TouchableOpacity>
           }
           />
             
             <TextButton
           label="Done"
            disabled={isEnable()? false : true}
           buttonContainerStyle={{
           	height:40,
           	alignItems:'center',
           	marginTop:SIZES.padding,
           	borderRadius:SIZES.radius,

           	backgroundColor:isEnable()? COLORS.red:COLORS.white,
           }}
           labelStyle={{
            color:COLORS.blue,

            fontSize:17,
           }}
           onPress={()=>{
            navigation.navigate('Forg', {email})
           }}
           />
          </View>
         
         </AuthLayout>
</>
    )
}


ForgotPassword 