//de vao app.js goi cho gon
import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import {View, Text} from 'react-native';

const Drawer = createDrawerNavigator();

const AppStack = ()=>{
    return (
        <View>
            <Text>ProfileScreen</Text>
        </View>
    )
}
export default ProfileScreen;