import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
//stylized cart items
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import NumericInput from 'react-native-numeric-input';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Ionicons } from '@expo/vector-icons';
import CartEmpty from "../components/CartEmpty";
import CartNotEmpty from "../components/CartNotEmpty";
import { TextInput } from "react-native-gesture-handler";
import CartStyle from "../styles/CartStyle";

const CartScreen = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            name: 'Apple iPhone 15 (128 GB) - Black',
            description:
                'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
            price: '900',
            quantity: 1,
            category: 'mobile',
            image: 'https://news.khangz.com/wp-content/uploads/2023/09/iphone-15-den-1.jpg'


        },
        // {
        //     id: 2,
        //     name: 'Apple iPhone 15 (128 GB) - Pink',
        //     description:
        //         'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price: '200',
        //     quantity: 1,
        //     category: 'mobile',
        //     image: 'https://vcdn1-sohoa.vnecdn.net/2023/10/02/DSCF3808-1696227288.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=2Z2PbIMG2mPVKWyoBJTgeg'

        // }, 
        {
            id: 3,
            name: 'Apple iPhone 15 (128 GB) - Gold',
            description:
                'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
            price: '300',
            quantity: 1,
            category: 'mobile',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19YxbSz4rdLfPzqGsujlKwGybhP0LFT0zSIzLrTR7UQ&s'

        },
        {
            id: 4,
            name:'Apple iPhone 15 (128 GB) - Green',
            description:
            'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
            price:'100',
            quantity: 1,
            category:'mobile',
            image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        },
        // {
        //     id: 5,
        //     name:'Apple iPhone 15 (128 GB) - Green',
        //     description:
        //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price:'400',
        //     quantity: 2,
        //     category:'mobile',
        //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        // },
        // {
        //     id: 6,
        //     name:'Apple iPhone 15 (128 GB) - Green',
        //     description:
        //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price:'930',
        //     quantity: 9,
        //     category:'mobile',
        //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        // },
        // {
        //     id: 7,
        //     name:'Apple iPhone 15 (128 GB) - Green',
        //     description:
        //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price:'9020',
        //     quantity: 1,
        //     category:'mobile',
        //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        // },
        // {
        //     id: 8,
        //     name:'Apple iPhone 15 (128 GB) - Green',
        //     description:
        //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price:'1900',
        //     quantity: 3,
        //     category:'mobile',
        //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        // },
        // {
        //     id: 9,
        //     name:'Apple iPhone 15 (128 GB) - Green',
        //     description:
        //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price:'1099',
        //     quantity: 4,
        //     category:'mobile',
        //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        // },
        // {
        //     id: 10,
        //     name:'Apple iPhone 15 (128 GB) - Green',
        //     description:
        //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
        //     price:'299',
        //     quantity: 5,
        //     category:'mobile',
        //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

        // },
    ]);
    //const [cartProducts, setCartProducts] = useState(products);
    const navigation = useNavigation();
    //const [cartItems, setCartItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const handleChecked =(id) => {
        const index = selectedItems.indexOf(id);
        if (index === -1) {
            setSelectedItems([...selectedItems, id]);
        } else {
            const updatedSelectedItems = [...selectedItems];
            updatedSelectedItems.splice(index, 1);
            setSelectedItems(updatedSelectedItems);
        }
    }
    const handleDeleteSelected = () => {
        if (selectedItems.length === 0) {
            Alert.alert('Thông báo!', 'Vui lòng chọn ít nhất một sản phẩm để xóa.');
            return;
        }

        const updatedProducts = products.filter(product => !selectedItems.includes(product.id));
        setProducts(updatedProducts);
        setSelectedItems([]);
        //Alert.alert('Thông báo!', 'Đã xóa các sản phẩm đã chọn thành công.');
    };
    const handlePress = () => {
        navigation.navigate('Checkout', {totalPrice: totalPrice});
    }
    //thiết lập max, min value
    const [maxQuantity, setMaxQuantity] = useState(20);
    const [minQuantity, setMinQuantity] = useState(1);

    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
            <Image resizeMode='contain' source={{ uri: item.image }} style={{ width: 100, height: 100, marginRight: 10 }} />
            <View style={{ flex: 1 }}>
                <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
                <Text style={{ fontSize: 15, color: 'gray' }}>Price: {item.price}.000đ</Text>
                <View style={{flexDirection:'row', alignItems:'center', padding:7}}>
                    <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity - 1)}>
                        <View style={CartStyle.NumericMinusContainer} >
                            <Entypo
                                style={CartStyle.NumericMinus} 
                                name="minus" 
                                size={24} 
                                color="black" />
                        </View>
                    </TouchableOpacity>
                    
                        
                    <TextInput 
                        style={{borderWidth:1, fontSize:20, width:70, textAlign:'center'}} 
                        keyboardType="numeric"
                        placeholder="1"
                        value={item.quantity.toString()}
                        maxLength={String(maxQuantity).length}
                        minValue={minQuantity}
                        maxValue={maxQuantity}
                        onChangeText={text => handleQuantityChange(item.id, parseInt(text) || 0)}/>
                        
                    <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity + 1)}>
                            <View style={CartStyle.NumericPlusContainer} >
                                <Entypo 
                                    style={CartStyle.NumericPlus}
                                    name="plus" 
                                    size={24} 
                                    color="black" />

                            </View>
                    </TouchableOpacity>
                    
                    <TouchableOpacity onPress={() => handleChecked(item.id)}>
                <MaterialCommunityIcons
                    style={{marginHorizontal:30, marginTop:10,}} 
                    name={selectedItems.includes(item.id) ? "checkbox-outline" : "checkbox-blank-outline" }
                    size={25}
                    color="black" 
                />
            </TouchableOpacity>
                </View>
            </View>
        </View>
    );

    // Xử lý thay đổi số lượng sản phẩm
    const handleQuantityChange = (id, newQuantity) => {
        // Kiểm tra giá trị mới có vượt quá giới hạn tối đa hoặc nhỏ hơn giới hạn tối thiểu không
        if (newQuantity > maxQuantity) {
            Alert.alert('Thông báo!', `Số lượng đặt không được quá ${maxQuantity} sản phẩm`)
            newQuantity = maxQuantity;
        } else if (newQuantity < minQuantity) {
            Alert.alert('Thông báo!', `Số lượng đặt không được dưới ${minQuantity} sản phẩm`)

            newQuantity = minQuantity;
        }

        const updatedProducts = products.map(product =>
            product.id === id ? { ...product, quantity: newQuantity } : product
        );
        // Cập nhật lại danh sách sản phẩm
        setProducts(updatedProducts);;
    };

    // Xử lý xóa sản phẩm
    const handleDelete = id => {
        const updatedProducts = products.filter(product => product.id !== id);
        // Cập nhật lại danh sách sản phẩm
        setProducts(updatedProducts);
    };
    
    // Tính tổng tiền của các sản phẩm trong giỏ hàng
    const totalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
   
    if (products.length === 0) {
        return (
            <CartEmpty />
        );
    }

    return (
        <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                <Text style={{  fontSize: 25, fontWeight: 'bold', marginVertical: 15, }}>Giỏ hàng</Text>
                {/* Nút xóa đã chọn */}
                <TouchableOpacity
                    onPress={handleDeleteSelected}
                    style={{ backgroundColor: 'white',borderWidth:1, padding: 10, borderRadius: 10, alignItems: 'center', margin: 10 }}>
                    <Fontisto name="trash" size={25} color="gray" />
                </TouchableOpacity>
            </View>
            
            <FlatList
                style={{borderWidth:0.5, borderRadius:10, padding:5,}}
                data={products}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />

            <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: '500' }}>Tổng giá tiền: </Text>
                    <Text style={{ fontSize: 18, fontWeight: '300' }}> {totalPrice}.000đ</Text>
                </View>
                
                <TouchableOpacity
                    onPress={handlePress}
                    style={{  backgroundColor: 'gray', padding: 10, borderRadius: 10, width: 150, }}>
                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, marginTop:5}}>Thanh toán</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default CartScreen;
////fullofcomments
// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
// //stylized cart items
// import { Entypo } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { Fontisto } from '@expo/vector-icons';
// import NumericInput from 'react-native-numeric-input';
// import { SwipeListView } from 'react-native-swipe-list-view';
// import { Ionicons } from '@expo/vector-icons';
// import CartEmpty from "../components/CartEmpty";
// import CartNotEmpty from "../components/CartNotEmpty";
// import { TextInput } from "react-native-gesture-handler";
// import CartStyle from "../styles/CartStyle";

// const CartScreen = () => {
//     const [products, setProducts] = useState([
//         {
//             id: 1,
//             name: 'Apple iPhone 15 (128 GB) - Black',
//             description:
//                 'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//             price: '900',
//             quantity: 1,
//             category: 'mobile',
//             image: 'https://news.khangz.com/wp-content/uploads/2023/09/iphone-15-den-1.jpg'


//         },
//         // {
//         //     id: 2,
//         //     name: 'Apple iPhone 15 (128 GB) - Pink',
//         //     description:
//         //         'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price: '200',
//         //     quantity: 1,
//         //     category: 'mobile',
//         //     image: 'https://vcdn1-sohoa.vnecdn.net/2023/10/02/DSCF3808-1696227288.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=2Z2PbIMG2mPVKWyoBJTgeg'

//         // }, 
//         {
//             id: 3,
//             name: 'Apple iPhone 15 (128 GB) - Gold',
//             description:
//                 'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//             price: '300',
//             quantity: 1,
//             category: 'mobile',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19YxbSz4rdLfPzqGsujlKwGybhP0LFT0zSIzLrTR7UQ&s'

//         },
//         {
//             id: 4,
//             name:'Apple iPhone 15 (128 GB) - Green',
//             description:
//             'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//             price:'100',
//             quantity: 1,
//             category:'mobile',
//             image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         },
//         // {
//         //     id: 5,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'400',
//         //     quantity: 2,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 6,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'930',
//         //     quantity: 9,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 7,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'9020',
//         //     quantity: 1,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 8,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'1900',
//         //     quantity: 3,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 9,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'1099',
//         //     quantity: 4,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 10,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'299',
//         //     quantity: 5,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//     ]);
//     //const [cartProducts, setCartProducts] = useState(products);
//     const navigation = useNavigation();
//     //const [cartItems, setCartItems] = useState([]);
//     const [selectedItems, setSelectedItems] = useState([]);
//     const handleChecked =(id) => {
//         const index = selectedItems.indexOf(id);
//         if (index === -1) {
//             setSelectedItems([...selectedItems, id]);
//         } else {
//             const updatedSelectedItems = [...selectedItems];
//             updatedSelectedItems.splice(index, 1);
//             setSelectedItems(updatedSelectedItems);
//         }
//     }
//     const handleDeleteSelected = () => {
//         if (selectedItems.length === 0) {
//             Alert.alert('Thông báo!', 'Vui lòng chọn ít nhất một sản phẩm để xóa.');
//             return;
//         }

//         const updatedProducts = products.filter(product => !selectedItems.includes(product.id));
//         setProducts(updatedProducts);
//         setSelectedItems([]);
//         //Alert.alert('Thông báo!', 'Đã xóa các sản phẩm đã chọn thành công.');
//     };
//     const handlePress = () => {
//         navigation.navigate('Checkout', {totalPrice: totalPrice});
//     }
//     //thiết lập max, min value
//     const [maxQuantity, setMaxQuantity] = useState(20);
//     const [minQuantity, setMinQuantity] = useState(1);

//     const renderItem = ({ item }) => (
//         <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image resizeMode='contain' source={{ uri: item.image }} style={{ width: 100, height: 100, marginRight: 10 }} />
//             <View style={{ flex: 1 }}>
//                 <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
//                 <Text style={{ fontSize: 15, color: 'gray' }}>Price: {item.price}.000đ</Text>
//                 <View style={{flexDirection:'row', alignItems:'center', padding:7}}>
//                     <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity - 1)}>
//                         <View style={CartStyle.NumericMinusContainer} >
//                             <Entypo
//                                 style={CartStyle.NumericMinus} 
//                                 name="minus" 
//                                 size={24} 
//                                 color="black" />
//                         </View>
//                     </TouchableOpacity>
                    
                        
//                     <TextInput 
//                         style={{borderWidth:1, fontSize:20, width:70, textAlign:'center'}} 
//                         keyboardType="numeric"
//                         placeholder="1"
//                         value={item.quantity.toString()}
//                         maxLength={String(maxQuantity).length}
//                         minValue={minQuantity}
//                         maxValue={maxQuantity}
//                         onChangeText={text => handleQuantityChange(item.id, parseInt(text) || 0)}/>
                        
//                     <TouchableOpacity onPress={() => handleQuantityChange(item.id, item.quantity + 1)}>
//                             <View style={CartStyle.NumericPlusContainer} >
//                                 <Entypo 
//                                     style={CartStyle.NumericPlus}
//                                     name="plus" 
//                                     size={24} 
//                                     color="black" />

//                             </View>
//                     </TouchableOpacity>
                    
//                     <TouchableOpacity onPress={() => handleChecked(item.id)}>
//                 <MaterialCommunityIcons
//                     style={{marginHorizontal:30, marginTop:10,}} 
//                     name={selectedItems.includes(item.id) ? "checkbox-outline" : "checkbox-blank-outline" }
//                     size={25}
//                     color="black" 
//                 />
//             </TouchableOpacity>
//                 </View>
//             </View>
//         </View>
//     );

//     // Xử lý thay đổi số lượng sản phẩm
//     const handleQuantityChange = (id, newQuantity) => {
//         // Kiểm tra giá trị mới có vượt quá giới hạn tối đa hoặc nhỏ hơn giới hạn tối thiểu không
//         if (newQuantity > maxQuantity) {
//             Alert.alert('Thông báo!', `Số lượng đặt không được quá ${maxQuantity} sản phẩm`)
//             newQuantity = maxQuantity;
//         } else if (newQuantity < minQuantity) {
//             Alert.alert('Thông báo!', `Số lượng đặt không được dưới ${minQuantity} sản phẩm`)

//             newQuantity = minQuantity;
//         }

//         const updatedProducts = products.map(product =>
//             product.id === id ? { ...product, quantity: newQuantity } : product
//         );
//         // Cập nhật lại danh sách sản phẩm
//         setProducts(updatedProducts);;
//     };

//     // Render nút xóa
//     // const renderHiddenItem = ({ item }) => (
//     //     <TouchableOpacity
//     //         style={{ alignItems: 'flex-end', justifyContent: 'center', height: '100%', paddingHorizontal: 2 }}
//     //         onPress={() => handleDelete(item.id)}>
//     //             <View style={{ padding:20,justifyContent:'center', alignItems:'center', backgroundColor:'red', borderTopRightRadius:10, borderBottomRightRadius:10,}}>
//     //                 <AntDesign name="delete" size={24} color="white" />
//     //                 <Text style={{ fontWeight: 'bold', color:'white' }}>Delete</Text>
//     //             </View>
            
//     //     </TouchableOpacity>
//     // );

//     // Xử lý xóa sản phẩm
//     const handleDelete = id => {
//         const updatedProducts = products.filter(product => product.id !== id);
//         // Cập nhật lại danh sách sản phẩm
//         setProducts(updatedProducts);
//     };
    
//     // Tính tổng tiền của các sản phẩm trong giỏ hàng
//     const totalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
   
//     if (products.length === 0) {
//         return (
//             <CartEmpty />
//         );
//     }

//     return (
//         <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
//             <View style={{flexDirection:'row', justifyContent:'space-between'}}>
//                 <Text style={{  fontSize: 25, fontWeight: 'bold', marginVertical: 15, }}>Giỏ hàng</Text>
//                 {/* Nút xóa đã chọn */}
//                 <TouchableOpacity
//                     onPress={handleDeleteSelected}
//                     style={{ backgroundColor: 'white',borderWidth:1, padding: 10, borderRadius: 10, alignItems: 'center', margin: 10 }}>
//                     <Fontisto name="trash" size={25} color="gray" />
//                 </TouchableOpacity>
//             </View>
            

           
//             <FlatList
//                 style={{borderWidth:0.5, borderRadius:10, padding:5,}}
//                 data={products}
//                 renderItem={renderItem}
//                 keyExtractor={item => item.id.toString()}
//             />
//             {/* <SwipeListView
//                 style={{borderWidth:0.5, borderRadius:10, padding:5,}}
//                 previewRowKey='0'
//                 previewOpenDelay={3000}
//                 previewOpenValue={-40}
//                 data={products}
//                 renderItem={renderItem}
//                 renderHiddenItem={renderHiddenItem}
//                 rightOpenValue={-75}
//                 disableRightSwipe
                
//                 keyExtractor={item => item.id.toString()}
//             /> */}
//             <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
//                 <View>
//                     <Text style={{ fontSize: 18, fontWeight: '500' }}>Tổng giá tiền: </Text>
//                     <Text style={{ fontSize: 18, fontWeight: '300' }}> {totalPrice}.000đ</Text>
//                 </View>
                
//                 <TouchableOpacity
//                     onPress={handlePress}
//                     style={{  backgroundColor: 'gray', padding: 10, borderRadius: 10, width: 150, }}>
//                     <Text style={{ textAlign: 'center', color: 'white', fontSize: 16, marginTop:5}}>Thanh toán</Text>
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };
// export default CartScreen;
////tried to add to cart, failed
// import { useNavigation } from "@react-navigation/native";
// import React, { useState } from "react";
// import { View, Text, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
// //stylized cart items
// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import NumericInput from 'react-native-numeric-input';
// import { SwipeListView } from 'react-native-swipe-list-view';
// import { Ionicons } from '@expo/vector-icons';
// import CartEmpty from "../components/CartEmpty";
// import CartNotEmpty from "../components/CartNotEmpty";
// import { useCart } from '../components/CartContext';

// const CartScreen = () => {
//     const [products, setProducts] = useState([
//         {
//             id: 1,
//             name: 'Apple iPhone 15 (128 GB) - Black',
//             description:
//                 'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//             price: '900',
//             quantity: 1,
//             category: 'mobile',
//             image: 'https://news.khangz.com/wp-content/uploads/2023/09/iphone-15-den-1.jpg'


//         },
//         {
//             id: 2,
//             name: 'Apple iPhone 15 (128 GB) - Pink',
//             description:
//                 'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//             price: '200',
//             quantity: 1,
//             category: 'mobile',
//             image: 'https://vcdn1-sohoa.vnecdn.net/2023/10/02/DSCF3808-1696227288.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=2Z2PbIMG2mPVKWyoBJTgeg'

//         }, {
//             id: 3,
//             name: 'Apple iPhone 15 (128 GB) - Gold',
//             description:
//                 'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//             price: '300',
//             quantity: 1,
//             category: 'mobile',
//             image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ19YxbSz4rdLfPzqGsujlKwGybhP0LFT0zSIzLrTR7UQ&s'

//         },
//         // {
//         //     id: 4,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'100',
//         //     quantity: 4,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 5,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'400',
//         //     quantity: 2,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 6,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'930',
//         //     quantity: 9,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 7,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'9020',
//         //     quantity: 1,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 8,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'1900',
//         //     quantity: 3,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 9,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'1099',
//         //     quantity: 4,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//         // {
//         //     id: 10,
//         //     name:'Apple iPhone 15 (128 GB) - Green',
//         //     description:
//         //     'INNOVATIVE DESIGN, 48MP CAMERA, LE FUNNY',
//         //     price:'299',
//         //     quantity: 5,
//         //     category:'mobile',
//         //     image:'https://brotherselectronicsbd.com/image/cache/catalog/demo/product/Apple/iphone%2015/iphon-15-(1)-9691-800x800.jpg'

//         // },
//     ]);
//     const {cartItems} = useCart();
   
//     const [cartProducts, setCartProducts] = useState(products);
//     const navigation = useNavigation();
//     //const [cartItems, setCartItems] = useState([]);
//     const handlePress = () => {
//         navigation.navigate('Checkout');
//     }

//     const renderItem = ({ item }) => (
//         <View style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 10 }}>
//             <Image resizeMode='contain' source={{ uri: item.image }} style={{ width: 100, height: 100, marginRight: 10 }} />
//             <View style={{ flex: 1 }}>
//                 <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.name}</Text>
//                 <Text style={{ fontSize: 14, color: 'gray' }}>Price: ${item.price}</Text>
//                 <NumericInput
//                     value={item.quantity}
//                     onChange={value => handleQuantityChange(item.id, value)}
//                     totalWidth={150}
//                     totalHeight={40}
//                     iconSize={25}
//                     step={1}
//                     maxValue={20}
//                     minValue={1}
//                     valueType="real"
//                     rounded
//                     textColor="#B0228C"
//                     iconStyle={{ color: 'white' }}
//                     rightButtonBackgroundColor="gray"
//                     leftButtonBackgroundColor="gray"
//                     rightButtonContent={<Ionicons name="remove" size={24} color="white" />}
//                     leftButtonContent={<MaterialCommunityIcons name="minus" size={15} color="white" />}
//                 />
//             </View>
//         </View>
//     );

//     // Xử lý thay đổi số lượng sản phẩm
//     const handleQuantityChange = (id, quantity) => {
//         const updatedProducts = products.map(product =>
//             product.id === id ? { ...product, quantity } : product
//         );
//         // Cập nhật lại danh sách sản phẩm
//         setProducts(updatedProducts);;
//     };

//     // Render nút xóa
//     const renderHiddenItem = ({ item }) => (
//         <TouchableOpacity
//             style={{ alignItems: 'flex-end', justifyContent: 'center', height: '100%', paddingHorizontal: 15 }}
//             onPress={() => handleDelete(item.id)}>
//             <Text style={{ fontWeight: 'bold' }}>Delete</Text>
//         </TouchableOpacity>
//     );

//     // Xử lý xóa sản phẩm
//     const handleDelete = id => {
//         const updatedProducts = products.filter(product => product.id !== id);
//         // Cập nhật lại danh sách sản phẩm
//         setProducts(updatedProducts);
//     };
//      // Tính tổng tiền của các sản phẩm trong giỏ hàng
//      const totalPrice = cartItems.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
    

//     if (products.length === 0) {
//         return (
//             <CartEmpty />
//         );
//     }

//     return (
//         <View style={{ flex: 1, padding: 20, backgroundColor: 'white' }}>
//             <Text style={{ textAlign: 'center', fontSize: 25, fontWeight: 'bold', marginVertical: 15, }}>Giỏ hàng</Text>
           
//             <SwipeListView
//                 data={cartItems}
//                 renderItem={renderItem}
//                 renderHiddenItem={renderHiddenItem}
//                 rightOpenValue={-75}
//                 disableRightSwipe
//                 keyExtractor={item => item.id.toString()}
//             />
        
//             <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
                
//                 <Text style={{ fontSize: 18, fontWeight: '500' }}>Tổng giá tiền:
                    
//                     <Text style={{ fontSize: 18, fontWeight: '300' }}> {totalPrice}đ</Text>
                
//                 </Text>

//                 <TouchableOpacity
//                     onPress={handlePress}
//                     style={{ backgroundColor: 'gray', padding: 10, borderRadius: 10, width: 150, }}>
                    
//                     <Text style={{ textAlign: 'center', color: 'white', fontSize: 16 }}>Thanh toán</Text>
                
//                 </TouchableOpacity>
//             </View>
//         </View>
//     );
// };
// export default CartScreen;
