import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './screens/store';
import {getToken} from './services/AsyncStorageService';
import {AuthNavigator} from './screens/Authentication/AuthNavigator';
import { InnerNavigation} from './navigation/InnerNavigation';
import { CartProvider } from './screens/Cart/CartContext';
export default ({navigation}) => {
  const Stack = createStackNavigator();
  const [usertoken, setUserToken] = React.useState({});
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
      }
    })();
  }, [])

  return(
    <Provider store={store}>
      <CartProvider>
      <NavigationContainer>
  {usertoken.access? (<InnerNavigation />): (<AuthNavigator />)}
  </NavigationContainer>
  </CartProvider>
</Provider>
)
  }
