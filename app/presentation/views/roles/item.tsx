import React from "react";
import {Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {RoleInterface} from "../../../domain/entities/Role";
import {AppColors} from "../../theme/AppTheme";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamsList} from "../../../../App";

interface Props {
    role: RoleInterface;
    width: number;
    height: number;
    navigation: NativeStackNavigationProp<RootStackParamsList, "RolesScreen", undefined>;
}

export const RolesItem = ({role, width, height, navigation}: Props) => {
    //uri equivale a una URL.

    return (
        <TouchableOpacity
            onPress={() => {
                if (role.name == "Admin") {
                    navigation.navigate("AdminTabNavigator")
                } else if (role.name == "Cliente") {
                    navigation.navigate("ClientTabNavigator")
                }
            }}
            style={{...styles.container, width: width, height: height}}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{uri: role.image}}></Image>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{role.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        paddingBottom: 20,
        paddingHorizontal: 7,
    },

    imageContainer: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 18,
    },

    image: {
        flex: 1,
        resizeMode: "contain",
    },

    textContainer: {
        height: 50,
        backgroundColor: AppColors.primary,
        borderBottomRightRadius: 18,
        borderBottomLeftRadius: 18,
        alignItems: "center",
        justifyContent: "center",
    },

    text: {
        color: "white",
    }

})