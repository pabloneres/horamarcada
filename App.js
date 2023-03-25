import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar translucent style='light' />
            <SafeAreaView
                style={{ backgroundColor: "#25221D", flex: 1 }}
            >
                <Routes />
            </SafeAreaView>
        </NavigationContainer>
    )
}