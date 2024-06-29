//NoT tOtAlLy fOrGor to LeT uSeR ChOOse addReSS
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Import Icon từ thư viện vector icons
import { useNavigation } from '@react-navigation/native';

const CheckoutScreen = ({ route }) => {
    const navigation = useNavigation();
    const { totalPrice } = route.params;
    const [paymentMethod, setPaymentMethod] = useState(''); // State để lưu phương thức thanh toán được chọn

    const handlePayment = (method) => {
        setPaymentMethod(method);
    };
    
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thanh toán</Text>
            <View style={styles.orderSummary}>
                <Text style={styles.summaryLabel}>Tổng giá tiền:</Text>
                <Text style={styles.summaryValue}>{totalPrice}.000đ</Text>
            </View>

            <Text style={{ fontSize: 20 }}>Các hình thức thanh toán:</Text>
            <View style={{marginTop:20,borderTopWidth:0.5}}>
                {/*MOMO */}
                <View style={{marginVertical:10}}>
                    <TouchableOpacity onPress={() => handlePayment('online1')} style={styles.paymentOption}>
                        <Image style={{width:50, height:50}} source={require('../assets/momo.png')}/>
                        <Text style={styles.paymentOptionText}>Thanh toán bằng Momo</Text>
                        {paymentMethod === 'online1' && <AntDesign name="checkcircle" size={24} color="green" />}
                        {/* Hiển thị biểu tượng dấu check nếu phương thức thanh toán được chọn */}
                    </TouchableOpacity>
                </View>
                {/*ZaloPay */}
                <View style={{marginVertical:10}}>
                <TouchableOpacity onPress={() => handlePayment('online2')} style={styles.paymentOption}>
                        <Image style={{width:30, height:30, marginRight:7,marginLeft:10,}} source={require('../assets/zalopay.png')}/>
                        <Text style={styles.paymentOptionText}>Thanh toán bằng ZaloPay</Text>
                        {paymentMethod === 'online2' && <AntDesign name="checkcircle" size={24} color="green" />}
                        {/* Hiển thị biểu tượng dấu check nếu phương thức thanh toán được chọn */}
                    </TouchableOpacity>
                </View >
                {/*Paypal */}
                <View style={{marginVertical:10}}>
                <TouchableOpacity onPress={() => handlePayment('online3')} style={styles.paymentOption}>
                        <Image style={{width:30, height:30, marginRight:7,marginLeft:10,}} source={require('../assets/paypal.png')}/>
                        <Text style={styles.paymentOptionText}>Thanh toán bằng ZaloPay</Text>
                        {paymentMethod === 'online3' && <AntDesign name="checkcircle" size={24} color="green" />}
                        {/* Hiển thị biểu tượng dấu check nếu phương thức thanh toán được chọn */}
                    </TouchableOpacity>
                </View>
                {/*Stripe */}
                <View style={{marginVertical:10}}>
                <TouchableOpacity onPress={() => handlePayment('online4')} style={styles.paymentOption}>
                        <Image style={{width:30, height:30, marginRight:7,marginLeft:10,}} source={require('../assets/stripe.png')}/>
                        <Text style={styles.paymentOptionText}>Thanh toán bằng ZaloPay</Text>
                        {paymentMethod === 'online4' && <AntDesign name="checkcircle" size={24} color="green" />}
                        {/* Hiển thị biểu tượng dấu check nếu phương thức thanh toán được chọn */}
                    </TouchableOpacity>
                </View>
                <View style={{marginVertical:10}}>
                    <TouchableOpacity onPress={() => handlePayment('cash')} style={styles.paymentOption}>
                    <Image style={{width:30, height:30, marginRight:7,}} source={require('../assets/money.jpg')}/>
                        <Text style={{fontSize:17}}>Thanh toán trực tiếp khi nhận hàng (COD)</Text>
                        {paymentMethod === 'cash' && <AntDesign name="checkcircle" size={24} color="green" />}
                    </TouchableOpacity>
                </View>

                <View style={{ alignItems:'center', marginTop:45,}}>
                    <TouchableOpacity 
                    onPress={()=>{
                        Alert.alert('Đặt hàng thành công!', "Bạn đã đặt hàng thành công");
                        navigation.navigate('Main')
                    }}
                    style={{ backgroundColor:'gray', alignItems:'center', width:230}}>
                        <Text style={{padding:15,fontSize:17, fontWeight:'bold', color:'white'}}>Thanh toán</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    orderSummary: {
        marginBottom: 20,

    },
    summaryLabel: {
        fontSize: 18,
        marginBottom: 5,
    },
    summaryValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    paymentOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    paymentOptionText: {
        fontSize: 18,
        marginRight: 10,
    },
});

export default CheckoutScreen;