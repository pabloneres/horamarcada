import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: "#EFEFEF",
        flex: 1,
    },
    header: {
        paddingHorizontal: 10,
        width: "100%",
        height: 80,
        backgroundColor: "#25221D",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    inputSearch: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        backgroundColor: "#38342E",
        flex: 1,
        borderRadius: 10,
        fontSize: 18,
        marginHorizontal: 10,
    },
    buttonHeader: {
        width: 50,
    },
    barberContainer: {
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#ffffff",
        padding: 10,
        marginBottom: 20,
        borderRadius: 10
    },
    itemsContainer: {
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    dadosContainer: {
        marginLeft: 10,
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
    },
    titleText: {
        fontSize: 16,
        alignSelf: "flex-start",
        marginBottom: 5,
        fontWeight: "bold",
    },
    textGenral: {
        fontSize: 13,
        marginBottom: 2
    },
    textBackground: {
        alignSelf: "flex-start",
    },
    buttonDisponivel: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        backgroundColor: "#A0F9AF",
        padding: 10,
        paddingVertical: 5,
        borderRadius: 30,
    },
    buttonEsgotado: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 5,
        backgroundColor: "#D8D8D8",
        padding: 10,
        paddingVertical: 5,
        borderRadius: 30,
    },
    textButtonDisponivel: {
    },
    avaliationContainer: {
        flexDirection: "column",
    },
    starsContainer: {
        width: "100%",
        marginTop: 5,
        flexDirection: "row",
        alignItems: "flex-end",
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        paddingTop: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    titleDate: {
        marginBottom: 10,
        fontWeight: "bold",
        fontSize: 18
    }
})