import { StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        backgroundColor: "#25221D",
        flex: 1,
        paddingHorizontal: 50,
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
    }
})