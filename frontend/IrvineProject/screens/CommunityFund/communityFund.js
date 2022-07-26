import {
    View,
    Text, Image, TouchableOpacity, SafeAreaView, Animated, ScrollView, FlatList,ImageBackground
} from 'react-native';
import React from 'react';
import { TextButton } from '../../components/TextButton';
import { COLORS, icons, SIZES, constants, images } from '../../constants';
import { Header } from '../../components/header';
import {IconButton } from '../../components/iconButton';
export const CommunityFund = ({navigation}) =>{
    var newArray =constants.news_screens.filter(function (el)
    {
      return el.type=="Community Funds";
    }
    );
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
      title="Community Funds"
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
   function renderHeading()
   {
    return(<View style={{
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.primary,
        padding:20,
    }}>
        <Text style={{
            fontSize:23,
            color:COLORS.blue,
            fontWeight:'bold'
        }}>The KeyStore Community Fund</Text>
    </View>)
   }
    function renderSecondSection(){
        return(<View style={{
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:'white',
            padding:20,
            }}>
            <Text style={{
                fontSize:23,
                color:COLORS.blue,
                fontWeight:'bold',
            }}>Your Local<Text style={{
                fontSize:23,
                color:COLORS.red,
                fontWeight:'bold',
            }}> Keystore.</Text>
            </Text>
            <Text style={{
                fontSize:23,
                color:COLORS.blue,
                fontWeight:'bold',
            }}>Your Local<Text style={{
                fontSize:23,
                color:COLORS.red,
                fontWeight:'bold',
            }}> Community.</Text></Text>
            <Text style={{
                color:COLORS.gray,
                paddingTop:10,
                fontSize:16,
            }}>At KeyStore, we’re a family business,
                our franchises are often family businesses. We know the importance of community 
                and facing challenges together. That’s why we began the KeyStore Community Fund. 
                The fund is our way of helping local KeyStores be active in 
                their communities, we support your local stores
                 so they can support you!</Text>

                 
        </View>
        
        
        )
    }
    function renderFundList() {
        return(
            <Animated.FlatList 
                ref={flatListRef}
                horizontal
                pagingEnabled
                data={constants.fund_screens}
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
                          }}>{item.detail}</Text>
                   {item.show==true && 
                   <View style={{
                    paddingLeft:30,
                    paddingRight:30,
                   }}>
                   <Text style={{
                        
                        paddingHorizontal:SIZES.padding/2,
                        color:COLORS.gray,
                          }}>- Back to School packs for local primary schools</Text>
<Text style={{
    
    paddingHorizontal:SIZES.padding/2,
    color:COLORS.gray,
                          }}>- Defibrillator for public use</Text>
<Text style={{
    
                          paddingHorizontal:SIZES.padding/2,
                          color:COLORS.gray,
                          }}>- Funding & Prizes for local junior sports teams and more</Text>
    
    
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
    function renderNewsList() {
   
        const Item = ({ title,type, photo, date, time,detail}) => (
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
                             source={photo}
                             resizeMode="cover"
                             style={{
                                 width: "100%",
                                 height: 200,
                                 borderRadius: SIZES.radius,
                             }}
                         >
                      
                         
                    <ImageBackground  style={{
                    height:60,
                    width:150,
                    top:-10,
                    right:30,
                }} source={images.red}
                 >
                 <Text style={{
                    top:20,
                    paddingLeft:30,
                    color:COLORS.white,
                    fontWeight:'bold'
                 }}>{type}</Text></ImageBackground>
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
                }}><Text style={{
                    color:COLORS.blue,
                }}>{date} | {time} min</Text></Text>
                           
            </View>
          );
          
        const renderItem = ({ item }) => (
            <Item title={item.title}
          photo= {item.bannerImage}
          date ={item.date}
          time ={item.time}
          type ={item.type}
          detail = {item.detail}
            />
          )
       return(<View>
        <Text style={{
            top:10,
            paddingLeft:20,
            fontWeight:'bold',
            color:COLORS.blue,
            fontSize:23,
            paddingTop:3,
         }}>Recent Community Fund News</Text>
        <FlatList
        data={newArray}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <View style={{
        padding:20,
      }}>
        
      </View>
       </View>)
    }
    function renderThirdList() {
        return(<View>
            <View style={{
                alignItems:'center',
                justifyContent:'center',
                padding:5,
                
            }}>
            <Text style={{
    color:COLORS.blue,
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold'
}}>Do you have a local project that
could benefit from the <Text style={{
    color:COLORS.red,
    fontSize:20,
    fontWeight:'bold'
}}>Community Fund?</Text></Text>
<Text style={{
    color:COLORS.gray,
    fontSize:18,
    textAlign:'center',
    padding:5,
}}>If you are a member of the public that wishes to request Community Fund services,
     please get in touch with your local KeyStore. </Text>
</View>
        </View>)
    }
    function renderFourthSection()
    {
        return(
            <View style={{
               
            }}>
                
                <Text style={{
                    textAlign:"center",
                    fontWeight:'bold',
                    fontSize:20,
                    color:COLORS.red,
                    padding:10,
                }}>We'll Support You Evermore</Text>
            </View>
        )
    }
    function renderFifthSection(){
        const Item = ({ title,type, photo, date, time,detail}) => (
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
                        <Image
                             source={photo}
                             resizeMode="cover"
                             style={{
                                 width: "100%",
                                 height: 200,
                                 borderRadius: SIZES.radius,
                             }}
                         />
                         </TouchableOpacity>
                           
                    </View> 
              
            </View>
          );
          
        const renderItem = ({ item }) => (
            <Item title={item.title}
          photo= {item.bannerImage}
          date ={item.date}
          time ={item.time}
          type ={item.type}
          detail = {item.detail}
            />
          )
       return(<View>
        <FlatList
        data={constants.fund_Images}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
        <View style={{
        padding:20,
      }}>
        
      </View>
       </View>)
    }
return(
<View style={{
    backgroundColor:COLORS.white,
    flex:1,
}}>
    {renderHeader()}
    <ScrollView>
    {renderHeading()}
    {renderSecondSection()}
    {renderFundList()}

    {renderNewsList()}
    {renderThirdList()}
    {renderFourthSection()}
    {renderFifthSection()}
    <TouchableOpacity onPress={()=>navigation.navigate('NewsLetter')}>
      <Text style={{
        fontSize:15,
        fontWeight:'bold',
        color:COLORS.blue,
        padding:20,
      }}>Get Our NewsLetter!</Text>
      </TouchableOpacity>
    </ScrollView>
</View>)
}