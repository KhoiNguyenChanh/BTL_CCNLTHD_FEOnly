import { useNavigation } from '@react-navigation/native'
import React, { Component } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const CartEmpty = () => {
    const navigation =useNavigation();
    const handlePress =() => {
        navigation.navigate('Main');
    }
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center', }}>
            <Text style={{textAlign:'center', fontSize:25, fontWeight:'bold', marginBottom:55,top:-75}}>Giỏ hàng</Text>
            <View style={{ justifyContent:'center', alignItems:'center', marginBottom:90,}}>
                <Image style={{width:300, height:300,}} resizeMode='contain' source={require('../assets/emptycart.png')}/>
                <Text style={{color:'lightgray', fontSize:20, fontWeight:'500'}}> ! Giỏ hàng trống này ! </Text>
            </View>
            <View  style={{top:80}}>
                <TouchableOpacity 
                onPress={handlePress}
                style={{backgroundColor:'gray', borderRadius:30}}>
                    <Text style={{color:'white', fontSize:20, fontWeight:'500', padding:20,}}>!!! ĐI MUA SẮM THÔI !!!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartEmpty
