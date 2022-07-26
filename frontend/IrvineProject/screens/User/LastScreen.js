
import React, {useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import {View, Text} from 'react-native';
import { OnBoarding } from '../Authentication/OnBoarding/OnBoarding';
export const LastScreen = () =>{
    const navigation = useNavigation();
    React.useEffect(()=>{
        setTimeout(()=>{
       return (<OnBoarding />)
        }, 2000)
    })
return(<View>

    <Text>Moving to Last Screen</Text>
</View>)
}