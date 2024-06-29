import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const CreateShopScreen = () => {
    const [shopName, setShopName] = useState('');
    const [shopDescription, setShopDescription] = useState('');
    const [shopAddress, setShopAddress] = useState('');
    const navigation = useNavigation();
    const handleSubmit = () => {
        // Thực hiện xác nhận và gửi thông tin cửa hàng đến server
        if (shopName.trim() === '' || shopDescription.trim() === '' || shopAddress.trim() === '') {
            Alert.alert('Thông báo', 'Vui lòng điền đầy đủ thông tin của cửa hàng');
        } else {
            // Gửi thông tin cửa hàng tới server
            Alert.alert('Thông báo', 'Cửa hàng đã được tạo thành công');
            navigation.navigate('Profile');
        }
    };
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ width: 275 }}>
                    <Text style={styles.titleBig}>Tạo cửa hàng mới</Text>
                    <Text style={styles.titlesmall}>Hãy cùng tạo cửa hàng để đem sản phẩm đến các khách hàng nào!</Text>

                </View>

                <View>
                    <Text>Tên cửa hàng</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Tên cửa hàng"
                        value={shopName}
                        onChangeText={setShopName}
                    />
                </View>


                <View>
                    <Text>Mô tả</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Mô tả cửa hàng"
                        value={shopDescription}
                        onChangeText={setShopDescription}
                        multiline
                    />
                </View>
                <View>
                    <Text>Địa chỉ</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Địa chỉ cửa hàng"
                        value={shopAddress}
                        onChangeText={setShopAddress}
                    />
                </View>

                <View style={{justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                        <Text style={styles.buttonText}>Tạo cửa hàng</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    titleBig: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    titlesmall: {
        fontSize: 13,
        fontWeight: '600',
        color: 'gray',
        marginBottom: 50,
    },
    input: {
        width: '95%',
        height: 50,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: 'gray',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CreateShopScreen;