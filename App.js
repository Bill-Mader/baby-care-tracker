import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FeedingScreen } from './app/screens/feeding-screen';
import { NapScreen } from './app/screens/nap-screen';
import { DiaperScreen } from './app/screens/diaper-screen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Feedings" component={FeedingScreen}/>
        <Tab.Screen name="Naps" component={NapScreen}/>
        <Tab.Screen name="Diapers" component={DiaperScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
