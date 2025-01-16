import React, {useState} from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";
import {RoundedButton} from "../../components/RoundedButton";
import {FormInputInlineWithIcon} from "../../components/TextInput";

export function LoginScreen() {

    const navigation = useNavigation();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.title}>Food App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTittle}>INICIAR SESIÓN</Text>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/user.png")}
                    placeholder={"Nombre"}
                    keyboardType="default"
                    secureTextEntry={false}
                    onPressFormInterface={(text: string) => setEmail(text)}
                ></FormInputInlineWithIcon>

                <FormInputInlineWithIcon
                    image={require("../../../../assets/password.png")}
                    placeholder={"Contraseña"}
                    keyboardType="default"
                    secureTextEntry={true}
                    onPressFormInterface={(text) => setPassword(text)}
                ></FormInputInlineWithIcon>

                <View>
                    <RoundedButton text={"Iniciar Sesión"} onPressFromInterface={() => {
                        alert("Hola")
                    }}></RoundedButton>
                </View>

                <View style={{marginTop: 30}}>
                        <RoundedButton text={"Registrar"} onPressFromInterface={() => {
                            navigation.navigate("RegistroScreen")
                        }}></RoundedButton>
                </View>
            </View>

        </View>
    )
}