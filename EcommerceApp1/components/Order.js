import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'



const Order = () => {
  const navigation = useNavigation();
  const [order1, setOrder1] = useState('1300');
  const [ order2, setOrder2] = useState('2600');
  return (
    <View style={{ flex: 1, marginHorizontal: 7 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', marginVertical: 30, borderWidth: 0.5, backgroundColor: 'lightgray', justifyContent: 'space-between', padding: 20, }}>
          <View>
            <Text>Order 1</Text>
            <Text>Tổng tiền: 1300.000đ</Text>
          </View>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('Checkout',{ totalPrice:order1})}
            style={{ borderRadius:20, backgroundColor:'gray', justifyContent:'center'}}>
            <Text style={{ padding:10, fontWeight:'700', fontSize:15, color:'white'}}>Checkout</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', marginVertical: 10, borderWidth: 0.5, backgroundColor: 'lightgray', justifyContent: 'space-between', padding: 20, }}>
          <View>
            <Text>Order 2</Text>
            <Text>Tổng tiền: 2600.000đ</Text>
          </View>
          <TouchableOpacity 
            onPress={()=> navigation.navigate('Checkout',{ totalPrice:order2})}
            style={{ borderRadius:20, backgroundColor:'gray', justifyContent:'center'}}>
            <Text style={{ padding:10, fontWeight:'700', fontSize:15, color:'white'}}>Checkout</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

    </View>
  )
}
export default Order;
