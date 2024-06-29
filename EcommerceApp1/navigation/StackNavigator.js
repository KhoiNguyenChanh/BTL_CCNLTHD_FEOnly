import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
//icon
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

import LoginScreen from '../Screens/LoginScreen';

import RegisterScreen from '../Screens/RegisterScreen';

import HomeScreen from '../Screens/HomeScreen';

import ForgotPass from '../Screens/ForgotPass';

import ChatScreen1 from '../Screens/ChatScreen1';
import ChatScreen2 from '../Screens/ChatScreen2';

import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';
import ShopScreen from '../Screens/ShopScreen';
import ProductScreen from '../Screens/ProductScreen';
import CheckoutScreen from '../Screens/CheckoutScreen';

import CommentScreen from '../Screens/CommentScreen';
import UserReview from '../components/UserReview';
import CreateShopScreen from '../Screens/CreateShopScreen';
import VerifySellerScreen from '../Screens/VerifySellerScreen';
import PushProductScreen from '../Screens/PushProductScreen';
import RegisterUser from '../Screens/RegisterUser';
import RegisterSeller from '../Screens/RegisterSeller';
import { CartProvider } from '../components/CartContext';
import SpecialFunc from '../Screens/specialFunc';
import Instruction from '../Screens/Instruction';
import StatisticsScreen from '../Screens/StatisticScreen';



const StackNavigator = () => {

    const Stack = createStackNavigator();
    const Tab = createBottomTabNavigator();

    function BottomTabs() {
        return (
            <Tab.Navigator>
                {/*Home */}
                <Tab.Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarLabelStyle: { color: '#928E85' },
                        headerShown: false,
                        //chọn tabbar làm icon sáng lên
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Entypo name="home" size={24} color="#928E85" />
                            ) : (
                                <AntDesign name="home" size={24} color="black" />
                            )

                    }}
                />
                {/*Chat */}
                <Tab.Screen
                    name='Chat'
                    component={ChatScreen1}
                    options={{
                        tabBarLabel: 'Chat',
                        tabBarLabelStyle: { color: '#928E85' },
                        headerShown: false,
                        //chọn tabbar làm icon sáng lên #008E97
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="chatbox-ellipses" size={24} color="#928E85" />
                            ) : (
                                <Ionicons name="chatbox-ellipses-outline" size={24} color="black" />
                            )

                    }}
                />
                {/*Profile */}
                <Tab.Screen
                    name='Profile'
                    component={ProfileScreen}
                    options={{
                        tabBarLabel: 'Profile',
                        tabBarLabelStyle: { color: '#928E85' },
                        headerShown: false,
                        //chọn tabbar làm icon sáng lên
                        tabBarIcon: ({ focused }) =>
                            focused ? (
                                <Ionicons name="person" size={24} color="#928E85" />
                            ) : (
                                <Ionicons name="person-outline" size={24} color="black" />
                            )

                    }}
                />
            </Tab.Navigator>
        )
    }
    return (
        
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name='Login' component={LoginScreen} options={{ headerShown: false }} />
                    {/*Registers*/}
                    <Stack.Screen name='Register' component={RegisterScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='RegisterUser' component={RegisterUser} options={{ headerShown: false }} />
                    <Stack.Screen name='RegisterSeller' component={RegisterSeller} options={{ headerShown: false }} />

                    <Stack.Screen name='Forgot' component={ForgotPass} options={{ headerShown: false }} />
                    <Stack.Screen name='Cart' component={CartScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Product' component={ProductScreen} options={{ title: '' }} />
                    <Stack.Screen name='Chat2' component={ChatScreen2} options={{ title: 'Chat', headerTitleAlign: 'center' }} />
                    <Stack.Screen name='Shop' component={ShopScreen} options={{ title: '', headerShown: false }} />
                    <Stack.Screen name='Comment' component={CommentScreen} options={{ title: 'Bình luận' }} />
                    <Stack.Screen name='UserReview' component={UserReview} options={{ title: 'Đánh giá sản phẩm', headerTitleAlign: 'center' }} />
                    <Stack.Screen name='CreateShop' component={CreateShopScreen} options={{title: ''}} />
                    <Stack.Screen name='Instruction' component={Instruction} options={{title: 'Hướng dẫn cách làm'}} />
                    <Stack.Screen name='VerifySeller' component={VerifySellerScreen} options={{ title: ''}} />
                    <Stack.Screen name='PushProduct' component={PushProductScreen} options={{ title: ''}} />
                    <Stack.Screen name='specialFunc' component={SpecialFunc} options={{ title: ''}} />
                    {/*yet to be done */}
                    <Stack.Screen name='Checkout' component={CheckoutScreen} options={{ headerShown: false }} />
                    <Stack.Screen name='Statistic' component={StatisticsScreen} options={{ title: ''}} />
                    

                    {/*Cách nest, nhớ đổi tên mấy cái nhắc tới Home thành Main */}
                    <Stack.Screen
                        name='Main'
                        component={BottomTabs}
                        options={{ headerShown: false }} />

                </Stack.Navigator>
            </NavigationContainer>
    )
}

export default StackNavigator;
