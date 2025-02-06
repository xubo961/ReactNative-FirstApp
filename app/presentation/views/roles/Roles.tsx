import React, {useState} from "react";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {Dimensions, FlatList, Text, View} from "react-native";
import viewModel from "./ViewModel";
import {RolesItem} from "./item";
import {GestureHandlerRootView} from "react-native-gesture-handler"
import Carousel from "react-native-reanimated-carousel";

export const RolesScreen = ({navigation, route}: PropsStackNavigation) => {
    const {user} = viewModel.RolesViewModel();

    const width = Dimensions.get("window").width;
    const height = Dimensions.get("window").height;

    // const [mode, setMode] = useState<any>('horizontal-stack');
    // const [snapDirection, setSnapDirection] = useState<'left' | 'right'>('left');

    //FlatList es un componente que nos permite iterar en un array como si fuera un For
    //Cualidad principal: Permite tener scrolling en el dispositivo móvil

    return (
        <GestureHandlerRootView style={{flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 50}}>
            <View>
                <Carousel
                    loop={false}
                    width={width}
                    height={height / 2}
                    autoPlay={true}
                    data={user?.roles!}
                    scrollAnimationDuration={1000}
                    onSnapToItem={(index) => console.log('current index:', index)}
                    renderItem={({ item }) => (
                        <RolesItem role={item} width={width - 100} height={420}></RolesItem>
                    )}
                />
            </View>
        </GestureHandlerRootView>
    );
}