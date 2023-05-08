import React, { useState, useEffect } from "react"
import { TextInput, TouchableOpacity, View, Text, Image, ScrollView } from 'react-native'
import styles from "./styles"
import { SQLITE } from "../../db"


function Database({ navigation }) {

    const [data, setData] = useState([])

    useEffect(() => {
        getAll()
    }, [])

    const getAll = () => {
        console.log("getAll");


        SQLITE.transaction((trx) => {
            trx.executeSql("select * from users", [],
                (trxObj, { rows }) => {
                    const result = rows._array
                    setData(result)
                },
                (trxObj, error) => {
                    console.log(error)
                })
        })
    }

    return (
        <View flex={1}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.buttonHeader}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../../assets/menu.png")} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "#fff", textAlign: "center", fontWeight: "bold" }}>Banco de dados</Text>
                <TouchableOpacity style={[styles.buttonHeader, { width: 30 }]} />
            </View>
            <ScrollView style={styles.container}>
                {
                    data.map((item, index) => (
                        <View key={index}>
                            <View style={styles.containerdb}>
                                <View>
                                    <Text style={styles.textdb}>Nome: {item.name}</Text>
                                    <Text style={styles.textdb}>Email: {item.email}</Text>
                                    <Text style={styles.textdb}>Senha: {item.password}</Text>
                                </View>
                            </View>
                            <View style={styles.divider} />
                        </View>
                    ))
                }
            </ScrollView>


        </View>
    )
}

export default Database