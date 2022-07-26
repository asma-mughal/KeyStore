import {
    View,
    Text,  TextInput , SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import { COLORS , SIZES, icons} from '../../constants';
import { IconButton } from '../../components/iconButton';
import { CheckBox } from '@rneui/themed';
import { addEnquiry } from '../../services/userAuthApi';
import { useSelector } from 'react-redux';
export const NewsLetter = ({navigation}) =>{
    const [email, setEmail]= React.useState('');
    const [firstName,setFirstName] = React.useState('');
    const [lastName, setLastName]= React.useState(''); 
    const [check1, setCheck1] = useState(false);
    function isEnable() {
        return email!="" && firstName!="" && lastName!="" && check1!=false
    }
    const myData = useSelector(state => state.user)
    let id = myData.id;
    let email2 = myData.email;
    console.log(id)
    console.log(email2);
 function renderForm(){
        return(
            <View>
                <View style={{
                    padding:20,  
                }}>
    
      <TouchableOpacity style={
        styles.input
      }>
        <TextInput
        value={firstName} 
        style={{
            borderColor:COLORS.red,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:2,
            color:COLORS.white
        }}
        placeholder="First Name"
        placeholderTextColor={COLORS.white}
        onChangeText={(val)=>setFirstName(val)}
        /> 
      </TouchableOpacity>
      <TouchableOpacity style={
        styles.input
      }>
        <TextInput 
        value={lastName}
        style={{
            borderColor:COLORS.white,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:2,
            color:COLORS.white,
        }}
        placeholder="Last Name"
        
        placeholderTextColor={COLORS.white}
        onChangeText={(val)=>setLastName(val)}
        /> 
      </TouchableOpacity>
      <TouchableOpacity style={
        styles.input
      }>
        <TextInput 
        style={{
            
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:2,
            color:COLORS.white,
        }}
        value={email}
        placeholder="Email"
        placeholderTextColor={COLORS.white}
        onChangeText={(val)=>setEmail(val)}
        /> 
      </TouchableOpacity> 
            </View>
            <View style={{
                flexDirection:'row',
                paddingLeft:5,
            }}>
       <CheckBox
      checked={check1}
      onPress={() => setCheck1(!check1)}
      containerStyle={{
        backgroundColor:'transparent'
      }}
    />
    <Text
    style={{
        color:COLORS.white,
        marginTop:15,
        left:-15, 
        paddingRight:10,
        
    }}>I agree to allow KeyStore to send me their 3 weekly newsletter or other marketing.
    <Text style={{
        color:COLORS.red
    }}>*</Text>
    </Text></View>
    <View style={{
              paddingLeft:20,
              top:10,
            }}>
                <TouchableOpacity
disabled={isEnable()? false:true}

                onPress={()=>addEnquiry(firstName, lastName,email,check1, myData)}
                style={{
 height: 60,
 margin: 12,
 borderWidth: 1,
 borderRadius:30,
 borderColor:COLORS.white,
 width:'75%',
 justifyContent:'center',
 alignItems:'center'
                }}>
                 <Text style={{
                    fontSize:18,
                    fontWeight:'bold',
                    color:COLORS.white,
                 }}>Submit</Text>
                </TouchableOpacity>
            </View>
            </View>
            
        )
    }
    function renderFirstSection(){
        return(
            <View
            style={{
                height:80,
                flexDirection:'row',
                backgroundColor:COLORS.blue,
                paddingTop:30,
            }}
            >
                 <IconButton 
              icon={icons.back}
              containerStyle={{
                  width:50,
                  height:50,
                  justifyContent:'center',
                  alignItems:'center',
                  backgroundColor:COLORS.blue,
              }}
            iconStyle={{
                tintColor:COLORS.white
            }}
            onPress={()=>navigation.goBack()}
              />
            <View style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center',
                backgroundColor:COLORS.blue,
            }}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View
                style={{
                    height:50,
                    alignItems:'center',
                    justifyContent:'center',
                    paddingHorizontal:SIZES.padding*3,
                    borderRadius:SIZES.radius,
                    backgroundColor:COLORS.blue
                }}
                 >
        <Text
        style={{
            fontWeight:'bold',
            fontSize:15,
            textAlign:'center',
            left:-20,
            color: COLORS.white,
        }} 
            >News Letter</Text>
        </View>
        
        </View>
        
            </View>
            
            </View>
        )
    }
    
return(

    <SafeAreaView style={{
        backgroundColor:COLORS.blue,
        flex:1,
    }}>
       {renderFirstSection()}
        <View style={{
            paddingLeft:20,
            paddingTop:20,
            paddingBottom:10,
            alignItems:'center',
            backgroundColor:COLORS.blue,
            
        }}>
        <Text
        style={{
            fontWeight:'bold',
            fontSize:17,
           color:COLORS.white,
        }}
        >Sign-up to our newsletter to notified of new offers, 
        competitions, and much much more!</Text></View>
        <View style={{
             paddingLeft:20,
             alignItems:'center',
        }}><Text  style={{
            fontWeight:'bold',
            fontSize:15,
           color:COLORS.white,
        }}> You won’t want to miss it!</Text></View>
        {renderForm()}
    
    </SafeAreaView>
)
}
const styles = StyleSheet.create({
    input: {
      height: 60,
      margin: 12,
      borderWidth: 1,
      borderRadius:30,
      borderColor:COLORS.white,
      width:'80%',
    },
  });