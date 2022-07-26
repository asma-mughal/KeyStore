import {
    View,
    Text, SafeAreaView, StyleSheet, ScrollView
} from 'react-native';
import React from 'react';
import { TextIconButton} from '../../components/TextIconButton';
import { COLORS, icons, SIZES } from '../../constants';
import { removeToken } from '../../services/AsyncStorageService';
import {  useSelector } from 'react-redux';
import SignIn from '../Authentication/SignIn';
export const User = ({navigation, route}) =>{ 
  const myData = useSelector(state => state.user)
  
  const myAccessToken = useSelector(state => state.auth)
  const handleLogout = async () => {
    await removeToken()
    navigation.navigate('SignIn')    
    return <SignIn />
    
      }
  
function renderOptions() {
return(<View style={{
  paddingLeft:25,
  flexDirection:'column', 
  
}}>
  <View style={{
    
  }}>
<Text style={{
  color:COLORS.white
}}>{myData.email}</Text>
  </View>
  <TextIconButton 
containerStyle ={{
  height:70,
  width:180,
  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.terms}
iconPosition="LEFT"
iconStyle={{
  tintColor:COLORS.primary
}}
label="Terms and Conditions"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
onPress={()=>navigation.navigate("Privacy")}
         />
<View style={{right:13,}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,
  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.privacy}
iconPosition="LEFT"
iconStyle={{
  tintColor:COLORS.primary,
}}
label="Privacy and Policy"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}

onPress={()=>navigation.navigate("Terms")}
         />
</View>
<View style={{right:'9.5%',}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,

  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.email}
iconPosition="LEFT"
iconStyle={{

  tintColor:COLORS.primary,
}}
label="News Letter"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
onPress={()=>navigation.navigate("NewsLetter")}
         />
</View>

<View style={{right:'5.5%',}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,

  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.fund}
iconPosition="LEFT"
iconStyle={{

  tintColor:COLORS.primary,
}}
label="Community Fund"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
onPress={()=>navigation.navigate("CommunityFund")}
         />
</View>
<View style={{right:'11%',}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,

  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.call}
iconPosition="LEFT"
iconStyle={{

  tintColor:COLORS.primary,
}}
label="Contact Us"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
onPress={()=>navigation.navigate("ContactUs")}
         />
</View>
<View style={{right:'8.5%',}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,
  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.trophy}
iconPosition="LEFT"
iconStyle={{
  tintColor:COLORS.primary,
}}
label="Competitions"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
onPress={()=>navigation.navigate("Competitions")}
         />
         </View>
 <View style={{right:'16.5%',}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,
  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.info}
iconPosition="LEFT"
iconStyle={{

  tintColor:COLORS.primary,
}}
label="About"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
onPress={()=>navigation.navigate("About")}
         />
</View>        
<View style={{right:'15.5%',}}>
<TextIconButton 
containerStyle ={{
  height:70,
  width:180,
  alignItems:'center', 
  borderRadius:SIZES.radius,
  backgroundColor:null,
}}
icon ={icons.logout}
iconPosition="LEFT"
iconStyle={{
  tintColor:COLORS.primary,
}}
onPress={handleLogout}
label="Logout"
 labelStyle={{
  marginLeft:SIZES.radius,
  color:COLORS.white,
  fontSize:17,
}}
         />

</View>
</View>)
}

return(<View style={styles.container}>
<SafeAreaView>
<Text style={styles.headingOne}>Accounts</Text>

<ScrollView>
  {renderOptions()}

</ScrollView>

</SafeAreaView>
	</View>)
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:30,
    backgroundColor:COLORS.blue
  },
  headingOne:{
  	fontSize:20, 
  	fontWeight:'bold',
    color:COLORS.white,
    padding:20,
  },
  text: {
    fontSize: 42,
  },
});