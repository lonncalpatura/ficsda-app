/*
DEVELOPED FOR IPHONE 13 pro
*/

import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Importing screens
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Events from './screens/Events';
import PrayerRequests from './screens/PrayerRequests';
import Programme from './screens/Programme';

const Stack = createStackNavigator();

//APP
const App = () => {

  /*
  To only open the onboarding screen when app first launched. (clear cache to reaccess)
  Code help from:
  kymzTech (2021) REACT NATIVE ONBOARDING SCREEN APP. 39 June. Available at: https://www.youtube.com/watch?v=7ZkwC8NKPzM (Accessed: 01/05/2022)
  */
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);
  useEffect(async () => {
    const appOpen = await AsyncStorage.getItem('isAppFirstLaunched');
    if (appOpen == null) {
      setIsAppFirstLaunched(true);
      AsyncStorage.setItem('isAppFirstLaunched', 'false');
    } else {
      setIsAppFirstLaunched(false);
    }
  }, []);

  return (
    //NAVIGATION
    isAppFirstLaunched !=null && (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
          {isAppFirstLaunched && <Stack.Screen name='Onboarding' component={Onboarding} />}
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Events' component={Events} />
          <Stack.Screen name='Prayer Requests' component={PrayerRequests} />
          <Stack.Screen name='Programme' component={Programme} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default App;
