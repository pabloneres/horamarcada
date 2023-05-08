import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, StatusBar as Status, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes'
import { SQLITE } from './src/db';

const initDB = () => {
    console.log("INIT DB")
    SQLITE.transaction((tx) => {
        tx.executeSql(
            "CREATE TABLE if not exists users (id SERIAL PRIMARY KEY, name TEXT NOT NULL, email TEXT UNIQUE NOT NULL,  password TEXT NOT NULL);", [],
            (trxObj, result) => {
                console.log(result)
            },
            (trxObj, error) => {
                console.log(error)
            },
        );
    });
}

export default function App() {

    useEffect(() => {
        initDB()
    }, []);

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