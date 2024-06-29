import React, { useEffect, useState } from 'react';
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import LoginStyle from '../styles/LoginStyle';
//icon
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//navigation
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
//async storage
import { AsyncStorage } from '@react-native-async-storage/async-storage';
//
import { useFormik } from 'formik';
import * as yup from 'yup';
//
export default function LoginScreen() {

    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //kiểm tra user có đăng nhập hay không
    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                const token = await AsyncStorage.getItems('authToken');

                if (token) {
                    navigation.replace('Mains')
                }
            } catch (err) {
                console.log('Lỗi', err)
            }
        };
        checkLoginStatus();
    }, [])

    const handleLogin = () => {
        const user = {
            email: email,
            password: password,
        };
        axios.post("http://localhost:8081/register", user).then((response) => {
            console.log(response)
            const token = response.data.token;
            //cài async storage
            AsyncStorage.setItem('authToken', token);
            navigation.replace('Main');
        }).catch((error) => {
            Alert.alert('Đăng nhập không thành công', 'Email/Mật khẩu không đúng');
            console.log(error);
        })
    };
    //note. đăng nhập, có kiểm tra, thành công thì đưa về home, thất bại thì xuất thông báo đỏ
    //xử lý oath2
    const validationSchema = yup.object().shape({
        email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
        password: yup.string().min(6, 'Mật khẩu cần ít nhất 6 kí tự').required('Vui lòng nhập mật khẩu'),
    });
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            console.log('Form submitted:', values);
            // Handle login logic here
        },
    });
    return (
        //View bọc màn hình
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
            <View style={LoginStyle.container}>

                {/*Tittle */}
                <View style={LoginStyle.titleContainer}>
                    <Text style={LoginStyle.bigText}>Đăng nhập</Text>
                    <Text style={LoginStyle.smallText}>Chào mừng quay trở lại!</Text>
                </View>

                {/*Input space */}
                <View style={[LoginStyle.inputContainer/*, { backgroundColor: 'coral' }*/]}>
                    {/*input tài khoản */}
                    <View>
                        <Text style={LoginStyle.abvInput}>Tài khoản</Text>
                        {/*icon+input */}
                        <View style={LoginStyle.iconInputContainer}>
                            <MaterialIcons
                                style={LoginStyle.icon}
                                name="email"
                                size={27}
                                color="#2B2523" />
                            <TextInput
                                onChangeText={formik.handleChange('email')}
                                onBlur={formik.handleBlur('email')}
                                value={formik.values.email}
                                style={[LoginStyle.Input, { fontSize: email ? 16 : 16 }]}
                                placeholder='user@gmail.com'
                                placeholderTextColor={'gray'}
                            />

                        </View>
                        {formik.touched.email && formik.errors.email ? (
                            <Text style={{ color: 'red', marginBottom: 5, fontWeight:'bold' }}>{formik.errors.email}</Text>
                        ) : null}
                    </View>
                    {/*input pass */}
                    <View>
                        <Text style={LoginStyle.abvInput}>Mật khẩu</Text>
                        {/*icon+input */}
                        <View style={LoginStyle.iconInputContainer}>
                            <AntDesign
                                style={LoginStyle.icon}
                                name="lock"
                                size={27}
                                color="#2B2523" />
                            <TextInput
                                onChangeText={formik.handleChange('password')}
                                onBlur={formik.handleBlur('password')}
                                value={formik.values.password}
                                style={[LoginStyle.Input, { fontSize: password ? 16 : 16 }]}
                                placeholder='Nhập mật khẩu của bạn'
                                secureTextEntry={true}
                                placeholderTextColor={'gray'}
                            />
                        </View>
                        {formik.touched.password && formik.errors.password ? (
                            <Text style={{ color: 'red', fontWeight:'bold' }}>{formik.errors.password}</Text>
                        ) : null}
                    </View>
                </View>
                {/*Quên mật khẩu */}
                <View style={LoginStyle.forgotContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
                        <Text style={LoginStyle.forgotText}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 25, }} />
                {/*Button đăng nhập*/}
                <View style={LoginStyle.btnContainer}>
                    <TouchableOpacity style={LoginStyle.btn}
                        onPress={() => navigation.navigate('Main')}
                    //onPress={handleLogin}
                    >
                        <Text style={LoginStyle.btnText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                {/* or */}
                <View style={LoginStyle.orContainer}>
                    <Text>Hoặc đăng nhập bằng</Text>
                </View>
                {/*Đăng nhập Oauth2 = ggle và fb */}
                <View style={LoginStyle.btnLoginContainer}>
                    <TouchableOpacity>
                        <AntDesign name="facebook-square" size={45} color="darkblue" />
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <Image
                            style={LoginStyle.googleLogo}
                            source={require('../assets/googleLogo.png')} />
                    </TouchableOpacity>
                </View>
                {/*Not a user yet? 
                View bọc toàn bộ các chữ, gộp hết vào giữa, đặt ngang*/}
                <View style={LoginStyle.toReg}>
                    <Text style={LoginStyle.textToReg}>Chưa có tài khoản?</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Register')}>
                        <Text style={LoginStyle.touchToReg}>Đăng ký</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}


