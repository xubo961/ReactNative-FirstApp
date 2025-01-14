import * as React from "react";
import {Image, Text, TextInput, ToastAndroid, TouchableOpacity, View} from "react-native";
import styles from "./StylesRegister";
import {useNavigation} from "@react-navigation/native";

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
                               placeholder={"Correo Electrónico"}
                               keyboardType={"email-address"}
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

                <View style={styles.formInputContainer}>
                    <TextInput style={styles.formInput}
                               placeholder={"Confirmar Contraseña"}
                               keyboardType={"default"}
                               secureTextEntry={true}
                    >
                    </TextInput>
                </View>



                <View>
                    <TouchableOpacity style={styles.buttonForm}
                                      onPress={() => {
                                        /*  ToastAndroid.show("Presionado Toast", ToastAndroid.LONG)*/
                                          navigation.navigate("LoginScreen")
                                      }}
                    >
                        <Text style={styles.buttonFormText}>Registrarse</Text>
                    </TouchableOpacity>
                </View>

            </View>

        </View>
    );
}

export default RegistroScreen;