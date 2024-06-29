import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import ChatStyle from "../styles/ChatStyle";
import { useNavigation } from "@react-navigation/native";

const VerifySellerScreen = () => {
    const [isApproved, setIsApproved] = useState(false);
    const navigation =useNavigation();
    const handleApprove = () => {
        
        Alert.alert('Thông báo', 'Đã phê duyệt thành công');
    };
    const [sellers, setSellers] = useState([
        { id: 1, name: 'Người dùng 1', message: 'Tin nhắn người dùng 1', isConfirmed: false },
        { id: 2, name: 'Người dùng 2', message: 'Tin nhắn người dùng 2', isConfirmed: false },
        // Thêm các người dùng khác vào đây nếu cần
    ]);

    // Hàm xác nhận người dùng
    const handleConfirmSeller = (id) => {
        const updatedSellers = sellers.map(seller =>
            seller.id === id ? { ...seller, isConfirmed: true } : seller
        );
        setSellers(updatedSellers);
        // Hiển thị thông báo phê duyệt thành công
        Alert.alert('Thông báo', 'Phê duyệt thành công');
    };

    // Hàm xóa người dùng
    const handleDeleteSeller = (id) => {
        const updatedSellers = sellers.filter(seller => seller.id !== id);
        setSellers(updatedSellers);
        // Hiển thị thông báo xóa người dùng thành công
        Alert.alert('Thông báo', 'Xóa người dùng thành công');
    };

    return (
        <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 30, }}>
            <View style={{ width: 250, }}>
                <Text style={{ fontSize: 25, fontWeight: 'bold', }}>Danh sách các seller cần xác thực</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Instruction')}>
                    <Text style={{color:'gray', fontSize:15}}>Hướng dẫn (?)</Text>
                </TouchableOpacity>
            </View>
            <ScrollView>
                {sellers.map(seller=>( <View style={ChatStyle.chatboxList}>
                    <TouchableOpacity onPress={() => handleConfirmSeller(seller.id)}>
                    <View style={ChatStyle.chatboxList} key={seller.id}>

                            <View style={ChatStyle.avatarContainer}>
                            {seller.isConfirmed ? (
                                    <TouchableOpacity onPress={() => handleDeleteSeller(seller.id)}>
                                        <Image style={ChatStyle.avatar}
                                    source={require('../assets/checkmark.png')} />
                                    </TouchableOpacity>
                                ) : null}
                                
                            </View>

                            <View>
                                <Text style={{ marginTop: 8, fontWeight: '500' }}>Tên người dùng</Text>
                            </View>
                            {isApproved && <Text style={{ color: 'green', marginLeft: 'auto', fontSize: 20 }}>✓</Text>}

                        </View>

                    </TouchableOpacity>
                </View>
                ))}
                
            </ScrollView>
        </View>
    )
}
export default VerifySellerScreen;