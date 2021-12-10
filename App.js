import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';

import EmailScreen from './screens/EmailSreen';



const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown: false}}/>        
        <Stack.Screen name="EmailScreen" component={EmailScreen}   />
      </Stack.Navigator>
    </NavigationContainer>
  );
}