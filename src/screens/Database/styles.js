import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: "#25221D",
        flex: 1,
        paddingHorizontal: 50,
        paddingTop: 20,
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
    input: {
        marginBottom: 10,
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: "#fff",
        borderRadius: 50
    },
    inputContainer: {
        marginTop: -10,
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    buttonContainer: {
        marginTop: 20
    },
    button: {
        width: 200,
        paddingVertical: 10,
        backgroundColor: "#fff",
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10
    },
    textButton: {
        // backgroundColor: "red"
    },
    containerdb: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textdb: {
        color: "#fff"
    },
    divider: {
        height: 1,
        width: "100%",
        backgroundColor: "#fff",
        marginVertical: 10
    }
})