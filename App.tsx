import {NavigationContainer, StackActions} from "@react-navigation/native";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistroScreen from "./app/presentation/views/auth/Registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/roles/Roles";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigator";
import {useFonts} from "expo-font";
import {ActivityIndicator} from "react-native";
import {AppColors} from "./app/presentation/theme/AppTheme";
import {ClientTabNavigator} from "./app/presentation/navigation/ClientTabNavigator";

export type RootStackParamsList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    ProfileInfoScreen: undefined,
    RolesScreen: undefined,
    AdminTabNavigator: undefined,
    ClientTabNavigator: undefined

}
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
    const [fontsLoaded] = useFonts({
        "Montserrat-Bold": require("./assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-Regular": require("./assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Medium": require("./assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-Light": require("./assets/fonts/Montserrat-Light.ttf"),
    });

    if(!fontsLoaded) {
        return <ActivityIndicator size={"large"} color={AppColors.primary}></ActivityIndicator>;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RegistroScreen" component={RegistroScreen} options={{headerShown: true, title: 'Registro'}}/>
                <Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{title:"Navegación de administrador"}}></Stack.Screen>
                <Stack.Screen name={"ClientTabNavigator"} component={ClientTabNavigator} options={{title:"Navegación de cliente"}}></Stack.Screen>
                <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{title:"Navegación de administrador"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
