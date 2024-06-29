import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import HomeScreen from "../../ECommerceApp/Screens/HomeScreen";
import CartScreen from "../../ECommerceApp/Screens/CartScreen";
import ProfileScreen from "../../ECommerceApp/Screens/ProfileScreen";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen}/>
        <Tab.Screen name='Cart' component={CartScreen}/>
        <Tab.Screen name='Profile' component={ProfileScreen}/>

    </Tab.Navigator>

}
export default TabNavigator;