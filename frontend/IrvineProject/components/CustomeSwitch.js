import React from 'react';
import {
    View,
    Text, Image, TouchableWithoutFeedback, StyleSheet
} from 'react-native';
import { COLORS, SIZES} from '../constants';
export const CustomSwitch = ({value,onChange}) =>{
return (
	<TouchableWithoutFeedback   
     onPress= {()=>onChange(!value)}
	>
	<Text style={{color:'transparent'}}>hellow</Text>
	</TouchableWithoutFeedback>
	)
}


const styles = StyleSheet.create({ 
switchOncontainer: {
	width:40,
	height:20,
	paddingRight:2,
	justifyContent:'center',
	alignItems: "flex-end",
	borderRadius: 10,
	backgroundColor: COLORS.primary,
  },
switchOffcontainer: {
	width:40,
	height:20,
	paddingRight:2,
	justifyContent:'center',
    borderColor:COLORS.gray,
    borderRadius:10,
	backgroundColor: COLORS.white,
   borderWidth:1,
  },
  dot:{
    width:14,
    height:14,
    borderRadius:9,
    borderWidth:1,
    borderColor:'transparent',
  },
	})
