import {
    View,
    Text, SafeAreaView, Image, ScrollView, StyleSheet, StatusBar, TouchableOpacity,TextInput , Linking
} from 'react-native';
import React from 'react';
import { SIZES, icons, COLORS } from '../../constants';
import { Checkbox } from 'react-native-paper';
import { Header } from '../../components/header';
import { IconButton } from '../../components/iconButton';
import { useSelector } from 'react-redux';
export const ContactUs = ({navigation}) =>{
 
    const [email, setEmail]= React.useState('');
    const [firstName,setFirstName] = React.useState('');
    const [lastName, setLastName]= React.useState('');
    const [phone, setPhone] = React.useState('');
    const [enquiry, setEnquiry] = React.useState('');
    const [checked , setChecked ] = React.useState(false);
    const myData = useSelector(state => state.user)
    let id = myData.id;
    let email2 = myData.email;
    console.log(id)
    console.log(email2);
function isEnable() {
    return email!="" && firstName!="" &&lastName!="" && phone!="" &&enquiry!=""
   }


   const addData= ()=>{
    
    fetch("http://192.168.0.102:8000/api/user/enquiry", {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        User_Name:firstName,
        User_LastName:lastName,
        User_email:email,
        User_phone:phone,
        User_enquiry:enquiry,
        User_Consent:checked,
      })
  })
  
      .then((response) => response.json())
      .then((responseData) => {
          console.log(
              "POST Response",
              "Response Body -> " + JSON.stringify(responseData)
          )
      })
      .catch(error => console.log(error.toString()))
  }

    function renderOrder() {
        
        return(<View>
            <View
            style={{
                backgroundColor:COLORS.primary,
                borderTopLeftRadius:40,
                borderTopRightRadius:40,
            }}
            >
             <View
             style={{
                 flexDirection:'row',
                 justifyContent:'space-between',
                 paddingVertical:SIZES.padding*1,
                 paddingHorizontal:SIZES.padding*2.5,
                 borderBottomColor:COLORS.lightGray2,
                 borderBottomWidth:1,
             }}
             >
           <Text style={{
            fontSize:20,
            color:COLORS.blue,
            fontWeight:'bold',
           }}>Contact Head Office</Text>
    </View>
   <View style={{
     paddingVertical:SIZES.padding*1,
     paddingHorizontal:SIZES.padding*2.5,
   }}>
    <View style={{
        flexDirection:'row',
        height:40,
    }}>   
        <Image 
        source={icons.pin}
      style={{
        height:15,
        width:15,
            tintColor:COLORS.blue
        }}/>
        <Text style={{
            paddingLeft:5,
            color:COLORS.blue,
            fontSize:16,
        }}>Ainslie Ave, Glasgow, G52 4HE</Text>
    </View>
    <View style={{
        flexDirection:'row',
        height:40
    }}>   
        <Image 
        source={icons.phone}
      style={{
        
            tintColor:COLORS.blue
        }}/>
        <Text style={{
            paddingLeft:7,
            color:COLORS.blue,
            fontSize:16,
        }}>0141 883 7071</Text>
    </View>
    
    <View style={{
        flexDirection:'row',
        height:30,
        left:5,
    }}>   
        <Image 
        source={icons.email}
      style={{
            height:15,
            width:15,
            tintColor:COLORS.blue
        }}/>
        <Text style={{
            paddingLeft:9,
            color:COLORS.blue,
            fontSize:16,
            top:-3,
        }}>filshill@filshill.co.uk</Text>
        
    </View>
    
<View style={{
    left:4,
    flexDirection:"row"
}}><Text style={{
    color:COLORS.blue,
    fontWeight:'bold',
    fontSize:18,
}}>Join Our Social Community</Text>
</View>
<View style={{
    flexDirection:'row',
    paddingTop:20,
}}>
<View style={{
    paddingLeft:10,
    paddingRight:10,
}}>
    <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/keystores/')}>
<Image source={icons.fb} 
style={{
    height:20,
    width:20,
}}
/>
</TouchableOpacity>
</View>
<View style={{

paddingLeft:10,
paddingRight:10,
}}>
    <TouchableOpacity  onPress={() => Linking.openURL('https://twitter.com/keystores?lang=en')}>
     
<Image source={icons.twitter} 
style={{
    width:20,
    height:20,
    paddingTop:6,
}}
/>
</TouchableOpacity>
</View>
<View style={{
    paddingLeft:10,
    paddingRight:10,
    paddingTop:3,
}}>
    <TouchableOpacity  onPress={() => Linking.openURL('https://www.youtube.com/channel/UChSNVybuSXEksYjHwvm4kkA/channels')}>
<Image source={icons.youtube} 
style={{
    width:20,
    height:20,
}}
/>
</TouchableOpacity>
</View>
</View>
   </View>
   

    </View>       
        </View>)
    }
    function renderForm(){
        return(<View
        style={{
          
            backgroundColor:COLORS.white,
        }}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:23,
                    color:COLORS.blue,
                    paddingLeft:10,
                    paddingTop:20,
                    paddingBottom:20,
                }}>Send Us Your Enquiry</Text>
                <View style={{
                    padding:10,
                }}>
               <TouchableOpacity style={[styles.card, styles.elevation]}>
               <TextInput
        style={{
            borderColor:COLORS.red,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:3,
            fontWeight:'bold',
            fontSize:18,
        }}
        value={firstName}
        placeholder="First Name"
        onChangeText={(val)=>setFirstName(val)}
        /> 
               </TouchableOpacity>
               
               </View>
               <View style={{
                    padding:10,
                }}>
               <TouchableOpacity style={[styles.card, styles.elevation]}>
               <TextInput
        style={{
            borderColor:COLORS.red,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:3,
            fontWeight:'bold',
            fontSize:18,
        }}
        value={lastName}
        placeholder="Last Name"
        onChangeText={(val)=>setLastName(val)}
        /> 
               </TouchableOpacity>
               
               </View>
               <View style={{
                    padding:10,
                }}>
               <TouchableOpacity style={[styles.card, styles.elevation]}>
               <TextInput
        style={{
            borderColor:COLORS.red,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:3,
            fontWeight:'bold',
            fontSize:18,
            
        }}
        value={email}
        placeholder="Email"
        onChangeText={(val)=>setEmail(val)}
        /> 
               </TouchableOpacity>
               
               </View>
               <View style={{
                    padding:10,
                }}>
               <TouchableOpacity style={[styles.card, styles.elevation]}>
               <TextInput
        style={{
            borderColor:COLORS.red,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:3,
            fontWeight:'bold',
            fontSize:18,
        }}
        value={phone}
        placeholder="Phone"
        onChangeText={(val)=>setPhone(val)}
        /> 
               </TouchableOpacity>
               
               </View>
               <View style={{
                    padding:10,
                }}>
               <TouchableOpacity style={[styles.NewCard, styles.elevation]}>
               <TextInput
        style={{
            borderColor:COLORS.red,
            height: 40,
            margin: 12,
            padding:10,
            fontSize:16,
            bottom:3,
            fontWeight:'bold',
            fontSize:18,
        }}
        placeholder="Enquiry"
        value={enquiry}
        onChangeText={(val)=>setEnquiry(val)}
        /> 
               </TouchableOpacity>
               
               </View>
               <View style={{
                    padding:10,
                }}>
             <Text style={{
                 fontWeight:'bold',
                 fontSize:18,   
                 color:'#72747C',
             }}>Consent</Text>
               </View>
               <View style={{
                    padding:10,
                    flexDirection:'row',
                }}>
                    <View style={{
                        bottom:5,
                    }}>
                      <Checkbox
           status={checked ? 'checked' : 'unchecked'}
      onPress={() => {
        setChecked(!checked);
      }}
    />
    </View>
             <Text style={{
                 fontSize:18,   
                 color:'#72747C',
             }}>I agree to the privacy policy</Text>
               </View>
               <View style={{
                    padding:10,
                    alignItems:'center',
                    top:20,
                }}>
               <TouchableOpacity 
               disabled={isEnable()?false:true}
               onPress={()=>addData()}
               style={[styles.cardButton, styles.elevation]}
               >
           <Text style={{
            alignSelf:'center',
            justifyContent:'center',
            top:23,
            fontSize:23,
            color:COLORS.blue
           }}>
            Submit
           </Text>
               </TouchableOpacity>
               </View>
               <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </Text>
            
        </View>)
    }
     
  function renderHeader() {
    return(
      <Header
      title="Contact Us"
    titleStyle={{
        fontWeight:'bold',
        fontSize:15,
        color:COLORS.blue,
    }}
    containerStyle={{
        height:70,
        marginHorizontal:SIZES.padding,
        right:20,
    backgroundColor:COLORS.white,
       paddingTop:20,
    }}
  leftComponent={
      <IconButton 
      icon={icons.back}
      containerStyle={{
          width:50,
          height:50,
          justifyContent:'center',
          alignItems:'center',
          backgroundColor:COLORS.white,
      }}
    iconStyle={{
        tintColor:'black'
    }}
    onPress={()=>navigation.goBack()}
      />
  }
    />)
}
    
    
    return(
    <SafeAreaView>
    <View style={{
        backgroundColor:COLORS.white,
    }}>
         {renderHeader()}
         <ScrollView style={styles.scrollView}>
        {renderOrder()}
        {renderForm()}
      
        <TouchableOpacity onPress={()=>navigation.navigate('NewsLetter')}>
  <Text style={{
    fontSize:15,
    fontWeight:'bold',
    color:COLORS.blue,
    paddingLeft:10,
    paddingBottom:5,
  }}>Get Our NewsLetter!</Text>
  </TouchableOpacity>
<Text>HELOOWHELOOWHELOOWHELOOWHELOOWHELOOW

</Text>
        </ScrollView>
    </View>
    </SafeAreaView>)

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: StatusBar.currentHeight,
    },
    scrollView: {
        backgroundColor:COLORS.white,
  
      
    },
    text: {
      fontSize: 42,
      color:'transparent'
    },
      card: {
        backgroundColor: 'white',
        borderRadius: 0,
        width: '100%',
        height:60,
      },
      cardButton: {
        backgroundColor: 'white',
        borderRadius: 50,
        width: '38%',
        height:70,
      },
      NewCard: {
        backgroundColor: 'white',
        borderRadius: 0,
        width: '100%',
        height:130,
      },
      elevation: {
        elevation: 5,
        shadowColor: COLORS.blue,
        
      },
  });