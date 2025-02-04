import React from "react";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import {FlatList, Text, View} from "react-native";
import viewModel from "./ViewModel";

export const RolesScreen = ({navigation, route}: PropsStackNavigation) => {
    const {user} = viewModel.RolesViewModel();

    return (
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
            <FlatList data={user?.roles}
                      renderItem={({item}) =>
                          <Text>
                              {item.name}
                              {item.description}
                              {item.image}
                          </Text>}
            ></FlatList>
        </View>
    );
}