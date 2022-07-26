import React, { useCallback }  from 'react';
 import {
  Text,View,Image,StyleSheet,TouchableOpacity,Linking,FlatList, ScrollView, } from 'react-native';  
import { Header } from '../../components/header';
import { IconButton } from '../../components/iconButton';
import { icons, images, SIZES, COLORS, constants } from '../../constants';
export const Download = ({navigation}) =>{
    const supportedURL = "https://www.keystore.co.uk/wp-content/uploads/2019/05/KSP8-Express-2022.pdf";
    const supported2ndURL = "https://www.keystore.co.uk/wp-content/uploads/2019/05/KSP8-Express-2022.pdf";
    const supported3rdURL = "https://www.keystore.co.uk/wp-content/uploads/2019/05/KSMORE-P8-2022.pdf"; 
    const OpenURLButton = ({ url, children }) => {
        const handlePress = useCallback(async () => {
          // Checking if the link is supported for links with custom URL scheme.
          const supported = await Linking.canOpenURL(url);
        const support2nd = await Linking.canOpenURL(url);
          if (supported) {
            await Linking.openURL(url);
          } else {
            Alert.alert(`Don't know how to open this URL: ${url}`);
          }
        }, [url]);
      
        return <TouchableOpacity title={children}
        
        onPress={handlePress}><Text style={{
        color:COLORS.gray  
        }}>
            Download here
            </Text></TouchableOpacity>;
      };
      function renderHeader() {
        return(
          <Header
          title="Downloads"
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
        return( <View style={{
            top: Platform.OS === 'ios' ? 0 : 40,
            padding:SIZES.padding,
             paddingBottom:40,
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
                }}>Leaflets</Text>
        </View>)
    }
    function renderRestaurantList() {
        const Item = ({ title, photo, download}) => (
            <View style={{
                paddingTop:30,
                paddingLeft:20,
                paddingRight:20,
            }}><View
                      style={{
                        elevation:4,
                        borderRadius:10,
                        marginBottom:SIZES.padding/2,
                        }}
                ><Image
                         source={photo}
                         resizeMode="cover"
                         style={{
                             width: "100%",
                             height: 200,
                             borderRadius: SIZES.radius
                         }}
                     />
                </View> 
                <Text style={{
                    color:COLORS.blue,
                    fontSize:20,
                    fontWeight:'bold'
                }}>{title}</Text> 
                <OpenURLButton url=
                {download==1 && supportedURL || download==2 && supported2ndURL || download==3 && supported3rdURL}>Open 2nd Url</OpenURLButton>
            </View>
          );
          
        const renderItem = ({ item }) => (
            <Item title={item.title}
            photo= {item.bannerImage}
            download ={item.download}
            />
          )
       return(<View>

              <FlatList
        data={constants.download_screens}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
       </View>)
    } 
  return (
       <View style={{
        backgroundColor:COLORS.white,
        flex:1,
       }}>
         {renderHeader()}  
           <ScrollView>
         
     {renderHeading()}
     {renderRestaurantList()}
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
             </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
   
    
  });