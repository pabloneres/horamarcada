import React, { useState } from "react"
import { TextInput, TouchableOpacity, View, Text, Image, Touchable, Modal, ActivityIndicator, ScrollView } from 'react-native'
import styles from "./styles"
import { SQLITE } from "../../db"


function Register({ navigation }) {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isLoading, setIsLoading] = useState(false)


    const onSubmit = () => {
        setIsLoading(true)

        const data = [
            name,
            email,
            password,
        ]

        SQLITE.transaction((trx) => {
            trx.executeSql("INSERT INTO 'users' ('name', 'email', 'password') VALUES (?, ?, ?);", data,
                (trxObj, result) => {
                    console.log(result)
                    setIsLoading(false)
                    return navigation.navigate("HomeNav")
                },
                (trxObj, error) => {
                    console.log(error),
                        setIsLoading(false)
                },
            )
        })
    }

    return (
        <ScrollView style={styles.container} bounces={false}>
            <Image resizeMode="contain" style={{ marginTop: 50, width: "100%", height: 300 }} source={require("../../../assets/logo.png")} />
            <View style={styles.inputContainer}>
                <TextInput
                    onChangeText={setName}
                    value={name}
                    placeholder="NOME:"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setEmail}
                    value={email}
                    placeholder="EMAIL:"
                    style={styles.input}
                />
                <TextInput
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                    placeholder="SENHA:"
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onSubmit} disabled={isLoading} style={styles.button}>
                        <Text style={styles.textButton}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Modal transparent visible={isLoading}>
                <View flex={1} style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.4)" }} >
                    <View style={{ padding: 10, backgroundColor: "#fff", width: "80%", borderRadius: 10, justifyContent: "center", alignItems: "center", }}>
                        <ActivityIndicator size={"large"} color="#25221D" />
                        <Text>Aguarde...</Text>
                    </View>
                </View>
            </Modal >
        </ScrollView >
    )
}

export default Register