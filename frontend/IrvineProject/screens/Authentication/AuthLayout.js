import React from 'react';
import {
    View,
    Text, ImageBackground, Image,Animated, TouchableOpacity
} from 'react-native';
import { COLORS, SIZES, images } from '../../constants';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview'
export const AuthLayout = ({title, subtitle, titleContainerStyle, children}) =>{
return(<View style={{
    flex:1,
    paddingVertical:SIZES.padding,
    backgroundColor:'#FDF529',
}}>
<KeyboardAwareScrollView
keyboardDismissMode="on-drag"
contentContainerStyle={{
    flex:1,
    paddingHorizontal :SIZES.padding,
}}
>
<View style={{
    alignItems:'center',
}}>
<Image  
resizeMode='contain'
style={{
    height:100,
    width:200,
}}
source={images.logo}/>
</View>
<View style={{
    marginTop:SIZES.padding/9,
    ...titleContainerStyle
}}>
<Text style={{
    textAlign:'center', 
    fontWeight:'bold',
    fontSize:25,
    color:COLORS.blue,
}}>{title}</Text>
<Text style={{
    textAlign:'center',
    color:COLORS.blue,
    marginTop:SIZES.base,
    fontWeight:'600',
}}>{subtitle}</Text>
</View>
{children}
</KeyboardAwareScrollView>

</View>)
}