import React from 'react';
 import {
  Text,View,TouchableOpacity,FlatList, ScrollView,ActivityIndicator,
  ImageBackground,
} from 'react-native';  
import { TextButton} from '../../components/TextButton';
import { icons, images, SIZES, COLORS, constants } from '../../constants';
import { Header } from '../../components/header';
import axios from 'axios';
import { IconButton } from '../../components/iconButton';
export const Competitions = ({navigation}) =>{
  const [isloading, setIsLoading] = React.useState(true);
    const [cmp, setCmp] = React.useState([]);
    function myfunction(){
      setTimeout(() => {
        setIsLoading(false)
        }, 5000);
    }
    React.useEffect(()=>{
      async function getAllCompetitions()
      {
        try{
         const comp= await axios.get('http://192.168.0.105:8000/api/user/cmp')
         setCmp(comp.data);
        }catch(error){
         console.log(error)
        }
      }
      getAllCompetitions()
    
    }, [])
    function renderHeader() {
        return(
          <Header
          title="Competitions"
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
        
    function renderHeading(){
    return(
        <View style={{
            top: Platform.OS === 'ios' ? 0 : 40,
            padding:SIZES.padding,
             paddingBottom:58,
        }}>
        <Text
        style={{
            color:COLORS.blue,
            fontSize:16,
        }}
        >Each month you will be able to download our full promotional offer leaflets for KeyStore Express, KeyStore & KeyStore More. Please visit our downloads page regularly to see what else is available.</Text>
        <Text  style={{
                    color:COLORS.red,
                    fontSize:23,
                    fontWeight:'bold',
                    top:15,
                }}>Open Competitions</Text>
        </View>)
    }
    function renderCompetitionList() {
        const Item = ({ title, photo, date}) => (
            <View style={{
                paddingTop:30,
                paddingLeft:20,
                paddingRight:20,
            }}>
                <View
                      style={{
                        elevation:4,
                        borderRadius:10,
                        marginBottom:SIZES.padding/2,
                        }}
                ><TouchableOpacity>
                    <ImageBackground
                         source={{uri:photo}}
                         resizeMode="cover"
                         style={{
                             width: "100%",
                             height: 200,
                             borderRadius: SIZES.radius,
                         }}
                     >
                        <View style={{
                            paddingLeft:12,
                        }}>
                      <TextButton 
           label= "Enter Competition"
           labelStyle={{
            color:COLORS.blue,
        }}
           buttonContainerStyle={{
            height:50,
            alignItems:'center',
            marginTop:SIZES.padding/2,
            borderRadius:SIZES.radius*2,
            backgroundColor:COLORS.white,
            width:180,
            borderWidth:1,
            borderColor:COLORS.black,
            top:120,
            
           }}
            onPress={
              ()=>{ /*addData()*/
              navigation.navigate('Form', {title, photo, date})
              }}
           /></View>

                     </ImageBackground>
                    
                     </TouchableOpacity>
                       
                </View> 
                <Text style={{
                    color:COLORS.blue,
                    fontSize:20,
                    fontWeight:'bold',
                    paddingTop:5,
                }}>{title}</Text> 
                <Text style={{
                    color:COLORS.red,
                    fontSize:16, 
                    paddingTop:3,
                }}>Deadline: <Text style={{
                    color:COLORS.blue,
                }}>{date}</Text></Text>
            </View>
          );
          
        const renderItem = ({ item }) => (
            <Item title={item.cmp_title}
            photo= {item.cmp_image}
            date={item.cmp_deadline}
            />
          )
       return(<View>
        <FlatList
        data={cmp}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <View style={{
        padding:20,
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate('NewsLetter')}>
      <Text style={{
        fontSize:15,
        fontWeight:'bold',
        color:COLORS.blue,
      }}>Get Our NewsLetter!</Text>
      </TouchableOpacity>
      </View>
       </View>)
    } 
return(<View style={{
    backgroundColor:COLORS.white,
    flex:1,
}}>
  
  {renderHeader()}
  {isloading ? (
    <>
    <View style={{
      marginTop:90,
    }}>
      
       <ActivityIndicator size="small" color={COLORS.red}/>
    </View>
  {
   myfunction()
}
    </>
  ) : ( 
    <>
     <ScrollView>
     {renderHeading()}
     {renderCompetitionList()}
     </ScrollView>
    </>
  )}
    
</View>)
}