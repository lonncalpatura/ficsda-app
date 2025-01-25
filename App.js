import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importing screens
import Onboarding from './screens/Onboarding';
import Home from './screens/Home';
import Events from './screens/Events';
import PrayerRequests from './screens/PrayerRequests';
import Programme from './screens/Programme';

const Stack = createStackNavigator();

// App
const App = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

  useEffect(() => {
    const checkAppLaunch = async () => {
      try {
        const appOpen = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appOpen == null) {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem('isAppFirstLaunched', 'false');
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (error) {
        console.error("AsyncStorage error:", error);
      }
    };

    checkAppLaunch();
  }, []);

  return (
    // Navigation
    isAppFirstLaunched != null && (
      <View style={Platform.OS === 'web' ? styles.webContainer : { flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {isAppFirstLaunched && <Stack.Screen name='Onboarding' component={Onboarding} />}
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Events' component={Events} />
            <Stack.Screen name='Prayer Requests' component={PrayerRequests} />
            <Stack.Screen name='Programme' component={Programme} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  webContainer: {
    width: 390,
    height: 844,
    margin: '0 auto', // Centers the viewport in the browser
    overflow: 'hidden', // Prevents scrolling
    borderWidth: 10, // Adds a thick border around the container
    borderColor: 'black', // Black border color, change if needed
    borderRadius: 20, // Optional: rounded corners for the border
  },
});

export default App;