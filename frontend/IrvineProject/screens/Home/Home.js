import React, { useContext } from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    Platform, ActivityIndicator
} from "react-native";
import { getToken } from '../../services/AsyncStorageService'
import { useGetLoggedUserQuery } from '../../services/userAuthApi'
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../../features/userSlice'
import { setUserAccessToken } from '../../features/authSlice';
import { icons, images, SIZES, COLORS , constants} from '../../constants';
import { CartContext } from "../Cart/CartContext";
import axios from 'axios';

export const Home = ({route, navigation}) => {
    const [isloading, setIsLoading] = React.useState(true);
    const {addToCart} = useContext(CartContext);
    function myfunction(){
        setTimeout(() => {
          setIsLoading(false)
          }, 5000);
      }
    
    const [token, setToken] = React.useState({})
    const dispatch = useDispatch()
    React.useEffect(() => {
      (async () => {
        const token = await getToken()
        if (token) {
          const { access, refresh } = JSON.parse(token)
          setToken({
            "access": access,
            "refresh": refresh
          })
          dispatch(setUserAccessToken({ access_token: access }))
        }
      })();
    }, [])
    const { data, isSuccess } = useGetLoggedUserQuery(token.access)
    React.useEffect(() => {
      if (isSuccess) {
        dispatch(setUserInfo({ id:data.id , email: data.email, name: data.name,}))
      }
    })
    console.log(data);
    const [category, setCategory] = React.useState([]);


    React.useEffect(()=>{
      async function getAllCategory()
      {
        try{
         const catge= await axios.get('http://192.168.0.105:8000/api/user/product')
         setCategory(catge.data);
        }catch(error){
         console.log(error)
        }
      }
      getAllCategory()
    
    }, [])
    function renderHeader() {
        
        return (
            <View style={{ flexDirection: 'row', height: 50, 
            
            top:Platform.OS=='ios'?0:30, }}>
             <View style={{ flex: 1, 
                alignItems:'center' }}>
            
            </View>
            </View>
        )
    }
   
    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding,
                backgroundColor:COLORS.white, }}  
                onPress={() => {
                    navigation.navigate("Restaurant", {item})}}
            >
               
                {/* Image */}
                <View
                      style={{
                        elevation:4,
                        borderRadius:10,
                        marginBottom:SIZES.padding,
                        backgroundColor:COLORS.white,
                   }}
                >
                    
                    <Image
                         source={{uri: item.prod_image}}
                         resizeMode="cover"
                         style={{
                             width: "100%",
                             height: 200,
                             borderRadius: SIZES.radius
                         }}
                     />
                    
                </View>

                {/* Restaurant Info */}
                <View
                     style={{  
                        marginTop:Platform.OS==='ios'? SIZES.marginBottom:10,
                    flexDirection:'row',
                    }}
                >
                   
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        
                    
                        {/* Price */}
                       <Text style={{
                        color:COLORS.blue,
                        fontSize:15,
                       }}>${item.prod_price
                       }</Text>
                    </View>
                    
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={category}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }
    
    
    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            <View style={{
               top: Platform.OS === 'ios' ? 0 : 10,
                padding:SIZES.padding,
                paddingLeft:45,
            }}>
            <Text style={{
                fontWeight:'bold',
                fontSize:30,
                color:COLORS.blue
            }}>Offers</Text>
            </View>
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
      {renderRestaurantList()}
      
    </>
  )
  }
         
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home;