import React from 'react';
 import {
  Text,View,TouchableOpacity,FlatList,ScrollView,ImageBackground,  ActivityIndicator, StyleSheet, Button} from 'react-native';  
import { TextButton} from '../../components/TextButton';
import { icons, images, SIZES, COLORS, constants } from '../../constants';
import { Header } from '../../components/header';
import { IconButton } from '../../components/iconButton';
import axios from 'axios';
export const News = ({navigation}) =>{
  const [news, setNews] = React.useState([]);
  const [isloading, setIsLoading] = React.useState(true);
    React.useEffect(()=>{
        getAllNews()
      async function getAllNews()
      {
        try{
          
         const news= await axios.get('http://192.168.0.105:8000/api/user/news')
         setNews(news.data);
        }catch(error){
         console.log(error)
        }
      }
    
    }, [])

function myfunction(){
  setTimeout(() => {
    setIsLoading(false)
    }, 5000);
}
    function renderHeader() {
        return(
          <Header
          title="News"
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
function renderImage() {
   return(<View>
    <View style={{
        backgroundColor:COLORS.primary
    }}>
        </View>
   </View>) 
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
           label= "Read More"
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
              navigation.navigate('Details', {title, photo, date, time, type, detail})
              }}
           /></View>
                <ImageBackground  style={{
                height:60,
                width:150,
                top:-70,
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
        <Item title={item.News_title}
      photo= {item.News_image}
      date ={item.News_date}
      time ={item.News_time}
      type ={item.News_type}
      detail = {item.News_detail}
        />
      )
   return(<View>
    <FlatList
    data={news}
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
return(
<View style={{
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
    {renderImage()}
    {renderNewsList()}
    </ScrollView>
    </>
  )
  }
   
</View>)
}
const styles = StyleSheet.create({
  btn:{
  padding:4,
  backgroundColor:'#2182BD',
  },
  errorSetting:{
  top:9,
  },
  ErrorText:{
   color:'red',
   fontSize:15,
  },
  Indicator:
  {
    top:11,
  },
 TextIn:{
     width:240,
     height:50,
 }, 
 ViewButton:{
bottom:1,
 },
 ViewConfrim:{
  top:9,
 },
 ViewInput:{
     top:20,
 },
 ViewInputEmail:{
     bottom:11,
 }
});
