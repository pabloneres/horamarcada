import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar as Status, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes'

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar style='light' backgroundColor='#25221D' />
            <SafeAreaView
                style={{ backgroundColor: "#25221D", flex: 1, paddingTop: Platform.OS === "android" ? Status.currentHeight : 0 }}
            >
                <Routes />
            </SafeAreaView>
        </NavigationContainer>
    )
}