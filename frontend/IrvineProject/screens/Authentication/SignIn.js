import React from 'react';
import {
    View,
    Text, Image, TouchableOpacity, Alert
} from 'react-native';
import { AuthLayout } from './AuthLayout';
import { FormInput } from '../../components/formInput';
import { COLORS, icons, SIZES } from '../../constants';
import { CustomSwitch} from '../../components/CustomeSwitch';
import { TextButton} from '../../components/TextButton';
import { useLoginUserMutation } from '../../services/userAuthApi';
import { storeToken } from '../../services/AsyncStorageService';
import { useNavigation } from '@react-navigation/native';
export const SignIn = () => {
const navigation = useNavigation();
 function isEnable() {
  return email!="" && password!="" 
 }
    const [email , setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [emailError, setEmailError] = React.useState("");
    const [showPass, setShowPass]= React.useState(false);
    const [saveMe, setSaveMe] = React.useState(false);
   const [result, setResult] = React.useState('');
   const clearTextInput = () => {
    setEmail('')
    setPassword('')
  }
  const [loginUser] = useLoginUserMutation()

  const handleFormSubmit = async () => {
    const formData = { email, password }
    const res = await loginUser(formData)
    if (res.data) {
      // console.log("Response Data", res.data)
      await storeToken(res.data.token)  // Store Token in Storage
      Alert.alert("Login Successfully")
      clearTextInput()
      navigation.navigate('Home')
    }
    if (res.error) {
      Alert.alert("Wrong Credentials")
    }
  }
    return (
      <AuthLayout title="Let's Sign In"
        subtitle="Welcome Back, you've been missed"
        >
         <View style={{
             flex:1,
             marginTop:SIZES.padding * 2,
         }}>
           <FormInput 
           label="UserName"
           value={email}
           onChange= {(value) => {
            setEmail(value)

          }}
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
      
           />
           <FormInput 
           label="Password"
           value={password}
           secureTextEntry={!showPass}
           autoCompleteType="password"
           containerStyle={{
               marginTop:SIZES.radius
           }}
           onChange= {(value) => setPassword(value)}
        
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
            marginTop:SIZES.radius,
            justifyContent:'space-between',
           }}>
           <CustomSwitch 
           value={saveMe}
           onChange={(value)=>setSaveMe(value)}/>
           <TextButton
           label="Forget Password"
           buttonContainerStyle={{
            backgroundColor: null,
           }}
           labelStyle={{
            color:COLORS.blue,
           }}
           onPress={()=>navigation.navigate("ForgotPassword")}
            />
           </View>
           <TextButton 
           label= "Sign In"
           labelStyle={{
            color:isEnable()?COLORS.white: COLORS.blue,
        }}
        
           disabled={isEnable()? false : true}
           buttonContainerStyle={{
            height:40,
            alignItems:'center',
            marginTop:SIZES.padding/2,
            borderRadius:SIZES.radius,
            backgroundColor: isEnable()? COLORS.red: COLORS.white
           }}
           onPress={handleFormSubmit}
           />
           <View style={{
            flexDirection:'row',
            marginTop:SIZES.radius,
            justifyContent:'center'
           }}>
           <Text style={{color: COLORS.blue,
            fontSize:15,
           }}
           >
           Don't have an account? 
           </Text>
           <TextButton
           label="Sign Up"
           buttonContainerStyle={{
            marginLeft:3,
            backgroundColor:null,
           }}
           labelStyle={{
            color:COLORS.blue,

            fontSize:17,
           }}
           onPress={

            ()=>{
              
                 navigation.navigate('SignUp')
              }

          }
           />
           </View> 

<View style={{
              marginTop:SIZES.radius*15,
             }}>
        

             </View>

      
             </View>
             <Text>{result}</Text>
        </AuthLayout>
    )
}

export default SignIn;