import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import Preload from '../screens/Preload';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Local from '../screens/Local';
import MainTab from '../stacks/MainTab';


const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        initialRouteName='Preload'
        screenOptions={{
            headerShown: false
        }}
    >
        <Stack.Screen name='Preload' component={Preload} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Search' component={Search} />
        <Stack.Screen name='Local' component={Local} />
        <Stack.Screen name='MainTab' component={MainTab} />


    </Stack.Navigator>

);




