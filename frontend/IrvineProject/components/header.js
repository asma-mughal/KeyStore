import React from 'react'; 
import {View, Text } from 'react-native';
import { icons, COLORS, images, SIZES } from '../constants';
export const Header = ({
    containerStyle,
    title,
    titleStyle,
    leftComponent,
    rightComponent
}) =>{
    return(<View
    style={{
        height:60,
        flexDirection:'row',
        ...containerStyle,
        backgroundColor:COLORS.white,
    }}
    >{leftComponent}
    <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:COLORS.white,
    }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View
        style={{
            height:50,
            alignItems:'center',
            justifyContent:'center',
            paddingHorizontal:SIZES.padding*3,
            borderRadius:SIZES.radius,
            backgroundColor:COLORS.white
        }}
         >
<Text style=  {[
    
    titleStyle]} 
    >{title}</Text>
</View>

</View>

    </View>
    
    </View>)
}