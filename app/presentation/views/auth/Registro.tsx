import * as React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegister";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/TextInput";

function RegistroScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTittle}>REGISTRO</Text>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/confirm_password.png")}
                    placeholder={"Repetir contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={() => alert("")}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton text={"Registrarse"} onPressFromInterface={() => {
                        navigation.navigate("LoginScreen")
                        alert("Registro finalizado")
                    }}></RoundedButton>
                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;