import React from "react";
import { View, Text, StyleSheet, Image ,Animated, ScrollView, TouchableOpacity} from 'react-native';
import {COLORS, SIZES, icons, constants} from '../../constants';
import { Header } from '../../components/header';
import {IconButton } from '../../components/iconButton';
import { TextButton } from "../../components/TextButton";


export const About= ({navigation, screenName}) =>{
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

  
    function renderHeader() {
        return(
          <Header
          title="About Us"
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
function renderPicture()
{
    return(   
         <View style={{
        backgroundColor:COLORS.primary,
        paddingLeft:20,
        paddingBottom:10,
        paddingTop:10,
    }}>
        <View style={{
            backgroundColor:COLORS.primary,
            paddingLeft:10,
            paddingBottom:4,
            flexDirection:'row', 
            alignItems:'center',
            justifyContent:'center',
             }}>
            <Text style={{
                fontSize:23,
                fontWeight:'bold',
                color:COLORS.blue,
            }}>KeyStore. Scotland's</Text>
            <Text style={{
                fontSize:23,
                fontWeight:'bold',
                color:COLORS.red,
            }}> #1 </Text>
    </View>
    <View style={{
     flexDirection:'row',
     alignItems:'center', 
     justifyContent:'center'
    }}>
 <Text style={{
                fontSize:23,
                fontWeight:'bold',
                color:COLORS.blue,
            }}>Convenience</Text>
            
 <Text style={{
                fontSize:23,
                fontWeight:'bold',
                color:COLORS.blue,
            }}> Franchise!</Text>
    </View>
    </View>
    )

}
function renderList() {
    return(
        <Animated.FlatList 
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={constants.aboutUs_screens}
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
           keyExtractor ={(item)=> `${item.id}`}
           renderItem = {({item, index})=>{
               return(<View style={{
                   width:SIZES.width,}}>
              <View style={{
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
                  source={item.bannerImage}
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
                      paddingLeft:20,
                  }}>{item.title}</Text>
                  
                  <Text style={{
                      marginTop:SIZES.radius,
                      color:COLORS.blue,
                      paddingHorizontal:SIZES.padding,
                      color:COLORS.gray,
                      }}>{item.description}</Text>
               {item.button==true && 
               <View style={{
                paddingLeft:30,
                paddingRight:30,
               }}>
               <TextButton 
           label= {item.colorButton==true? "View Our Offers" : "Store Locator"}
           buttonContainerStyle={{
            height:40,
            alignItems:'center',
            marginTop:SIZES.padding/2,
            borderRadius:SIZES.radius,
            backgroundColor:item.colorButton==true? COLORS.blue : COLORS.red
           }}
           color= {item.colorButton==true? COLORS.white : COLORS.white}
            onPress={
              ()=>{ /*addData()*/
              navigation.navigate('Home')
              }}
           />  


           </View> 
                     
               }
                  <View style={{
                    paddingTop:20,
                  }}> 
                  <Dots />
                  </View>
                  </View>
                   </View>)
           }  }
            />
    )
}

function renderLastSection(){
    return (<View>
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
        }}>Convenience Franchise for</Text>
        <Text style={{
            fontSize:23,
            fontWeight:'bold',
            color:COLORS.blue,
            alignSelf:'center'
        }}>for Retailers & Consumers</Text>
        <View style={{
            flex:1,
            padding:25,
        }}>
       <Text style={{
        color:COLORS.gray,
       }}>The convenience sector has become one of the biggest growth areas in retail. We understand that consumers do not have the time to do big shoppings, and that they don’t want to waste food or money. There is a real move to daily shopping as was shown in our own independent consumer research, where 66% of those interviewed stated that they visit the shop every day (many even more than once a day). This figure is replicated across the country. Our KeyStore branded symbol group will always remain ahead of the curve and we are here to help our customers understand all the trends and innovations that are happening in the sector.</Text>
          <TextButton
           label="Become A KeyStore Retailer!"
           buttonContainerStyle={{
           	height:40,
           	alignItems:'center',
           	marginTop:SIZES.padding,
           	borderRadius:SIZES.radius,
           	backgroundColor: COLORS.red,
           }}
           labelStyle={{
            color:COLORS.white,

            fontSize:17,
           }}
           />
        </View>
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

return(<View style={styles.mainContainer}>
     {renderHeader()}
    <ScrollView>
   {renderPicture()}
   {renderList()}
   {renderLastSection()}
   </ScrollView>
</View>)
}
const styles = StyleSheet.create({
    mainContainer:{
    flex:1,
    backgroundColor:COLORS.white,
    },
    TextHeading:{
 fontWeight:'bold',
        fontSize:19,
        alignSelf:'center',
      },
      scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
      },
      text: {
        fontSize: 42,
      },
});