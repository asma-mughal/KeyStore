import React from 'react';
import {
    View,
    Text, TouchableOpacity, Image, Alert, ScrollView
} from 'react-native';
import { AuthLayout } from './AuthLayout';
import { FormInput} from '../../components/formInput';
import { TextButton} from '../../components/TextButton';
import { COLORS, icons, SIZES } from '../../constants';
import { useRegisterUserMutation } from '../../services/userAuthApi';
import Checkbox from 'expo-checkbox';
import { utils} from '../../utils';
import { storeToken } from '../../services/AsyncStorageService';
import Toast from 'react-native-toast-message';
export const SignUp = ({navigation}) => {
    function isEnable() {
        return email!="" && password!=""&& name!=null
       }
	const [email, setEmail] = React.useState("");
	const [name, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
    const [password2, setPassword2] = React.useState("");
    const [passwordError, setPasswordError] = React.useState("");
	const [usernameError, setUsernameError] = React.useState("");
	const [emailError, setEmailError] = React.useState("");
    const [tc, setTc] = React.useState(null);
    const [registerUser] = useRegisterUserMutation()
    const handleFormSubmit = async () => {
      const formData = { name, email, password, password2, tc }
      const res = await registerUser(formData)
      // console.log("Response", res)
      if (res.data) {
        await storeToken(res.data.token)  // Store Token in Storage
        //console.log(res.data)
        Alert.alert('Registered Successfully');
        setTimeout(() => {
            navigation.navigate('Home')
          }, 1000);
        
      }
         if (res.error) {
        // console.log("Response Error", res.error.data.errors)
        Alert.alert("Registration Failed")
      }
    }
    

    const [showPass, setShowPass]= React.useState(false);
    function enableButton(){
    	return email != "" && password != "" && name!="" && passwordError=="" && emailError==""  
    }
    return (
        <ScrollView >
    	<AuthLayout  
    	title="Getting Started"
        subtitle="Create an account to continue!"
        titleContainerStyle={{
        	marginTop:SIZES.radius,
        }}
    	>
       <View style={{
       	flex:1,
       	marginTop:SIZES.padding
       }}>
        <FormInput 
           label="Username"
             containerStyle={{
              marginTop:SIZES.radius
             }}
           value={name}
           onChange= {(value) => {
        setUsername(value)}}
           errorMessage={usernameError}
           appendComponent={
               <View    style={{
                   justifyContent:'center'
               }}>
                   <Image 
                   source
                   ={name == "" || (name!= "" && usernameError=="")?icons.correct:icons.cancel} 

                   style={{
                       height:20,
                       width:20,
                       tintColor:name=="" ? COLORS.gray : (name !="" && usernameError =="" )?
                       COLORS.green : COLORS.red,
                   }}
                   />

                   </View>
           }
           />
           <View style={{
            top:4
           }}>
  <FormInput 
           label="Email"
           value={email}
           keyboardType="email-address"
           autoCompleteType="email"
           onChange= {(value) => {
            utils.validateEmail(value, setEmailError)
            setEmail(value)}}
           errorMessage={emailError}
           appendComponent={
               <View    style={{
                   justifyContent:'center'
               }}>
                   <Image 
                   source={email == "" || (email!= "" && emailError=="" )?icons.correct : icons.cancel  } 

                   style={{
                       height:20,
                       width:20,
                       tintColor:email=="" ? COLORS.gray : (email !="" && emailError =="" )?
                       COLORS.green : COLORS.red,
                   }}
                   />

                   </View>
           }
           /></View>
          
            <FormInput 
           label="Password"
           value={password}
           secureTextEntry={!showPass}
           autoCompleteType="password"
           containerStyle={{
               marginTop:SIZES.radius
           }}
           onChange= {
           	(value) => {
             utils.validatePassword(value, setPasswordError)
           		setPassword(value)
           	}

           }
            errorMessage={passwordError}
           appendComponent={
               <TouchableOpacity style={{
                   width:40,
                   alignItems:'flex-end',
                   justifyContent:'center',
               }}
               onPress={()=> setShowPass(!showPass)}
               >
             <Image 
             source={showPass ?icons.eye_close : icons.eye}
             style={{
                 height:20,
                 width:20,
                 tintColor:COLORS.gray
             }}
             />
               </TouchableOpacity>
           }
           />
            <FormInput 
           label="Confirm Password"
           value={password2}
           secureTextEntry={!showPass}
           autoCompleteType="password"
           containerStyle={{
               marginTop:SIZES.radius
           }}
           onChange= {
           	(value) => {
           		setPassword2(value)
           	}

           }
           appendComponent={
               <TouchableOpacity style={{
                   width:40,
                   alignItems:'flex-end',
                   justifyContent:'center',
               }}
               onPress={()=> setShowPass(!showPass)}
               >
             <Image 
             source={showPass ?icons.eye_close : icons.eye}
             style={{
                 height:20,
                 width:20,
                 tintColor:COLORS.gray
             }}
             />
               </TouchableOpacity>
           }
           />
           <View style={{
            flexDirection:'row', 
            marginTop:13,
            marginLeft:3,
           }}>
             <Checkbox value={tc} onValueChange={setTc} color={tc ? 'red' : undefined} />
            <Text style={{
                marginLeft:10,
                fontSize:15,
                color:COLORS.blue,
            }}>I agree to term and condition.</Text>
            </View>
           <TextButton
           label="Sign Up"
           disabled={enableButton() ?false:true}
           buttonContainerStyle={{
           	height:40,
           	alignItems:'center',
           	marginTop:SIZES.padding,
           	borderRadius:SIZES.radius,
           	backgroundColor:enableButton() ? COLORS.red:COLORS.white,
           }}
           labelStyle={{
         
            color:isEnable()?COLORS.white: COLORS.blue,

            fontSize:17,
           }}
           onPress={handleFormSubmit}
           />
              <View style={{
        	flexDirection:'row',
        	marginTop:SIZES.radius,
        	justifyContent:'center'
        }}> 
        <Text style={{
        	color:COLORS.darkGray,
        	fontSize:15,
        }}>Already have an account? </Text>
         <TextButton
           label="Sign In"
           buttonContainerStyle={{
            marginLeft:3,
            backgroundColor:null,
           }}
           labelStyle={{
            color:COLORS.blue,

            fontSize:17,
           }}
           onPress={()=>

            navigation.navigate("SignIn")}
           />
        </View>
          <View style={{
              marginTop:SIZES.radius*12,
             }}>
  
             </View>
             <View >
      

             </View>
       </View>
      
     
    	</AuthLayout>
        </ScrollView>
    )
}

;