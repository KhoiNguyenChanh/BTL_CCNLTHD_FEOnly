import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import HomeStyle from "../styles/HomeStyle";
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import ProductStyle from "../styles/ProductStyle";
import ChatStyle from "../styles/ChatStyle";
import ProductItem from "../components/ProductItem";
import ProductData from '../tempData/ProductData';
const ShopScreen = () => {

    const navigation = useNavigation();
    const [iconPressed, setIconPress] = useState(false);
    const handlePress = () => {
        setIconPress(!iconPressed);
    }
    const [products, setProducts] = useState([]);
    const [searchText, setSearchText] = useState('');
    // Hàm lọc sản phẩm dựa trên giá trị nhập vào trong search bar
    const filterProducts = () => {
        return products.filter(product =>
            product.title.toLowerCase().includes(searchText.toLowerCase()) ||
            product.price.toString().includes(searchText.toLowerCase())
            // tìm tên shop, nhưng chưa có data cho cái đó
            // || product.description.toLowerCase().includes(searchText.toLowerCase())
        );
    };
    // Render mỗi sản phẩm trong danh sách trong tempdata
    const renderItem = () => {
        return filterProducts().map(product => (
            <TouchableOpacity onPress={() => navigation.navigate('Product', { productId: product._id })}>
                <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ddd', flexDirection: 'row' }}>
                    <Image source={{ uri: product.imageUrl }} style={{ width: 80, height: 80, marginRight: 10 }} />
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{product.name}</Text>
                        <Text style={{ fontSize: 14, color: '#777' }}>{product.description}</Text>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5 }}>{product.price}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        ));
    };
    return (
        <View style={{ flex: 1 }}>

            <View style={HomeStyle.header}>

                <TouchableOpacity
                    onPress={filterProducts}
                    style={HomeStyle.headerContent}>
                    <AntDesign
                        style={HomeStyle.searchIcon}
                        name="search1"
                        size={27}
                        color="gray" />
                    <TextInput
                        style={{ width: 300, height: 50, }}
                        placeholder='Bạn muốn tìm gì?.....'
                        placeholderTextColor={'gray'}
                        onChangeText={text => setSearchText(text)}
                    />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => navigation.navigate('Cart')}>
                    <View style={HomeStyle.cartContainer}>

                        <AntDesign
                            name="shoppingcart"
                            size={30}
                            color="black"
                            style={HomeStyle.cart}
                        />
                        <View style={HomeStyle.onCart}>
                            {/*Truyền hàm đếm số lượng sản phẩm vào */}
                            <Text style={HomeStyle.numberOnCart}>{2}</Text>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {/*Tên shop */}
                <View style={[ProductStyle.shopContainer, { flexDirection: 'row' }]}>

                    <View style={ProductStyle.shopContent}>
                        <View style={ChatStyle.avatarContainer}>
                            <Image style={ChatStyle.avatar}
                                source={require('../assets/profile_default.png')} />
                        </View>
                        <View>
                            <Text style={ProductStyle.textName}>Shop Name</Text>
                            <Text style={ProductStyle.text_10}>Online for n hours</Text>
                            <Text style={ProductStyle.text_10}>rating</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: 15, marginLeft: 80, }}>
                        <TouchableOpacity
                            style={{ borderRadius: 5, borderWidth: 0.5 }}
                            onPress={handlePress}>
                            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>
                                {iconPressed ? (<Ionicons name="checkmark" size={15} color="black" />) : (<AntDesign name="plus" size={15} color="black" />)}
                                <Text style={{ fontSize: 10, marginLeft: 5, }}>Theo dõi</Text>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={{ marginVertical: 10, borderRadius: 5, borderWidth: 0.5 }}>
                            <View style={{ flexDirection: 'row', padding: 5, justifyContent: 'center' }}>

                                <Ionicons style={{ right: 10, }} name="chatbox-ellipses-outline" size={15} color="black" />

                                <Text style={{ fontSize: 10, marginLeft: 5 }}>Chat</Text>
                            </View>
                        </TouchableOpacity>
                    </View>


                </View>

                
            
            {/*Sản phẩm shop */}
            <View style={{ marginTop: 10 }} >
                            
                        {renderItem()}
                        <Text> một list các sản phẩm vì lí do nào đấy không hiện lên</Text>
            
            </View>
            </ScrollView>
        </View>

    )
}
export default ShopScreen;