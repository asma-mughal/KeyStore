
import React from 'react';
import {
    View,
    Text, Image, TouchableOpacity, StyleSheet
} from 'react-native';

import { COLORS, SIZES } from "../constants";
export const TextIconButton = ({containerStyle, label, labelStyle,icon, iconPosition, 
iconStyle,onPress}) =>{
return(
<TouchableOpacity style={{

	flexDirection:'row',
	alignItems:'center',
	justifyContent:'center',
	...containerStyle
}}
onPress={onPress}
>
{iconPosition == "LEFT" && 
<Image  source={icon}
                 style ={{
                 	...styles.image, 
                 	...iconStyle
                 }}
  />
}
<Text
style={{
	...labelStyle,

}}
>{label}</Text>

{iconPosition == "RIGHT" && 
<Image  source={icon}
                 style ={{
                 	...styles.image, 
                 	...iconStyle
                 }}
  />
}
</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
  image :{
  	marginLeft:5,
  	width:20,
  	height:20,
  	tintColor:COLORS.black
  }
});