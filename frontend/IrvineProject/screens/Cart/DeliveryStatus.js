import React from 'react'; 
import {Header } from '../../components/header';
import {View, Text, TouchableOpacity,ScrollView} from 'react-native';
import { COLORS, SIZES } from '../../constants';
import { TextIconButton } from '../../constants/TextIconButton';
import moment from 'moment';
export const DeliveryStatus = ({navigation, route}) =>{
    
    function renderFooter(){
        return(<View
            style={{
                paddingBottom:SIZES.padding,
                paddingHorizontal:SIZES.padding,
                flexDirection:'row',
            }}>
                <View style={{flex:1}}>
           <TouchableOpacity style={{
          backgroundColor:COLORS.white,
          alignItems:'center',
          justifyContent:'center',
          paddingHorizontal:10,
          paddingVertical:10,
          width:'98%',
          alignSelf:'center',
          borderRadius:8,
          height:50,
          }}
          onPress={()=>{navigation.navigate("Home")}}
          >
          <Text style={{
              fontWeight:'bold',
              fontSize:16,
              color:COLORS.blue,
          }}>Cancel</Text>
          </TouchableOpacity>
          </View>
          <View style={{flex:1}}>
         <TextIconButton 
         label="Map View"
         containerStyle={{
             flex:1,
             marginLeft:SIZES.radius,
             borderRadius:SIZES.base,
             backgroundColor:COLORS.red,
         }}
         labelStyle={{
             color:COLORS.white,
             fontWeight:'bold'
         }}
         />
          </View>
          </View>)
        }
    function renderHeader(){
        return(<Header 
          
         title="DELIVERY STATUS"
         titleStyle={{
            fontWeight:'bold',
            fontSize:19,
            color:COLORS.blue
        }}
         containerStyle={{
            height:50,
            marginHorizontal:9,
            marginTop:30,
         backgroundColor:COLORS.white,
         alignSelf:'center',   
    }}
        
         />)
        }
function renderInfo()
{
    return(<View style={{
        marginTop:SIZES.radius,
        paddingHorizontal:SIZES.padding,

    }}>
   <Text style={{
       textAlign:'center',
       color:COLORS.blue,
       fontSize:15,
       fontWeight:'bold',
   }}>Estimated Delivery</Text>
   
   <Text style={{
       textAlign:'center',
       color:COLORS.blue,
       fontSize:20,
       paddingTop:5,
       fontWeight:'bold',
   }}>{moment().format('Do MMMM YYYY /h:mm')}</Text>
    </View>)
}
function renderTrackOrder(){
    return(
    <View style={{
        marginTop:SIZES.padding,
        paddingVertical:SIZES.padding,
        alignItems:'center',
    }}>
        <Text style={{
            fontSize:20,
            color:COLORS.blue,
        }}>Your Order is own its way!</Text>
    </View>)
}

    return(<View style={{
        flex:1,
        backgroundColor:COLORS.white,
        paddingHorizontal:SIZES.padding,
    }}>

     {renderHeader()}
      {renderInfo()}
      <ScrollView
      showsVerticalScrollIndicator={false}
      >
       {renderTrackOrder()}
     
      </ScrollView>
      {renderFooter()}
    </View>)
}