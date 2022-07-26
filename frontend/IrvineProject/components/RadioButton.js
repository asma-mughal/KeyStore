import React from 'react'; 
import {Image, Text, TouchableOpacity } from 'react-native';
import {COLORS, SIZES,icons} from '../constants';
export const RadioButton = ({
    containerStyle,
    label, labelStyle,
    iconStyle,
    isSelected,
    onPress
}) =>{
return(<TouchableOpacity  
style={{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    ...containerStyle,
    marginBottom:5,
}}
onPress={onPress}
>
<Image source={isSelected?icons.check_on : icons.check_off} 
style={{
    marginLeft:5,
    width:20,
    height:20,
    ...iconStyle, 
    tintColor:COLORS.primary,
}}
/>
<Text style={{
    marginLeft:SIZES.radius,
    color:COLORS.gray,
    ...labelStyle
}}>{label}</Text>
</TouchableOpacity>)
}