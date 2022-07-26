
import React from "react";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    Image,
     Platform
} from "react-native";
import { COLORS, SIZES } from "../constants";


import { Divider } from 'react-native-paper';
export const FooterTotal = ({subtotal, shippingFee, total,onPress}) =>{
return(<View>
    
    <View style={{
        padding:SIZES.padding,
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        backgroundColor:COLORS.primary,
    }}>
<View style={{
    flexDirection:'row',
}}>
<Text style={{
    flex:1,
    fontSize:15,
    color:COLORS.blue
}}>Subtotal</Text>

<Text style={{
    fontSize:15,
    fontWeight:'bold', 
    color:COLORS.blue
}}>${subtotal}</Text>
</View>
<View style={{
    flexDirection:'row',
    marginTop:SIZES.base,
    marginBottom:SIZES.padding,
}}>
<Text style={{
    flex:1,
    fontSize:15,
    color:COLORS.blue
}}>Shipping Fee</Text>
<Text  style={{
    fontSize:15,
    fontWeight:'bold',
    color:COLORS.blue
}}>${shippingFee.toFixed(2)}</Text>
</View>
<Divider />
<View style={{
    flexDirection:'row',
    marginTop:SIZES.padding,
}}>
<Text style={{
    flex:1,
    fontSize:17,
    fontWeight:'bold',
    color:COLORS.blue
}}>Total:</Text>
<Text style={{
    fontWeight:'bold',
    color:COLORS.blue,
    fontSize:17,
}}>${total}</Text>
</View>
    </View>
</View>)
}