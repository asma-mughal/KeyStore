import React, {useState} from 'react';
 import {
  Text,View, Image,ImageBackground,
  Animated} from 'react-native'; 
import { icons, images, SIZES, COLORS, constants } from '../../constants';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import { Header } from '../../components/header';
import axios from 'axios';
import { IconButton } from '../../components/iconButton';
export const Detail = ({navigation, route}) =>{
    const [title, setTitle] = useState('');
    const [photo, setPhoto] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [type, setType] = useState('');
    const [detail, setDetail] = useState('');
    const [news, setNews] = React.useState([]);
    React.useEffect(()=>{
      async function getAllNews()
      {
        try{
         const news= await axios.get('http://192.168.0.102:8000/api/user/news')
         setNews(news.data);
        }catch(error){
         console.log(error)
        }
      }
      getAllNews()
    
    }, [])
    React.useEffect(() => {
        let {title, photo, time, date, type, detail
        } = route.params;
        setTitle(title);
        setPhoto(photo);
        setTime(time);
        setDate(date);
        setType(type);
        setDetail(detail)
    })  
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
    function renderHeader() {
        return(
          <Header
          title=" "
        titleStyle={{
            fontWeight:'bold',
            fontSize:15,

        }}
        containerStyle={{
            height:50,
            marginHorizontal:SIZES.padding,
            marginTop:50,
            right:20,
        backgroundColor:COLORS.white,
            
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
    function ParallaxView()
    {
        return (
            <ParallaxScrollView
              backgroundColor="white"
              contentBackgroundColor="white"
              parallaxHeaderHeight={240}
              renderForeground={() => (
               <View style={{ height: 800, flex: 1, paddingBottom:20, }}>
                 <View style={{
        paddingLeft:10,
        paddingBottom:10,
    }}>
        <View style={{
            
            paddingRight:10,
            flexDirection:'row', 
            
             }}>
            <Text style={{
                fontSize:23,
                fontWeight:'bold',
                color:COLORS.blue,
                textAlign:'center',
                
            }}> {title}
            </Text>
           
    </View>
    <View style={{
     flexDirection:'row',
     paddingLeft:30,
    }}>
    </View>
    </View>
    <View style={{
        paddingLeft:40,
        paddingRight:40
    }}>
    <Text style={{
        fontSize:15,
        color:COLORS.gray,
    }}>{detail}</Text>
    </View>
    <View style={{
        alignItems:'center',

    }}>
        <Text style={{
            color:COLORS.gray,
            fontSize:14,
            top:5,
        }}>0101/0808/1919 | {type} | george | {time} minute read 
</Text>
    </View>
                </View>
              )}>
                
              <View style={{ height: 200 }}>
              <Image
              source={{uri:photo}}
              style={{
                width: "100%",
                height: 200,
            }}
               />
              </View>
              
              <Text style={{
                color:COLORS.gray,
                fontSize:15,
                paddingTop:10,
                paddingRight:5,
                paddingLeft:5,
               }}>{detail}</Text>
                 {MoreImages()}
                 {RecentNews()}
                 <Animated.FlatList 
            ref={flatListRef}
            horizontal
            pagingEnabled
            data={news}
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
                  marginTop:-50,
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
                  <ImageBackground
                  source={{uri:item.News_image}}
                  resizeMode="contain"
                  style={{
                      width:SIZES.width * 0.8,
                      height:SIZES.width,
                      marginBottom:-SIZES.padding,
                  }}
                  >
<View>
<ImageBackground  style={{
                height:60,
                width:150,
           top:90,
                right:30,
            }} source={images.red}
             >
             <Text style={{
                top:20,
                paddingLeft:30,
                color:COLORS.white,
                fontWeight:'bold'
             }}>{item.News_type}</Text></ImageBackground>
                 
</View>
                    
                  </ImageBackground>
                  </View>
              </View>
              <View style={{
                  flex:1,
                paddingHorizontal:SIZES.radius,
              }}>
                  <Text style={{
                      fontSize:25,
                      fontWeight:'bold',
                      color:COLORS.blue,
                  }}>{item.News_title}</Text>
                  
                  </View>
                  <View style={{
                    paddingLeft:10,
                  }}>
                <Text style={{
                color:COLORS.blue,
            }}>{item.News_date} | {item.News_time} min</Text>                       
                </View>
                   </View>)
           }  }
            />
              {renderFooter()}
            </ParallaxScrollView>
          );
    }
    function MoreImages(){
        return(<View style={{
            paddingTop:10,
        }}>
            <Image 
            source={{uri:photo}}
            style={{
                width:'100%',
                height:200,
            }}
            />
        </View>)
    } 
    
    function RecentNews(){
        return(<View>
            <View style={{
              flexDirection:'row',
              alignItems:'center',
              justifyContent:'center',
              paddingTop:10,
            }}>
            <View style={{
              width:60,
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
              width:130,
              alignSelf:'center'}}>Recent News</Text></View>
            <View style={{
              width:60,
              backgroundColor:COLORS.red, 
              height:1.5,
              top:1,
            }}><Text style={{
              color:'transparent'
            }}>I am 3</Text></View>
            </View>
              </View>)  
    }
    return(
        <View style={{
            backgroundColor:COLORS.white,
            flex:1,
        }}>
            {renderHeader()}
            {ParallaxView()}
            </View>
    )
}