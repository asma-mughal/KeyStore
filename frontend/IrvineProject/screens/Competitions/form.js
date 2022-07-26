import React from 'react';
 import {
  Text,View,TouchableOpacity, Image,ScrollView,Animated,StyleSheet,StatusBar, TextInput} from 'react-native';  
import { TextButton} from '../../components/TextButton';
import { SIZES, COLORS, constants } from '../../constants';
import { Checkbox } from 'react-native-paper';
import CountryPicker from 'rn-country-dropdown-picker';
import Toast from 'react-native-toast-message';
import axios from 'axios';
export const Form = ({navigation, route}) =>{

    const [Address, setAddress]= React.useState('');
    const [AddressLine, setAddressLine]= React.useState('');
    const [firstName,setFirstName] = React.useState('');
    const [lastName, setLastName]= React.useState('');
    const [phone, setPhone] = React.useState('');
    const [city, setCity] = React.useState('');
    const [postal, setPostal] = React.useState('');
    const [checked , setChecked ] = React.useState(false);
    const [country, setCountry] = React.useState('');
    const [state, setState] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [nearest, setNearest] = React.useState('');
    
    const [cmp, setCmp] = React.useState([]);
    React.useEffect(()=>{
      async function getAllCompetitions()
      {
        try{
         const comp= await axios.get('http://192.168.0.102:8000/api/user/cmp')
         setCmp(comp.data);
        }catch(error){
         console.log(error)
        }
      }
      getAllCompetitions()
    
    }, [])
    const addData= ()=>{
        fetch("http://192.168.0.102:8000/api/user/comp", {
          method: 'POST',
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            User_FirstName:firstName,
            User_LastName:lastName,
            User_Street_Address:Address,
            User_Address_Line:AddressLine,
            User_City:city,
            User_State:state,
            User_Zip:postal,
            User_Country:country,
            User_email:email,
            User_phone:phone,
            User_Location:nearest,
            User_consent:checked
          })
      })
      
          .then((response) => response.json())
          .then((responseData) => {
              console.log(
                  "POST Response",
                  "Response Body -> " + JSON.stringify(responseData)
              )
          })
          .done();
      }

    const scrollX =React.useRef(new Animated.Value(0)).current;
    const flatListRef = React.useRef();
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const onViewChangeRef= React.useRef(({viewableItems, changed})=>{
    setCurrentIndex(viewableItems[0].index)
    })

    const Dots = () =>{

        const dotPosition = Animated.divide(scrollX, SIZES.width)
    return(
        <View style={{
            flexDirection:'row',
            alignItems:'center', 
            justifyContent:'center',

        }}>
         {constants.onboarding_screens.map((item, index)=>{
             const dotColor = dotPosition.interpolate({
                 inputRange: [index-1,index, index+1],
                 outputRange:[COLORS.darkGray, COLORS.blue,COLORS.darkGray],
                 extrapolate:"clamp"
             })
             const dotWidth = dotPosition.interpolate({
                inputRange: [index-1,index, index+1],
                outputRange:[10,20,10],
                extrapolate:"clamp"
            })
             return(
                 <Animated.View 
                 key={`dot-${index}`}
                 style={{
                     borderRadius:5,
                     marginHorizontal:6,
                     width:dotWidth,
                     height:10,
                     backgroundColor:dotColor,
                 }}
                 />
                     
             )
         }) }
        </View>
    )
    }
  
    function isEnable() {
        return email!="" && firstName!="" &&lastName!="" && phone!="" 
       }
     function headingSection(){
        return(
            <View style={{
                paddingBottom:25,
            }}>
                <Text style={{
 fontSize:23,
 fontWeight:'bold',
 color:COLORS.blue,
 alignSelf:'center',
        }}>We’re committed to being best</Text>
        <Text style={{
            fontSize:23,
            fontWeight:'bold',
            color:COLORS.blue,
            alignSelf:'center'
        }}>{title}</Text>
        <Text  style={{
 fontSize:17,
 fontWeight:'bold',
 alignSelf:'center',
 paddingTop:10,
 color:COLORS.blue,
        }}>Competition Deadline:<Text style={{
            color:COLORS.red,
        }}>{date}</Text></Text>
            </View>
        )
     }
function renderImage(){
    return(<View style={{
        backgroundColor:'#F0F0F0',
        alignItems:'center',
        paddingTop:20,
    }}>
     <Image source={photo} />
    </View>)
}
function renderForm(){
    return(<View
    style={{
      
        backgroundColor:COLORS.white,
    }}>
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
        value={Address}
        placeholder="Street Address"
        onChangeText={(val)=>setAddress(val)}
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
        placeholder="Address Line 2"
        value={AddressLine}
        onChangeText={(val)=>setAddressLine(val)}
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
        value={city}
        placeholder="City"
        onChangeText={(val)=>setCity(val)}
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
        value={state}
        placeholder="State/Province/Region"
        onChangeText={(val)=>setState(val)}
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
        value={postal}
        placeholder="ZIP/Postal Code"
        onChangeText={(val)=>setPostal(val)}
        /> 
               </TouchableOpacity>
               </View>
               
               <View style={{
                    padding:10,
                }}>
                    <Text style={{
                         fontWeight:'bold',
                         fontSize:18,
                         paddingTop:3,
                         paddingBottom:3,
                         color:COLORS.gray,
                    }}>Select Country</Text>
               <TouchableOpacity 
               style={[styles.card, styles.elevation,styles.NewRow, {
                height:150,
               }]}>
               <CountryPicker selectedItem={handleSelection}
               value={country}
               InputFieldStyle	={{
                backgroundColor:'transparent', 
               }}
               Placeholder="  "
               
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
        value={nearest}
        placeholder="Nearest KeyStore Location"
        onChangeText={(val)=>setNearest(val)}
        /> 
               </TouchableOpacity>
               <Text style={{
                paddingTop:8,
                fontSize:17,
                color:COLORS.gray,
               }}>The KeyStore the prize will be collected from.</Text>
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
                    padding:6,
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
               <View style={{
                paddingTop:40,
                alignItems:'center'
               }}>
               <Text style={{
                fontSize:18,
                color:COLORS.gray,
               }}>Nearest Store: Please enable Geolocation</Text>
               </View>
               <View style={{
                padding:10,
               }}>
               <TextButton 
           label= "Find Nearest KeyStore"
           labelStyle={{
            color:COLORS.white,
        }}

           buttonContainerStyle={{
            height:40,
            alignItems:'center',
            marginTop:SIZES.padding/2,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.red
           }}
            onPress={
              ()=>{ /*addData()*/
              navigation.navigate('Home')
              }}
           />
           </View>
           <View style={{
            padding:10,
           }}>
            <Text style={{
                color:COLORS.gray,
                fontSize:18,
                textAlign:'center',
                fontStyle:'italic',
            }}>* You must collect your prize from your nearest KeyStore.
If the above store does not look correct, please search our locator manually.</Text>
           </View>

               
            
    </View>)
}
    const [title, setTitle]  = React.useState('');
    const [photo, setPhoto] = React.useState('');
    const [date, setDate] = React.useState('');
    React.useEffect(() => {
        let { title, photo, date} = route.params;
        setTitle(title);
        setPhoto(photo);
        setDate(date);
    })

    function renderFooter() {
        return(<View style={{
            height:160,
        }}>
      <View style={{
          flex:1,
          justifyContent:'center',
      }}>
     <Dots />
      </View>
    
       {currentIndex == constants.onboarding_screens.length -1 && 
       <View style={{
           paddingHorizontal: SIZES.padding,
           marginVertical: SIZES.padding,
       }}>
          
       </View>
       }
        </View>)
    }
    function renderHeadingForm() {
        return(<View style={{
            paddingTop:25,
        }}>
         <Text style={{
            color:COLORS.gray,
            fontSize:19,
            textAlign:'center',
         }}>Win an Xbox Series S with KeyStore & Lucozade Energy*</Text>
        </View>)
    }
    function renderMoreCompetitions(){
        return(<View>
      <View style={{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
      }}>
      <View style={{
        width:40,
        backgroundColor:COLORS.red,
        height:1.5,
      }}><Text style={{
        color:'transparent'
      }}>I am 1</Text></View>
      <View style={{
        width:190,
        
      }}><Text  style={{
        fontSize:21,
        fontWeight:'bold',
        color:COLORS.blue,
        alignSelf:'center'}}>More Competitions</Text></View>
      <View style={{
        width:40,
        backgroundColor:COLORS.red, 
        height:1.5,
        top:1,
      }}><Text style={{
        color:'transparent'
      }}>I am 3</Text></View>
      </View>
        </View>)
    }


    function handleSelection(e) {
        setCountry(e.country.toString())
      }
    return(
<View style={{
    flex:1,
    backgroundColor:COLORS.white,
    paddingTop:30,
}}>
    <ScrollView>
   {headingSection()}
   {renderImage()}
   {renderHeadingForm()}
   {renderForm()}
   {renderMoreCompetitions()}
   <Animated.FlatList 
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={cmp}
            scrollEventThrottle={16}
            snapToAlignment="center"
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
                [
                    {nativeEvent : {contentOffset: {x:scrollX} }}
                ],
                {useNativeDriver:false}
            )}
           onViewableItemsChanged= {onViewChangeRef.current}
           renderItem = {({item, index})=>{
               return(<View style={{
                   width:SIZES.width,

               }}>
              <View style={{
                  flex:3,
              }}>
                  <View
                 
                  style={{
                      flex:1,
                      alignItems:'center',
                      justifyContent:'flex-end',
                      height:index == 1 ? '92%': '100%',
                      width:'100%',
                  }}
                 >
                  <Image
                  source={{uri:item.cmp_image}}
                  resizeMode="contain"
                  style={{
                      width:SIZES.width * 0.8,
                      height:SIZES.width * 0.8,
                      marginBottom:-SIZES.padding,
                  }}
                  />
                  </View>
              </View>
              <View style={{
                  flex:1,
                  marginTop:30,
             
                paddingHorizontal:SIZES.radius,
              }}>
                  <Text style={{
                      fontSize:25,
                      fontWeight:'bold',
                      color:COLORS.blue,
                  }}>{item.cmp_title}</Text>
                  
                  <Text style={{
                    color:COLORS.red,
                    fontSize:16, 
                    paddingTop:3,
                }}>Deadline: <Text style={{
                    color:COLORS.blue,
                }}>{item.cmp_deadline}</Text></Text>
                  </View>
                   </View>)
           }  }
            />
              {renderFooter()}
   </ScrollView>
</View>
    )
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
      color:COLORS.transparent
    },
      card: {
        backgroundColor: 'white',
        borderRadius: 0,
        width: '100%',
        height:60,
      },
      cardButton: {
        backgroundColor: '#F0F0F0',
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
      NewRow:{
       flexDirection:'row',
      },
  });