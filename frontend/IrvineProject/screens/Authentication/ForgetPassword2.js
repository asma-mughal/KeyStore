import React, {useState, useEffect} from 'react';
import {
    View, Text, Button, TextInput, ScrollView , SafeAreaView
} from 'react-native';
import Toast from 'react-native-toast-message';
import { styles, toastConfig } from '../../style';
import { AuthLayout } from './AuthLayout';
import { utils } from '../../utils';
import { FormInput} from '../../components/formInput';
import { TextButton} from '../../components/TextButton';
import { COLORS, icons, SIZES } from '../../constants';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
export const ForgetPassword2 = ({route}) =>{
  
 const [password, setPassword] = useState("")
 const [password2, setPassword2] = useState("")
 const [changeUserPassword] = useChangeUserPasswordMutation()

 const clearTextInput = () => {
   setPassword('')
   setPassword2('')
 }
 const [useremail, setEmail] =useState('');

 useEffect(() => {
   let {email} = route.params;
   setEmail(email)
 }, [])

 const handleFormSubmit = async () => {
   const formdata = { password, password2 }
   const { access } = useremail
   const res = await changeUserPassword({ formdata, access })
   if (res.data) {
     clearTextInput()
     Toast.show({
       type: 'done',
       position: 'top',
       topOffset: 0,
       text1: res.data.msg
     });
   }
   if (res.error) {
     Toast.show({
       type: 'warning',
       position: 'top',
       topOffset: 0,
       ...(res.error.data.errors.password ? { text1: res.error.data.errors.password[0] } : ''),
       ...(res.error.data.errors.password2 ? { text1: res.error.data.errors.password2[0] } : ''),
       ...(res.error.data.errors.non_field_errors ? { text1: res.error.data.errors.non_field_errors[0] } : ''),
       ...(res.error.data.errors.messages ? { text1: res.error.data.errors.messages[0].message } : ''),
     });
   }
 }
    return(	<>
        <SafeAreaView>
      <Toast config={toastConfig} />
      <ScrollView keyboardShouldPersistTaps='handled'>
        <View style={{ marginHorizontal: 30 }}>
          <View style={[styles.inputWithLabel, { marginBottom: 15 }]}>
            <Text style={styles.labelText}>New Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Write Your New Password"
              secureTextEntry={true}
            />
          </View>
          <View style={styles.inputWithLabel}>
            <Text style={styles.labelText}>Confirm New Password</Text>
            <TextInput
              style={styles.input}
              value={password2}
              onChangeText={setPassword2}
              placeholder="Write Your New Confirm Password"
              secureTextEntry={true}
            />
          </View>
          <View style={{ width: 200, alignSelf: 'center', margin: 20 }}>
            <Button title="Save" onPress={handleFormSubmit} color='purple' />
          </View>
        </View >
      </ScrollView>
    </SafeAreaView>
</>)
}