import React,{useState} from 'react'; 
import {View, Text, Image, TouchableOpacity , StyleSheet, ScrollView} from 'react-native';
import { Header } from '../../components/header';
import {icons, SIZES, images } from '../../constants';
import { COLORS, dummyData} from '../../constants';
import { CardItem } from '../../components/CardItem';
import { IconButton } from '../../components/iconButton';
import { FooterTotal } from '../../components/footerTotal';
export const OrderDelivery =({navigation, route}) =>{
    const [selectedCard, setSelectedCard] = useState(true);
    const [sub_total, setSubtotal] = React.useState(null);
 function renderHeader(){
     return(<Header 
     
     title="CHECK OUT"
     titleStyle={{
        fontWeight:'bold',
        fontSize:19,
    }}
     containerStyle={{
        height:50,
        marginHorizontal:SIZES.padding,
        marginTop:30,
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
          tintColor:COLORS.black
      }}
      onPress={()=>navigation.goBack()}
        />
    }
     />)
 }
  function renderFooter(){
    return(<View
        style={{
            paddingBottom:SIZES.padding,
            paddingHorizontal:SIZES.padding,
            backgroundColor:COLORS.primary,

        }}>
       <TouchableOpacity style={{
      backgroundColor:COLORS.red,
      alignItems:'center',
      justifyContent:'center',
      paddingHorizontal:10,
      paddingVertical:10,
      width:'98%',
      alignSelf:'center',
      borderRadius:8,
      
      }}
      onPress={()=>{navigation.replace("DeliveryStatus")}}
      >
      <Text style={{
          fontWeight:'bold',
          fontSize:15,
          color:COLORS.white,
      }}>Place Your Order</Text>
      </TouchableOpacity> 
      </View>)
    }
 function renderCards() {
     return(<View>
{dummyData.myCards.map((item, index)=>{
    return(<CardItem 
    key={`MyCard-${item.id}`}
    item={item}
    isSelected={`${selectedCard.key}-${selectedCard.id}` == `MyCard-${item.id}`}

    onPress={()=>setSelectedCard({...item, key:"MyCard"})}
    />)
})}
     </View>)
 }
 function renderDeliveryAddress(){
       return(<View
        style={{
            marginTop:SIZES.padding,
        }}>
       <Text style={{
           fontSize:15,
           fontWeight:'bold',
           color:COLORS.blue
       }}>Delivery Address</Text>
       <View style={{
           flexDirection:'row',
           alignItems:'center',
           marginTop:SIZES.radius,
           paddingVertical:SIZES.radius,
           borderWidth:2,
           borderRadius:SIZES.radius,
           borderColor:COLORS.lightGray3,
       }}>
       <Image 
       source={icons.location1}
       style={{
           width:35,
           height:35,
       }}
       />
       <Text
       style={{
           marginLeft:SIZES.radius,
           width:'85%',
           color:COLORS.blue
       }}
       >300 Post Street San Francisco, CA  </Text>
       </View>
        </View>)
   }
  
    return (<View
     style={{
         flex:1,
         backgroundColor:COLORS.white,
     }}>
        {renderHeader()} 
        <ScrollView 
        contentContainerStyle={{
            flexGrow:1,
            marginTop:SIZES.radius,
            paddingHorizontal:SIZES.padding,
            paddingBottom:SIZES.radius,
        }}
        >
        {renderCards()}
          {renderDeliveryAddress()}
       <View style={{
        paddingTop:145,
       }}>
       <FooterTotal 
        subtotal={sub_total}
        shippingFee={0.00}
        total={sub_total}
        />
        </View>
          {renderFooter()}
        </ScrollView>
        </View>)
}
const styles = StyleSheet.create({

cartItemContainer :{
    flexDirection:'row',
    alignItems:'center',
    marginTop:SIZES.radius,
    paddingHorizontal:SIZES.radius,
    borderRadius:SIZES.radius,
}

});