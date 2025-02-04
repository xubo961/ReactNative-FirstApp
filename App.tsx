import {NavigationContainer, StackActions} from "@react-navigation/native";
import {LoginScreen} from "./app/presentation/views/auth/Login";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import RegistroScreen from "./app/presentation/views/auth/Registro";
import {ProfileInfoScreen} from "./app/presentation/views/profile/info/ProfileInfo";
import {RolesScreen} from "./app/presentation/views/roles/Roles";

export type RootStackParamsList = {
    LoginScreen: undefined,
    RegistroScreen: undefined,
    ProfileInfoScreen: undefined,
    RolesScreen: undefined
}
const Stack = createNativeStackNavigator<RootStackParamsList>();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                <Stack.Screen name="RegistroScreen" component={RegistroScreen} options={{headerShown: true, title: 'Registro'}}/>
                <Stack.Screen name={"ProfileInfoScreen"} component={ProfileInfoScreen} options={{headerShown: true, title:"Perfil"}}/>
                <Stack.Screen name={"RolesScreen"} component={RolesScreen} options={{headerShown: true, title:"Roles"}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
