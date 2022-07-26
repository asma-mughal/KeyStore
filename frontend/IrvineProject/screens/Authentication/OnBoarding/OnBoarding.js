import React from 'react';
import {
    View,
    Text, ImageBackground, Image,Animated
} from 'react-native';
import { TextButton } from '../../../components/TextButton';
import { COLORS, SIZES, images, constants} from '../../../constants';
export const OnBoarding = ({navigation}) => {
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
  
    function renderHeaderLogo(){
        return(<View style={{
            position:'absolute',
            top:SIZES.height >800 ?50:25,
            left:0,
            right:0,
            alignItems:'center',
            justifyContent:'center',
        }}>
        <Image 
        source={images.logo}
        resizeMode="contain"
        style={{
            width:SIZES.width * 0.5,
            height:120,
        }}
        />
        </View>)
    }
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
      {currentIndex<constants.onboarding_screens.length-1 && 
      <View style={{
          flexDirection:'row',
          justifyContent:'space-between',
          paddingHorizontal:SIZES.padding,
          marginVertical:SIZES.padding
      }}>
          <TextButton  label="Skip"
          buttonContainerStyle={{
              backgroundColor: null
          }}
          labelStyle={{
              color:COLORS.blue,
          }}
          onPress={()=>navigation.navigate("SignIn")}
          />
          <TextButton label="Next"
          buttonContainerStyle={{
        height:40,
        width:200,
        borderRadius:SIZES.radius,
        }}
        labelStyle={{
            color:COLORS.white,
        }}
        onPress={()=>{
         flatListRef?.current?.scrollToIndex({
               index:currentIndex+1,
               animated:true
           })
        }}/>
      </View>
      }
       {currentIndex == constants.onboarding_screens.length -1 && 
       <View style={{
           paddingHorizontal: SIZES.padding,
           marginVertical: SIZES.padding,
       }}>
           <TextButton 
           label="Let's Get Started"
           buttonContainerStyle={{
               height:40    ,
               borderRadius:SIZES.radius,
           }}
           onPress={()=>navigation.replace("SignIn")}
           />
       </View>
       }
        </View>)
    }
    return (
        <View
            style={{
                flex: 1,
                backgroundColor:COLORS.white,
            }}
        >
            {renderHeaderLogo()}
            <Animated.FlatList 
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={constants.onboarding_screens}
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
                alignItems:'center',
                justifyContent:'center',
                paddingHorizontal:SIZES.radius,
              }}>
                  <Text style={{
                      fontSize:25,
                      fontWeight:'bold',
                      color:COLORS.blue,
                  }}>{item.title}</Text>
                  
                  <Text style={{
                      marginTop:SIZES.radius,
                      textAlign:'center',
                      color:COLORS.blue,
                      paddingHorizontal:SIZES.padding,

                  }}>{item.description}</Text>
                  </View>
                   </View>)
           }  }
            />
            {renderFooter()}
        </View>
    )
}
