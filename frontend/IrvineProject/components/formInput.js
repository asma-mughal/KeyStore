import React from 'react'; 
import {View, Text, TextInput} from 'react-native';
import { SIZES, COLORS, icons,images } from '../constants';
export const FormInput = ({
    containerStyle,
    inputContainerStyle,
    label,
    placeholder,
    autoCompleteType,
    inputStyle,
    value="",
    prependComponent,
    appendComponent,
    onChange, 
    secureTextEntry,
    keyboardType="default",
    autoCapitalize="none",
    errorMessage="",
    maxLength, 
    onBlur
}) =>{
return(<View style={{
    ...containerStyle,
    ...inputContainerStyle
}}>
<View style={{
    flexDirection:'row',
    justifyContent:'space-between',

}}>
<Text style={{
    color:COLORS.blue,
    fontSize:17,
    fontWeight:'bold',
    paddingBottom:10,
}}>{label}</Text>

<Text style={{
    color:COLORS.red,
    fontSize:15,
}}>{errorMessage}</Text>
</View>
<View style={{
    flexDirection:'row',
    height:SIZES.height>800?55:45,
    paddingHorizontal:SIZES.padding,
    marginTop:SIZES.height>800 ?SIZES.base :0,
    borderRadius:SIZES.radius,
    backgroundColor:COLORS.white,
    ...inputContainerStyle
}}>
{prependComponent}
<TextInput 
style={{
    flex:1,
}}

onBlur={onBlur}
selectionColor={COLORS.black}
value={value}
placeholder={placeholder}
placeholderTextColor={COLORS.gray}
secureTextEntry={secureTextEntry}
keyboardType={keyboardType}
autoCompleteType={autoCompleteType}
autoCapitalize={autoCapitalize}
maxLength={maxLength}
onChangeText = {(text)=>onChange(text)}

/>
{appendComponent}
</View>
</View>)
}