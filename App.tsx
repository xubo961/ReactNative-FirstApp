import {NavigationContainer, StackActions} from "@react-navigation/native";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistroScreen from "./app/presentation/views/auth/Registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/roles/Roles";
import {AdminTabNavigator} from "./app/presentation/navigation/AdminTabNavigator";

export type RootStackParamsList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    ProfileInfoScreen: undefined,
    RolesScreen: undefined,
    AdminTabNavigator: undefined
}
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RegistroScreen" component={RegistroScreen} options={{headerShown: true, title: 'Registro'}}/>
                <Stack.Screen name={"AdminTabNavigator"} component={AdminTabNavigator} options={{title: "Navegación de administrador"}}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
