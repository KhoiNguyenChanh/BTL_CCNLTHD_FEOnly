import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import LoginStyle from '../styles/LoginStyle';
import { useNavigation } from '@react-navigation/native';

const ForgotPass=()=> {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        // Thực hiện xác nhận và gửi email để đặt lại mật khẩu
        if (email.trim() === '') {
            Alert.alert('Thông báo', 'Vui lòng nhập địa chỉ email của bạn');
        } else {
            // Gửi yêu cầu đặt lại mật khẩu tới email đã nhập
            Alert.alert('Thông báo', 'Một liên kết đặt lại mật khẩu đã được gửi đến email của bạn');
        }
    };
    const navigation= useNavigation();
    return (
        <View style={styles.container}>
            {/*Tittle */}
            <View style={LoginStyle.titleContainer}>
                    <Text style={LoginStyle.bigText}>Quên mật khẩu</Text>
                    <Text style={LoginStyle.smallText}>Có vẻ như bạn đã quên mất mật khẩu nhỉ?</Text>
            </View>
            <View>
              <Text style={{color:'gray', marginVertical:10,marginHorizontal:15,}}>Hãy nhập lại email của bạn</Text>
              <TextInput
                style={styles.input}
                placeholder="Địa chỉ email"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />
            </View>
           <View style={{alignItems:'center'}}>
             <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Gửi yêu cầu đặt lại mật khẩu</Text>
            </TouchableOpacity>
           </View>

           <View style={{alignItems:'center', marginVertical:20,}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
                <Text style={{fontSize:15, color:'gray',fontWeight:'bold'}}>Quay lại đăng nhập</Text>
              </TouchableOpacity>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 5,
    },
    
    input: {
        width: 350,
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 20,
        marginLeft:10,
    },
    button: {
        alignItems:'center',
        width:200,
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
      textAlign:'center',
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default ForgotPass;