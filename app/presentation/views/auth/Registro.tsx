import * as React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegister";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/TextInput";
import {useEffect, useState} from "react";
import viewModel from "./ViewModel";

function RegistroScreen() {

    const navigation = useNavigation();
    // const [nombre, setNombre] = useState<string>("");

    const {
        firstName,
        lastName,
        email,
        number,
        password,
        repeatPassword,
        onChangeRegister,
        register,
        errorMessage
    } = viewModel.RegisterViewModel();

    useEffect(() => {
        if (errorMessage != "") {
            ToastAndroid.show(errorMessage, ToastAndroid.LONG)
        }
    }, [errorMessage]);

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
                    onPressFormInterface={(text) => onChangeRegister('firstName', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/my_user.png")}
                    placeholder={"Apellidos"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('lastName', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('email', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/phone.png")}
                    placeholder={"Teléfono"}
                    keyboardType="numeric"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeRegister('number', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => onChangeRegister('password', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/confirm_password.png")}
                    placeholder={"Repetir contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => onChangeRegister('repeatPassword', text)}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton text={"Registrarse"} onPressFromInterface={() => {
                        register()
                    }}></RoundedButton>
                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;