import React from "react"
import { TextInput, TouchableOpacity, View, Text, Image } from 'react-native'
import styles from "./styles"


function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={{ marginTop: 50, width: "100%", height: 300 }} source={require("../../../assets/logo.png")} />
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="LOGIN:"
                    style={styles.input}
                />
                <TextInput
                    placeholder="SENHA:"
                    style={styles.input}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate("HomeNav")} style={styles.button}>
                        <Text style={styles.textButton}>ENTRAR</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate("Register")} style={styles.button}>
                        <Text style={styles.textButton}>REGISTRAR-SE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Login