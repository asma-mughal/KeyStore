import React from 'react'; 
import {View, Text, TouchableOpacity} from 'react-native';
import { COLORS } from '../constants';

export const TextButton = ({buttonContainerStyle,labelStyle, onPress, label, disabled, color}) =>{
return(<TouchableOpacity style={{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:COLORS.red,
    ...buttonContainerStyle
}}
disabled={disabled}
onPress={onPress}
>

    <Text style={{
        color:color,
        fontSize:15,
        fontWeight:'bold',
        ...labelStyle
    }}>{label}</Text>
    </TouchableOpacity>)
}