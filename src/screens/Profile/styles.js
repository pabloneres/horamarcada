import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: "#25221D",
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
    titleText: {
        fontSize: 20,
        backgroundColor: "#fce6ea",
        alignSelf: "flex-start",
        marginBottom: 5
    },
    textGenral: {
        fontSize: 13,
        marginBottom: 2
    },
    textBackground: {
        // backgroundColor: "#fce6ea",
        alignSelf: "flex-start",
        fontSize: 18,
        marginBottom: 10,
        color: "#FFF"
    },
    profileContainer: {
        justifyContent: 'center',
        alignItems: "center",
        marginBottom: 50,
    },
    imageContainer: {
        width: 150,
        height: 150,
        borderRadius: 150 / 2,
        backgroundColor: "#fff"
    },
    dadosContainer: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: -35,
        backgroundColor: "#25221D",
        height: 80,
        width: "100%"
    }
})