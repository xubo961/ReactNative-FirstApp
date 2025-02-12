import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";
import {ClientCategoryListScreen} from "../views/client/category/list/CategoryList";
import {ClientOrderListScreen} from "../views/client/order/list/OrderList";

const Tab = createBottomTabNavigator();

export const ClientTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio"
                        options={{
                            title: "Lista de categorías",
                            tabBarLabel: "Inicio",
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/list.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={ClientCategoryListScreen}
            />
            <Tab.Screen name="Inicio"
                        options={{
                            title: "Pedidos realizados",
                            tabBarLabel: "Pedidos",
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/orders.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={ClientOrderListScreen}
            />
            <Tab.Screen name="Perfil"
                        options={{
                            title: "Mi perfil",
                            tabBarLabel: "Perfil",
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/user_menu.png")}
                                    style={{width: 25, height: 25}}
                                >
                                </Image>
                            )
                        }}
                        component={ProfileInfoScreen}/>
        </Tab.Navigator>
    );
}