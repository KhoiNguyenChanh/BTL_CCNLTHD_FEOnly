import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, Image, ImageBackground, Dimensions, Touchable, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
import ProductItem from "../components/ProductItem";
import ProductData from "../tempData/ProductData";
import ProductStyle from "../styles/ProductStyle";

import { FontAwesome } from '@expo/vector-icons';
import ReviewScreen from "./ReviewScreen";

import NumericInput from 'react-native-numeric-input';
const ProductScreen = () => {
    const [isPressed, setIsPressed] = useState(false);
    const handleIconPressed = () => {
        setIsPressed(!isPressed);
    };
    const route = useRoute();
    console.log(route)
    const { width } = Dimensions.get("window");
    const navigation = useNavigation();
    const height = (width * 100) / 100;
    const handleAddCart =() => {
        Alert.alert('Thành công', 'Đã thêm vào giỏ hàng thành công.', [
            { text: 'OK'}
        ]);
    }



    return (
        <View style={{ flex: 1 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/*Hình ảnh lớn ở trên */}
                <View style={{ backgroundColor: 'white' }}>
                    <Image style={{ height: 400, resizeMode: 'contain', justifyContent: 'center', marginBottom: 10, }}
                        source={{ uri: route.params.image }} />
                </View>

                {/*Tên sản phẩm bên dưới */}
                <View style={{ backgroundColor: 'white', paddingTop: 5, borderTopWidth: 0.5, paddingBottom: 10, }}>
                    {/*price */}
                    <Text style={ProductStyle.itemPrice}>
                        {route.params.price}₫
                    </Text>
                    {/*name */}
                    <Text style={ProductStyle.itemTitle}>
                        {route.params.title}
                    </Text>
                    {/*Rating */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, }}>
                        <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {route.params.rating.rate}/5
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                        </View>
                        <View >
                            <TouchableOpacity onPress={handleIconPressed}>
                                {isPressed ? (<FontAwesome name="heart" size={24} color="red" />
                                ) : (<FontAwesome name="heart-o" size={24} color="black" />)}
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                {/* Random description */}
                <View style={{ backgroundColor: 'white' }}>
                    <Text style={{ fontSize: 17, fontWeight: '200', color: 'gray', padding: 15, }}>{route.params.description}</Text>
                </View>
                {/*Shop? */}
                <View style={ProductStyle.shopContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                        <View style={ProductStyle.shopContent}>
                            <View style={ProductStyle.shopAvatar}>
                                <Image source={require('../assets/profile_default.png')}
                                    style={{ width: 40, height: 40, borderRadius: 17, marginTop: 20, }} />
                            </View>
                            <View>
                                <Text style={ProductStyle.textName}>Shop Name</Text>
                                <Text style={ProductStyle.text_10}>Online</Text>
                                <Text style={ProductStyle.text_10}>Address</Text>
                            </View>


                        </View>
                    </TouchableOpacity>
                </View>
                {/*Comment/review */}
                <ReviewScreen />

            </ScrollView>
            {/* Add to cart button */}
            <View style={{ backgroundColor: 'white' }}>
                <TouchableOpacity style={ProductStyle.addToCart}
                onPress={handleAddCart}>
                    <Text style={ProductStyle.addCartText}>THÊM VÀO GIỎ HÀNG</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ProductScreen;
//tried to add to cart, failed
// import { useNavigation, useRoute } from "@react-navigation/native";
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { View, Text, ScrollView, Image, ImageBackground, Dimensions, Touchable, TouchableOpacity, TextInput, Alert, Modal } from 'react-native';
// import ProductItem from "../components/ProductItem";
// import ProductData from "../tempData/ProductData";
// import ProductStyle from "../styles/ProductStyle";

// import { FontAwesome } from '@expo/vector-icons';
// import ReviewScreen from "./ReviewScreen";

// import { useCart } from '../components/CartContext';

// const ProductScreen = () => {

//     const [isPressed, setIsPressed] = useState(false);
//     const handleIconPressed = () => {
//         setIsPressed(!isPressed);
//     };
//     const route = useRoute();
//     const { addToCart } = useCart();
//     const { product } = route.params;
//     console.log(route)
//     const { width } = Dimensions.get("window");
//     const navigation = useNavigation();
//     const height = (width * 100) / 100;
//     const handleAddCart =() => {
//         addToCart(product);
//         navigation.navigate('Cart');
//         Alert.alert('Thành công', 'Đã thêm vào giỏ hàng thành công.', [
//             { text: 'OK'}
//         ]);
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             <ScrollView showsVerticalScrollIndicator={false}>
//                 {/*Hình ảnh lớn ở trên */}
//                 <View style={{ backgroundColor: 'white' }}>

//                     <Image style={{ height: 400, resizeMode: 'contain', justifyContent: 'center', marginBottom: 10, }}
//                         source={{ uri: route.params.image }} />

//                 </View>

//                 {/*Tên sản phẩm bên dưới */}
//                 <View style={{ backgroundColor: 'white', paddingTop: 5, borderTopWidth: 0.5, paddingBottom: 10, }}>
//                     {/*price */}
//                     <Text style={ProductStyle.itemPrice}>
//                         {route.params.price}₫
//                     </Text>

//                     {/*name */}
//                     <Text style={ProductStyle.itemTitle}>
//                         {route.params.title}
//                     </Text>

//                     {/*Rating */}
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15, }}>
                        
//                         <View style={{ flexDirection: 'row' }}>

//                             <Text style={ProductStyle.itemRating}>
//                                 {route.params.rating.rate}/5
//                             </Text>
                            
//                             <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />


//                         </View>

//                         <View>

//                             <TouchableOpacity onPress={handleIconPressed}>
//                                 {isPressed ? (<FontAwesome name="heart" size={24} color="red" />
//                                 ) : (<FontAwesome name="heart-o" size={24} color="black" />)}
//                             </TouchableOpacity>

//                         </View>
//                     </View>
//                 </View>

//                 {/* Random description */}
//                 <View style={{ backgroundColor: 'white' }}>

//                     <Text style={{ fontSize: 17, fontWeight: '200', color: 'gray', padding: 15, }}>{route.params.description}</Text>

//                 </View>

//                 {/*Shop? */}
//                 <View style={ProductStyle.shopContainer}>
//                     <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
                        
//                         <View style={ProductStyle.shopContent}>
                           
//                             <View style={ProductStyle.shopAvatar}>
                                
//                                 <Image source={require('../assets/profile_default.png')}
//                                     style={{ width: 40, height: 40, borderRadius: 17, marginTop: 20, }} />
                            
//                             </View>
                            
//                             <View>
                                
//                                 <Text style={ProductStyle.textName}>Shop Name</Text>
//                                 <Text style={ProductStyle.text_10}>Online</Text>
//                                 <Text style={ProductStyle.text_10}>Address</Text>
                            
//                             </View>

//                         </View>
                    
//                     </TouchableOpacity>
//                 </View>
//                 {/*Comment/review */}
//                 <ReviewScreen />

//             </ScrollView>
//             {/* Add to cart button */}
//             <View style={{ backgroundColor: 'white' }}>
//                 <TouchableOpacity style={ProductStyle.addToCart}
//                 onPress={handleAddCart}>

//                     <Text style={ProductStyle.addCartText}>THÊM VÀO GIỎ HÀNG</Text>

//                 </TouchableOpacity>
//             </View>
//         </View>
//     )
// }
// export default ProductScreen;
