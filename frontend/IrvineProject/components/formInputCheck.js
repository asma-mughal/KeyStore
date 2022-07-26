import React from 'react'; 
import {View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native';
import { COLORS, icons } from '../constants';
export const FormInputCheck = ({value, error}) =>{
return(<View style={{
    justifyContent:'center',
}}>
<Image 
source={(value == "" || (value != "" && error == "") ?icons.correct : icons.cancel)}
style={{
        height:20,
        width:20,
        tintColor: (value=="")?COLORS.gray : (value!="" && error == "")? COLORS.green: COLORS.red
}}
/>
</View>)
}