import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
    Animated, Platform
} from "react-native";
import { COLORS, SIZES, icons } from "../constants";

export const CardItem = ({item,isSelected,onPress}) =>{
    const [selectedCard, setSelectedCard] = React.useState(null);
    return(<>
    <TouchableOpacity
    style={{
        flexDirection:'row',
        height:100,
        alignItems:'center',
        marginTop:SIZES.radius,
        paddingHorizontal:SIZES.padding,
        borderWidth:2,
        borderRadius:SIZES.radius,
        borderColor:isSelected?COLORS.blue:COLORS.lightGray3,

    }}
    onPress={onPress}
    >
     <View style={{
         width:60,
         height:45,
         alignItems:'center',
         justifyContent:'center',
         borderWidth:2,
         borderRadius:SIZES.radius,
         borderColor:COLORS.lightGray3,
     }}>
     <Image 
     source={item.icon}
     resizeMode='center'
     style={{
         width:35,
         height:35,
     }}
     />
     </View>
     
     <Text style={{
         flex:1,
         marginLeft:SIZES.radius,
         fontSize:15,
         fontWeight:'bold',
         color:COLORS.blue
     }}>{item.name}</Text>
     <Image
     source={isSelected? icons.check_on:icons.check_off}
     style={{
         width:20,
         height:20,
         tintColor:COLORS.blue,
     }}
     />
    </TouchableOpacity>
    </>)
}