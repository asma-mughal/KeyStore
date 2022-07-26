import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { OrderDelivery } from '../screens/Cart/Order';
import {Restaurant } from '../screens/Restaurant';
import { Tabs} from './tabs';
import {DeliveryStatus} from '../screens/Cart/DeliveryStatus';
import {TermsAndConditions} from '../screens/User/TermsAndConditions';
import { NewsLetter } from '../screens/User/NewsLetter';
import {About} from '../screens/User/About';
import { ContactUs } from '../screens/User/ContactUs';
import {Privacy} from '../screens/User/Privacy';
import { Form } from '../screens/Competitions/form';
import { Download } from '../screens/Downloads/download';
import { Competitions } from '../screens/Competitions/competitions';
import { Detail } from '../screens/News/Detail';
import { CommunityFund } from '../screens/CommunityFund/communityFund';
import {Home} from '../screens/Home/Home';
export const InnerNavigation = () =>{
	 const Stack = createStackNavigator();
	return(
<Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                
        <Stack.Screen name="Home" component={Tabs}/> 
      <Stack.Screen name='Order' component={OrderDelivery} />
      <Stack.Screen name="Restaurant" component={Restaurant} />
       <Stack.Screen name="Terms" component={TermsAndConditions} />
       <Stack.Screen name="About" component={About} />
       <Stack.Screen name="Privacy" component={Privacy} />
       <Stack.Screen name="NewsLetter" component={NewsLetter} />
       <Stack.Screen name="ContactUs" component={ContactUs} />
       <Stack.Screen name="Form" component={Form} />
       <Stack.Screen name="Download" component={Download} />
       <Stack.Screen name="Competitions" component={Competitions} />
       <Stack.Screen name="Details" component={Detail} />
       <Stack.Screen name="CommunityFund" component={CommunityFund} />
      <Stack.Screen name="DeliveryStatus" component={DeliveryStatus}
      options={{gestureEnabled:false}}
      />

</Stack.Navigator>
)
}