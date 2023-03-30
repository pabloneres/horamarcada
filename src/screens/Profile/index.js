import React from "react"
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from "./styles"

import SearchIcon from '../../../assets/search.svg'
import MenuIcon from '../../../assets/menu.svg'

function Profile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.buttonHeader}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../../assets/menu.png")} />
                </TouchableOpacity>
                <Text style={{ fontSize: 20, color: "#fff", textAlign: "center", fontWeight: "bold" }}>Perfil</Text>
                <TouchableOpacity style={[styles.buttonHeader, { width: 30 }]} />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 50 }}>
                <View style={styles.profileContainer}>
                    <View style={styles.imageContainer}></View>
                    <View style={styles.dadosContainer}>
                        <Text style={[{ color: "#fff", fontSize: 18 }]}>Iago Neres</Text>
                        <View style={{ marginVertical: 5, height: 4, width: 200, backgroundColor: "#fff" }} />
                        <Text style={[{ color: "#fff", fontSize: 18 }]}>iago@gmail.com</Text>
                    </View>
                </View>

                <Text style={styles.textBackground}>Avaliações</Text>
                <Text style={styles.textBackground}>Agendamentos</Text>
                <Text style={styles.textBackground}>Favoritos</Text>
                <Text style={styles.textBackground}>Notificações</Text>
                <Text style={styles.textBackground}>Historico</Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#fff", fontWeight: "bold", textAlign: "center", fontSize: 25, marginBottom: 50 }}>SAIR</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Profile