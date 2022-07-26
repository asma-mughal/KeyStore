import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Svg,{ Path} from 'react-native-svg';
import {
    View, Image, TouchableOpacity} from 'react-native';
import { Home} from '../screens/Home/Home';
import { COLORS, icons, images } from '../constants';
import { Map } from '../screens/Map/map';
import { User } from '../screens/User/User';
import { News } from '../screens/News/news';
export const Tabs = ({route, navigation}) =>{

    const TabBarCustomButton = ({ accessibilityState, children, onPress }) => {
      
        var isSelected = accessibilityState.selected
    
        if (isSelected) {
            return (
                <View style={{ flex: 1, alignItems: "center" }}>
                
                    <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                        <Svg
                            width={70}
                            height={61}
                            viewBox="0 0 75 61"
                        >
                            <Path
                                d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
                                fill={COLORS.white}
                            />
                        </Svg>
                        <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
                    </View>
    
                    <TouchableOpacity
                        style={{
                            top: -22.5,
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            backgroundColor: COLORS.white
                        }}
                        onPress={onPress}
                    >
                        {children}
                    </TouchableOpacity>
                </View>
            )
        } else {
            return (
                <TouchableOpacity
                    style={{
                        flex: 1,
                        height: 60,
                        backgroundColor: COLORS.white
                    }}
                    activeOpacity={1}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            )
        }
    }
    



const Tab = createBottomTabNavigator();

return(
    <Tab.Navigator
     screenOptions={{
        headerShown:false
 
      }}>
    <Tab.Screen
      name="Home" component={Home} 
      options={{
        tabBarStyle: {
            borderTopWidth: 0,
            elevation:0,
      },
          tabBarShowLabel:false,
          tabBarInactiveBackgroundColor:'transparent',
          tabBarActiveBackgroundColor:'transparent',
          style:{
              backgroundColor:'transparent'
          },
          tabBarIcon:({focused})=>(
              <Image 
              source={icons.grocery}
              style={{
                  width:25, 
                  height:25,
                  tintColor:focused? COLORS.red :COLORS.blue
              }}
              />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
      }}/>

  <Tab.Screen name="Map" component={Map} 
      options={{
        tabBarStyle: {
            borderTopWidth: 0,
            elevation:0,
      },
          tabBarShowLabel:false,
          tabBarIcon:({focused})=>(
              <Image 
              source={icons.map}
              style={{
                  width:25, 
                  height:25,
                  tintColor:focused? COLORS.red : COLORS.blue
              }}
              />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
      }}
      />
       <Tab.Screen name="News" component={News} 
      options={{
        tabBarStyle: {
            borderTopWidth: 0,
            elevation:0,
      },
          tabBarShowLabel:false,
          tabBarIcon:({focused})=>(
              <Image 
              source={icons.newspaper}
              style={{
                  width:25, 
                  height:25,
                  tintColor:focused? COLORS.red : COLORS.blue
              }}
              />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
      }}
      />
      
      <Tab.Screen name="Person" component={User} 
      options={{
         
        tabBarStyle: {
            borderTopWidth: 0,
            elevation:0,
      },
          tabBarShowLabel:false,
          tabBarIcon:({focused})=>(
              <Image 
              source={icons.profile}
              style={{
                  width:25, 
                  height:25,
                  tintColor:focused? COLORS.red:COLORS.blue
              }}
              />

          ),
          tabBarButton: (props) => (
            <TabBarCustomButton
                {...props}
            />
        )
      }}
      />



  
    </Tab.Navigator>
    
    )
}
