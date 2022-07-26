import React from 'react'; 

import {View, Text,TouchableOpacity,Image, StyleSheet} from 'react-native';
import { COLORS } from './theme';
export const TextIconButton = ({containerStyle,label, labelStyle,icon,iconPosition, iconStyle, onPress}) =>{
return(<TouchableOpacity style={{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    ...containerStyle
}}
onPress={onPress}
>
{iconPosition == "LEFT" && <Image 
source={icon}
style={{
    ...styles.image,
    ...iconStyle
}}
/>}
<Text style={{
fontSize:15,
...labelStyle
}}>{label}</Text>
{iconPosition == "RIGHT" && <Image 
source={icon}
style={{
    ...styles.image,
    ...iconStyle
}}
/>}
</TouchableOpacity>)
}
const styles = StyleSheet.create({

});