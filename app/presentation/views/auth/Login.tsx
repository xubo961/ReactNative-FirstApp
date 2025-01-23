import React, {useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/TextInput";
import viewModel from "./ViewModel";
import {createStackNavigator} from "@react-navigation/native/lib/typescript/module/src/__stubs__/createStackNavigator";
import {NativeStackNavigationProp, NativeStackView} from "@react-navigation/native-stack";
import {RootStackParamsList} from "../../../../App";

export function LoginScreen() {

    const router = useNavigation<NativeStackNavigationProp<RootStackParamsList>>();

    // const [email, setEmail] = useState<string>("");
    // const [password, setPassword] = useState<string>("");

    const {email, password, onChangeLogin} = viewModel.LoginVIewModel();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.title}>Food App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTittle}>INICIAR SESIÓN</Text>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/email.png")}
                    placeholder={"Correo electrónico"}
                    keyboardType="email-address"
                    secureTextEntry={false}
                    onPressFormInterface={(text) => onChangeLogin('email', text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text:string) => onChangeLogin('password', text)}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton text={"Iniciar Sesión"} onPressFromInterface={() => {
                        alert("Usuario" + email + "; contraseña: " + password);
                    }}></RoundedButton>
                </View>

                <View style={{marginTop: 30}}>
                        <RoundedButton text={"Registrar"} onPressFromInterface={() => {
                            router.navigate("RegistroScreen")
                        }}></RoundedButton>
                </View>
            </View>

        </View>
    )
}