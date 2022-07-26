
import React from 'react';

import { OnBoarding} from './OnBoarding/OnBoarding';
import {SignIn } from './SignIn';
import { SignUp } from  './SignUp';
import { createStackNavigator } from '@react-navigation/stack';
import {ForgotPassword } from '../Authentication/ForgotPassword';
import { ForgetPassword2 } from './ForgetPassword2';
import { getToken } from '../../services/AsyncStorageService';
import { Tabs } from '../../navigation/tabs';
import { InnerNavigation } from '../../navigation/InnerNavigation';

export const AuthNavigator = ({navigation}) =>{
	 const Stack = createStackNavigator();
   const [isloading, setIsLoading] = React.useState(true);
     const [usertoken, setUserToken] = React.useState({})
     React.useEffect(() => {
        (async () => {
          const token = await getToken()
          if (token) {
            const { access, refresh } = JSON.parse(token)
            setUserToken({
              "access": access,
              "refresh": refresh
            })
          } else {
            setUserToken({})
            setyes(true)
          }
        })();
      }, [])
return(

<Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'OnBoarding'}
            >
               
                 <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    />
                <Stack.Screen
                    name="SignUp"
                    component={SignUp}
                />

      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                 <Stack.Screen
                    name="OnBoarding"
                    component={OnBoarding}
                />
                  <Stack.Screen name="Forg" component={ForgetPassword2}/> 
                  <Stack.Screen name="Home" component={InnerNavigation} />
                </Stack.Navigator>
                
                )
}