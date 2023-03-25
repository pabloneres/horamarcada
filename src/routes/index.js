import * as React from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Home from './homeNavigation';
import Login from '../screens/Login';

function App() {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false, animationEnabled: false }}
            style={{ flex: 1, backgroundColor: '#25221D' }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="HomeNav" component={Home} />
        </Stack.Navigator>
    );
}

export default App;