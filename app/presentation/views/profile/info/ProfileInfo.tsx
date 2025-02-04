import {Button, Text, View} from "react-native";
import ViewModel from "./ViewModel";
import {PropsStackNavigation} from "../../../interfaces/StackNav";


export const ProfileInfoScreen = ({navigation, route}: PropsStackNavigation) => {

    const {deleteSession} = ViewModel.ProfileViewModel()

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
            <Text>Ventana de perfil</Text>
            <Button title={"Cerrar sesión"} onPress={
                () => {
                    deleteSession();
                    navigation.navigate("LoginScreen");
                }
            }></Button>
        </View>
    );

}