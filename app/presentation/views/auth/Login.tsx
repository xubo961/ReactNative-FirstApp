import React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesLogin";
import {useNavigation} from "@react-navigation/native";

export function LoginScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../../../assets/logo.png")}></Image>
                <Text style={styles.title}>First App</Text>
            </View>

            <View style={styles.formContainer}>
                <Text style={styles.formTittle}>INICIAR SESIÓN</Text>

                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Usuario"}
                               keyboardType={"default"}
                               secureTextEntry={false}
                    >
                    </TextInput>
                </View>

                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Contraseña"}
                               keyboardType={"default"}
                               secureTextEntry={true}
                    >
                    </TextInput>
                </View>

                <View>
                    <TouchableOpacity style={styles.buttonForm}
                                      onPress={() => {
                                          ToastAndroid.show("Presionado Toast", ToastAndroid.LONG)
                                      }}
                    >
                        <Text style={styles.buttonFormText}>Entrar</Text>
                    </TouchableOpacity>
                </View>

                <View style={{marginTop: 30}}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("RegistroScreen")
                    }}>
                        <Text>Registarme</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}