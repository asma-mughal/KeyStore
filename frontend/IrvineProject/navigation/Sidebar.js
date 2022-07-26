import { View, Text } from 'react-native';
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from '../services/AsyncStorageService';
import { useSelector } from 'react-redux';
import { COLORS } from '../constants';

export const SideBar = ({ ...props }) => {
  const myData = useSelector(state => state.user)
  const myAccessToken = useSelector(state => state.auth)
  const handleLogout = async () => {
    await removeToken()
    navigation.navigate('SignIn');
    console.log("Logout")
  }
  const navigation = useNavigation()
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ margin: 15 }}>
        <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>{myData.name}</Text>
        <Text style={{ fontSize: 16, marginBottom: 5, color:COLORS.blue }}>{myData.email}</Text>
      </View>
      <DrawerItemList {...props} />
      <DrawerItem label='Logout' onPress={handleLogout} />
    </DrawerContentScrollView>
  );
};
