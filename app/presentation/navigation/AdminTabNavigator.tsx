import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RolesScreen} from "../views/roles/Roles";
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";
import {AdminOrderListScreen} from "../views/admin/order/list/OrderList";
import {AdminCategoryListScreen} from "../views/admin/category/list/CategoryList";

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AdminCategoryListScreen"
                        options={{
                            title: 'Lista de categorías',
                            tabBarLabel: 'Inicio',
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/list.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={AdminCategoryListScreen}
            />

            <Tab.Screen name="AdminOrderListScreen"
                        options={{
                            title: 'Pedidos realizados',
                            tabBarLabel: 'Pedidos',
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/orders.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={AdminOrderListScreen}
            />


            <Tab.Screen name="Perfil"
                        options={{
                            title: 'Mi perfil',
                            tabBarLabel: 'Perfil',
                            tabBarIcon: ({color}) => (
                                <Image
                                    source={require("../../../assets/my_user.png")}
                                    style={{width: 25, height: 25}}
                                ></Image>
                            )
                        }}
                        component={ProfileInfoScreen}
            />
        </Tab.Navigator>
    );
}