import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { News } from '../screens/News/news';
import {Home} from '../screens/Home/Home';
import {SideBar} from './Sidebar';
const Drawer = createDrawerNavigator();
const UserPanelTab = () => {
  return (
    <Drawer.Navigator drawerContent={props => 
    <SideBar {...props} />}>
      <Drawer.Screen name="News"  component={News} />
      <Drawer.Screen name="Home2" component={Home} />
    </Drawer.Navigator>
  )
}

export default UserPanelTab