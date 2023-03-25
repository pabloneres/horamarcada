import React from "react"
import { Image, View, Text, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from "./styles"

import SearchIcon from '../../../assets/search.svg'
import MenuIcon from '../../../assets/menu.svg'

function Home({ navigation }) {
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
                                <TouchableOpacity style={styles.buttonDisponivel}>
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
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortehomem02.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Barbearia Régua Certa</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Central da republica - 85</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 95887-7887</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 20:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity style={styles.buttonDisponivel}>
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
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortehomem02.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Barbearia Régua Certa</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Central da republica - 85</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 95887-7887</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 20:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity style={styles.buttonDisponivel}>
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
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortehomem02.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Barbearia Régua Certa</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Central da republica - 85</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 95887-7887</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 20:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity style={styles.buttonDisponivel}>
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
                        <Image style={{ width: 150, height: 100, borderRadius: 5 }} resizeMode="cover" source={require("../../../assets/cortehomem02.jpg")} />
                        <View style={styles.dadosContainer}>
                            <Text style={styles.titleText}>Barbearia Régua Certa</Text>
                            <Text style={styles.textGenral}>End: <Text style={styles.textBackground}>Av. Central da republica - 85</Text></Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Telefone: 11 95887-7887</Text>
                            <Text style={[styles.textGenral, styles.textBackground]}>Aberto: 08:00h ás 20:00h</Text>
                            <View style={styles.avaliationContainer}>
                                <TouchableOpacity style={styles.buttonDisponivel}>
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

            </ScrollView>
        </View>
    )
}

export default Home