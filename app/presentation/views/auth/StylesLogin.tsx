import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "black"
    },
    title: {
        color: 'white',
        textAlign: 'center',
        marginTop: "6%",
        fontSize: 20,
        fontWeight: "bold"
    },
    imageContainer: {
        alignSelf: 'center',
        marginTop: 130,
    },
    image: {
        width: 125,
        height: 125,
    },
    formContainer: {
        width: '90%',
        backgroundColor: "white",
        paddingVertical: 25,
        paddingHorizontal: 15,
        marginHorizontal: "auto",
        marginTop: 80,
        borderRadius: 25,
    },
    formTittle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
        borderBottomWidth: 1,
        paddingBottom: 9,
        color: "#242424",
        borderBottomColor: "#242424",
    },
    formInputContainer: {
        marginBottom: 20
    },
    formInput: {
        borderColor: "#d8d8d8",
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonForm: {
        backgroundColor: "#008fff",
        paddingVertical: 9,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonFormText: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 17
    }
});

export default styles;