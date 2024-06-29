import React, { Component } from 'react'
import { Alert, Text, TouchableOpacity, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler';
import UserProfileStyle from '../styles/UserProfileStyle';

const UserProfile =()=> {
 
    return (
      <View style={{marginHorizontal:8, marginVertical:15,}}>
        <View style={{marginBottom:5,}}>
            <Text style={UserProfileStyle.title}>Tên người dùng</Text>
            <View style={UserProfileStyle.changableTextContainer}>
                <TextInput style={UserProfileStyle.changableText}>
                    <Text>NGUYEN VAN A</Text>
                </TextInput>
            </View>

            
            
        </View>

        <View style={{marginBottom:5,}}>
            <Text style={UserProfileStyle.title}>Email</Text>
            <View style={UserProfileStyle.changableTextContainer}>
                <TextInput style={UserProfileStyle.changableText}>
                    <Text>vananguyen@gmail.com</Text>
                </TextInput>
            </View>
        </View>

        <View style={{marginBottom:5,}}>
            <Text style={UserProfileStyle.title}>Số điện thoại</Text>
            <View style={UserProfileStyle.changableTextContainer}>
                <TextInput 
                placeholder='Nhập số điện thoại'
                style={UserProfileStyle.changableText}>
                </TextInput>
            </View>
        </View>  
        <View style={{marginBottom:5,}}>
            <Text style={UserProfileStyle.title}>Quốc tịch</Text>
            <View style={UserProfileStyle.changableTextContainer}>
                <TextInput 
                placeholder='Nhập quốc tịch'
                style={UserProfileStyle.changableText}>
                </TextInput>
            </View>
        </View>  
        <View style={{marginBottom:5,}}>
            <Text style={UserProfileStyle.title}>Mật khẩu</Text>
            <View style={UserProfileStyle.changableTextContainer}>
                <TextInput 
                placeholder='........'
                secureTextEntry={true}
                style={UserProfileStyle.changableText}>
                </TextInput>
            </View>
        </View> 
        <View style={{marginBottom:5,}}>
            <Text style={UserProfileStyle.title}>Nhập lại mật khẩu</Text>
            <View style={UserProfileStyle.changableTextContainer}>
                <TextInput 
                placeholder='........'
                secureTextEntry={true}
                style={UserProfileStyle.changableText}>
                </TextInput>
            </View>
        </View>
        <View style={{  marginVertical:20, alignItems:'center'}}>
            <TouchableOpacity 
                onPress={()=>{
                    [Alert.alert('Cập nhật tài khoản', 'Cập nhật thành công')],
                    [ ]
                }}
                style={[UserProfileStyle.changableTextContainer, {width:200, }]}>
                <Text style={[UserProfileStyle.changableText, {textAlign:'center'}]}>Cập nhật tài khoản</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
}
export default UserProfile;
