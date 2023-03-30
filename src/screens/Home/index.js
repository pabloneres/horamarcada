import React, { useState } from "react"
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput, Modal, Platform } from 'react-native'
import styles from "./styles"

import DateTimePicker from '@react-native-community/datetimepicker';

function Home({ navigation }) {

    const [showModal, setShowModal] = useState(false)
    const [date, setDate] = useState(new Date())


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} style={styles.buttonHeader}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../../assets/menu.png")} />
                </TouchableOpacity>
                <TextInput
                    placeholder="BUSCAR..."
                    style={styles.inputSearch}
                    placeholderTextColor="#fff"
                />
                <TouchableOpacity style={[styles.buttonHeader,]}>
                    <Image style={{ width: 30, height: 30 }} source={require("../../../assets/search.png")} />
                </TouchableOpacity>
            </View>

            <ScrollView style={styles.itemsContainer}>
                <View style={styles.barberContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortehomem02.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Barbearia Régua Certa</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Central da republica - 85</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 95887-7887</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 20:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity onPress={() => setShowModal(true)} style={styles.buttonDisponivel}>
                                    <Text style={styles.textButtonDisponivel}>Horários disponiveis hoje</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.starsContainer, { justifyContent: "space-between" }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 15, height: 15 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                        </View>
                        <Text style={{ fontWeight: "bold" }}>1203 Avaliações</Text>
                    </View>
                </View>

                <View style={styles.barberContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortehomem.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Star Hair</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Joao paulo - 15</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 92247-0999</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 21:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity onPress={() => setShowModal(true)} style={[styles.buttonEsgotado]}>
                                    <Text style={styles.textButtonDisponivel}>Horários esgotados hoje</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.starsContainer, { justifyContent: "space-between" }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 15, height: 15 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                        </View>
                        <Text style={{ fontWeight: "bold" }}>762 Avaliações</Text>
                    </View>
                </View>

                <View style={styles.barberContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortefeminino.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Barbearia Estilo</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Rua principal - 190</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 98773-3234</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 09:00h ás 20:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity onPress={() => setShowModal(true)} style={[styles.buttonEsgotado]}>
                                    <Text style={styles.textButtonDisponivel}>Horários esgotados hoje</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.starsContainer, { justifyContent: "space-between" }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 15, height: 15 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                        </View>
                        <Text style={{ fontWeight: "bold" }}>897 Avaliações</Text>
                    </View>
                </View>

                <View style={styles.barberContainer}>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/novabarber.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>New Barber</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Arnaldo - 321</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 98822-2156</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 22:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity onPress={() => setShowModal(true)} style={styles.buttonDisponivel}>
                                    <Text style={styles.textButtonDisponivel}>Horários disponiveis hoje</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.starsContainer, { justifyContent: "space-between" }]}>
                        <View style={{ flexDirection: "row" }}>
                            <Image style={{ width: 15, height: 15 }} source={require("../../../assets/star.png")} />
                            <Image style={{ width: 15, height: 15, marginLeft: 2 }} source={require("../../../assets/star.png")} />
                        </View>
                        <Text style={{ fontWeight: "bold" }}>1213 Avaliações</Text>
                    </View>
                </View>

            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={showModal && Platform.OS === "ios"}
                onRequestClose={() => {

                }}>
                <View
                    style={styles.modalContainer}
                >
                    <View
                        style={styles.modalView}
                    >
                        <Text style={styles.titleDate}>Selecione a data:</Text>
                        <DateTimePicker
                            style={{ width: "100%", marginVertical: 20 }}
                            value={date}
                            onChange={(e, value) => {
                                showModal(false)
                                setDate(value)
                            }}
                            locale="pt-BR"
                        />
                        <TouchableOpacity style={{ marginTop: 10 }} onPress={() => setShowModal(false)}>
                            <Text style={{ color: "blue", fontWeight: "bold" }}>OK</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal >
            {(showModal && Platform.OS === "android") && (
                <DateTimePicker
                    style={{ width: "100%" }}
                    value={date}
                    testID="picker"
                    locale="pt-BR"
                    onChange={(e, value) => {
                        showModal(false)
                        setDate(value)
                    }}
                />
            )}
        </View >
    )
}

export default Home