import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio"
                        options={{
                            title: 'Inicio',
                            tabBarLabel: 'Inicio',
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/list.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={RolesScreen}
            />

            <Tab.Screen name="Perfil"
                        options={{
                            title: 'Mi perfil',
                            tabBarLabel: 'Mi perfil',
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/user_menu.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={ProfileInfoScreen}
            />
        </Tab.Navigator>
    );
}