import {StyleSheet} from "react-native";
import {AppColors} from "../../theme/AppTheme";


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
        color: AppColors.secondary,
        borderBottomColor: AppColors.secondary,
    },

});

export default styles;