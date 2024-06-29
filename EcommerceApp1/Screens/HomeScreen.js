//old and full of comments
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { DropdownPicker } from 'react-native-dropdown-picker';
import HomeStyle from '../styles/HomeStyle';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import products from '../tempData/ProductData'
import axios from 'axios';
import ProductItem from '../components/ProductItem';
export default function HomeScreen() {
    const [products, setProducts] = useState([]);
    //phân trang
    const [allProducts, setAllProducts] = useState([]); // Dùng để lưu trữ tất cả sản phẩm từ API
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products?page=${currentPage}`);
            setAllProducts(response.data);
            // // Tính toán số lượng trang dựa trên số lượng sản phẩm trả về
            const totalItems = response.data.length; // Đây có thể là số lượng sản phẩm thực tế hoặc được trả về từ API
            const totalPages = calculateTotalPages(totalItems);
            setTotalPages(totalPages);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    const ITEMS_PER_PAGE = 10; // Số lượng sản phẩm trên mỗi trang

    const calculateTotalPages = (totalItems) => {
        return Math.ceil(totalItems / ITEMS_PER_PAGE);
    };
    // để quay lại đầu trang sau khi nhấn nút "trang sau". Dưới đây là một cách tiếp cận:
    // 1. Sử dụng hook useRef để tạo một tham chiếu đến ScrollView.
    // 2. Trong hàm xử lý khi nhấn nút "trang sau", bạn có thể sử dụng phương thức scrollTo của ScrollView để di chuyển đến vị trí đầu trang.
    const scrollViewRef = useRef(null); // Tạo tham chiếu đến ScrollView

    const handleNextPage = () => {
        scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });

        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    // Tính chỉ mục bắt đầu và kết thúc của sản phẩm trên trang hiện tại
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = currentPage * ITEMS_PER_PAGE;

    // Lấy các sản phẩm cho trang hiện tại bằng cách sử dụng slice trên mảng tất cả sản phẩm
    const currentProducts = allProducts.slice(startIndex, endIndex);

    const fetchDataAndSortByAscending = () => {
        const sortedData = [...allProducts].sort((a, b) => a.price - b.price);
        setAllProducts(sortedData);
    };
    const fetchDataAndSortByDescending = () => {
        const sortedData = [...allProducts].sort((a, b) => b.price - a.price);
        setAllProducts(sortedData);
    };
    const fetchDataAndSortByAtoZ = () => {
        const sortedData = [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
        setAllProducts(sortedData);
    };
    const fetchDataAndSortByZtoA = () => {
        const sortedData = [...allProducts].sort((a, b) => b.title.localeCompare(a.title));
        setAllProducts(sortedData);
    };
    //sort xong là 1 chuyện, vậy muốn giữ màn hình thì sao??
    //eh.....
    const navigation = useNavigation();
    //function for search bar
    const [searchText, setSearchText] = useState('');
    // Hàm lọc sản phẩm dựa trên giá trị nhập vào trong search bar
    const filterProducts = () => {
        return currentProducts.filter(product =>
            product.title.toLowerCase().includes(searchText.toLowerCase()) ||
            product.price.toString().includes(searchText.toLowerCase()) ||
            product.category.toString().includes(searchText.toLowerCase())
            // tìm tên shop, nhưng chưa có data cho cái đó
            // || product.description.toLowerCase().includes(searchText.toLowerCase())
        );
    };
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={HomeStyle.container}>

                {/* <ScrollView showsVerticalScrollIndicator={false}> */}
                {/*Header
                        Header có search bar + cart */}
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
                                <Text style={HomeStyle.numberOnCart}>{0}</Text>
                            </View>

                        </View>
                    </TouchableOpacity>
                </View>
                <ScrollView
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}>
                    <View style={{ marginTop: 5, }} />
                    {/*filter n products container //'#F3F2ED' */}
                    <View>
                        {/*Filters*/}
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ flexDirection: 'row', }}>
                                {/*Filter */}
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        marginLeft: 13,
                                        marginRight: 15,
                                        padding: 7,
                                        borderRadius: 5,
                                        borderWidth: 0.5,
                                    }}
                                    onPress={() => {
                                        console.log('pressed');
                                    }}>
                                    <AntDesign
                                        style={{
                                            marginRight: 10,
                                            borderRightWidth: 0.5,
                                            paddingRight: 7,
                                            paddingTop: 2,
                                        }}
                                        name="filter"
                                        size={24}
                                        color="gray" />
                                    <Text style={{
                                        paddingRight: 7,
                                        paddingTop: 2,
                                    }}>Lọc theo: </Text>
                                </TouchableOpacity>
                                {/*Giá */}
                                <TouchableOpacity style={HomeStyle.priceFilter}
                                    onPress={fetchDataAndSortByAscending}>
                                    <Feather
                                        style={HomeStyle.priceIcon}
                                        name="dollar-sign"
                                        size={24}
                                        color="gray" />
                                    <Text >Giá </Text>
                                    <AntDesign style={{
                                        paddingRight: 5,
                                        marginLeft: 5,
                                    }}
                                        name="up" size={24} color="black" />

                                </TouchableOpacity>
                                <TouchableOpacity style={HomeStyle.priceFilter}
                                    onPress={fetchDataAndSortByDescending}>
                                    <Feather
                                        style={HomeStyle.priceIcon}
                                        name="dollar-sign"
                                        size={24}
                                        color="gray" />
                                    <Text >Giá </Text>
                                    <AntDesign style={{
                                        paddingRight: 5,
                                        marginLeft: 5,
                                    }}
                                        name="down" size={24} color="black" />
                                </TouchableOpacity>
                                {/*Tên */}
                                <TouchableOpacity
                                    style={HomeStyle.AtoZFilter}
                                    onPress={fetchDataAndSortByAtoZ}>
                                    <AntDesign
                                        style={HomeStyle.iconName}
                                        name="tagso"
                                        size={24}
                                        color="black" />
                                    <Text>A-Z</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={HomeStyle.ZtoAFilter}
                                    onPress={fetchDataAndSortByZtoA}>
                                    <AntDesign
                                        style={HomeStyle.iconName}
                                        name="tagso"
                                        size={24}
                                        color="black" />
                                    <Text>Z-A</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                        <View style={{ marginTop: 10, marginLeft: 13, }} >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gợi ý hôm nay</Text>
                        </View>
                        {/*Products */}
                        <View style={{ marginTop: 10 }} >
                            <View style={HomeStyle.itemRow}>
                                {/* Render danh sách sản phẩm sau khi lọc */}
                                {filterProducts().map((item, index) => (
                                    <ProductItem
                                        item={item}
                                        key={index}
                                    />
                                ))}
                            </View>
                            {/* Phân trang */}
                            <View style={HomeStyle.paginationContainer}>
                                <TouchableOpacity
                                    style={HomeStyle.paginationBox}
                                    onPress={handlePrevPage}
                                    disabled={currentPage === 1}>
                                    <Text style={HomeStyle.paginationText}>Trang trước</Text>
                                </TouchableOpacity>
                                <View style={{ backgroundColor: 'darkgray', borderRadius: 30, marginHorizontal: 10, }}>
                                    <Text style={HomeStyle.paginationText}>
                                        {currentPage}
                                    </Text>
                                </View>

                                <TouchableOpacity
                                    style={HomeStyle.paginationBox}
                                    onPress={handleNextPage}
                                    disabled={endIndex >= allProducts.length}>
                                    <Text style={HomeStyle.paginationText}>Trang sau</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </TouchableWithoutFeedback>
    );
}
// //tried to add to cart with number on it, failed
// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { DropdownPicker } from 'react-native-dropdown-picker';
// import HomeStyle from '../styles/HomeStyle';
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import products from '../tempData/ProductData'
// import axios from 'axios';
// import ProductItem from '../components/ProductItem';
// import { useCart } from '../components/CartContext';
// export default function HomeScreen() {
//     const navigation = useNavigation();
//     const [products, setProducts] = useState([]);
//     //lấy số lượng sp trong cart
//     const {cartItems} = useCart();
//     //phân trang
//     const [allProducts, setAllProducts] = useState([]); // Dùng để lưu trữ tất cả sản phẩm từ API
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [loading, setLoading] = useState(true);

//     const ITEMS_PER_PAGE = 10; // Số lượng sản phẩm trên mỗi trang

//     const calculateTotalPages = (totalItems) => {
//         return Math.ceil(totalItems / ITEMS_PER_PAGE);
//     };
//     // Tính chỉ mục bắt đầu và kết thúc của sản phẩm trên trang hiện tại
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = currentPage * ITEMS_PER_PAGE;
//     useEffect(() => {
//         fetchData();
//     }, [currentPage]);
//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`https://fakestoreapi.com/products?page=${currentPage}`);
//             setAllProducts(response.data);
//             // // Tính toán số lượng trang dựa trên số lượng sản phẩm trả về
//             const totalItems = response.data.length; // Đây có thể là số lượng sản phẩm thực tế hoặc được trả về từ API
//             const totalPages = calculateTotalPages(totalItems);
//             setTotalPages(totalPages);
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     // để quay lại đầu trang sau khi nhấn nút "trang sau". Dưới đây là một cách tiếp cận:

//     // 1. Sử dụng hook useRef để tạo một tham chiếu đến ScrollView.
//     // 2. Trong hàm xử lý khi nhấn nút "trang sau", bạn có thể sử dụng phương thức scrollTo của ScrollView để di chuyển đến vị trí đầu trang.
//     const scrollViewRef = useRef(null); // Tạo tham chiếu đến ScrollView

//     const handleNextPage = () => {
//         scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });

//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };
//     // Lấy các sản phẩm cho trang hiện tại bằng cách sử dụng slice trên mảng tất cả sản phẩm
//     const currentProducts = allProducts.slice(startIndex, endIndex);

//     const fetchDataAndSortByAscending = () => {
//         const sortedData = [...allProducts].sort((a, b) => a.price - b.price);
//         setAllProducts(sortedData);
//     };
//     const fetchDataAndSortByDescending = () => {
//         const sortedData = [...allProducts].sort((a, b) => b.price - a.price);
//         setAllProducts(sortedData);
//     };
//     const fetchDataAndSortByAtoZ = () => {
//         const sortedData = [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
//         setAllProducts(sortedData);
//     };
//     const fetchDataAndSortByZtoA = () => {
//         const sortedData = [...allProducts].sort((a, b) => b.title.localeCompare(a.title));
//         setAllProducts(sortedData);
//     };
//     //sort xong là 1 chuyện, vậy muốn giữ màn hình thì sao??
//     //eh.....

//     //function for search bar
//     const [searchText, setSearchText] = useState('');
//     // Hàm lọc sản phẩm dựa trên giá trị nhập vào trong search bar
//     const filterProducts = () => {
//         return currentProducts.filter(product =>
//             product.title.toLowerCase().includes(searchText.toLowerCase()) ||
//             product.price.toString().includes(searchText.toLowerCase()) ||
//             product.category.toString().includes(searchText.toLowerCase())
//             // tìm tên shop, nhưng chưa có data cho cái đó
//             // || product.description.toLowerCase().includes(searchText.toLowerCase())
//         );
//     };
//     return (
//         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//             <View style={HomeStyle.container}>

//                 {/*Header có search bar + cart */}
//                 <View style={HomeStyle.header}>

//                     <TouchableOpacity
//                         onPress={filterProducts}
//                         style={HomeStyle.headerContent}>

//                         <AntDesign
//                             style={HomeStyle.searchIcon}
//                             name="search1"
//                             size={27}
//                             color="gray" />

//                         <TextInput
//                             style={{ width: 300, height: 50, }}
//                             placeholder='Bạn muốn tìm gì?.....'
//                             placeholderTextColor={'gray'}
//                             onChangeText={text => setSearchText(text)}
//                         />

//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('Cart')}>

//                         <View style={HomeStyle.cartContainer}>

//                             <AntDesign
//                                 name="shoppingcart"
//                                 size={30}
//                                 color="black"
//                                 style={HomeStyle.cart}
//                             />

//                             <View style={HomeStyle.onCart}>
//                                 {/*Truyền hàm đếm số lượng sản phẩm vào */}

//                                 <Text style={HomeStyle.numberOnCart}>{cartItems.length}</Text>

//                             </View>

//                         </View>
//                     </TouchableOpacity>

//                 </View>
//                 <ScrollView
//                     ref={scrollViewRef}
//                     showsVerticalScrollIndicator={false}
//                 >

//                     <View style={{ marginTop: 5, }} />

//                     {/*filter n products container */}
//                     <View>
//                         {/*Filters*/}
//                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                             <View style={{ flexDirection: 'row', }}>
//                                 {/*Filter */}
//                                 <TouchableOpacity
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginLeft: 13,
//                                         marginRight: 15,
//                                         padding: 7,
//                                         borderRadius: 5,
//                                         borderWidth: 0.5,

//                                     }}
//                                     onPress={() => { console.log('pressed'); }}>

//                                     <AntDesign
//                                         style={{
//                                             marginRight: 10,
//                                             borderRightWidth: 0.5,
//                                             paddingRight: 7,
//                                             paddingTop: 2,
//                                         }}
//                                         name="filter"
//                                         size={24}
//                                         color="gray" />

//                                     <Text style={{
//                                         paddingRight: 7,
//                                         paddingTop: 2,
//                                     }}>Lọc theo: </Text>

//                                 </TouchableOpacity>

//                                 {/*Giá  tăng*/}
//                                 <TouchableOpacity style={HomeStyle.priceFilter}
//                                     onPress={fetchDataAndSortByAscending}>

//                                     <Feather
//                                         style={HomeStyle.priceIcon}
//                                         name="dollar-sign"
//                                         size={24}
//                                         color="gray" />

//                                     <Text >Giá </Text>

//                                     <AntDesign style={{
//                                         paddingRight: 5,
//                                         marginLeft: 5,
//                                     }}
//                                         name="up" size={24} color="black" />

//                                 </TouchableOpacity>
//                                 {/*Giá  giảm*/}
//                                 <TouchableOpacity style={HomeStyle.priceFilter}
//                                     onPress={fetchDataAndSortByDescending}>

//                                     <Feather
//                                         style={HomeStyle.priceIcon}
//                                         name="dollar-sign"
//                                         size={24}
//                                         color="gray" />

//                                     <Text >Giá </Text>

//                                     <AntDesign style={{
//                                         paddingRight: 5,
//                                         marginLeft: 5,
//                                     }}
//                                         name="down" size={24} color="black" />

//                                 </TouchableOpacity>

//                                 {/*Tên A-Z */}
//                                 <TouchableOpacity
//                                     style={HomeStyle.AtoZFilter}
//                                     onPress={fetchDataAndSortByAtoZ}>

//                                     <AntDesign
//                                         style={HomeStyle.iconName}
//                                         name="tagso"
//                                         size={24}
//                                         color="black" />

//                                     <Text>A-Z</Text>

//                                 </TouchableOpacity>
//                                 {/*Tên Z-A */}
//                                 <TouchableOpacity
//                                     style={HomeStyle.ZtoAFilter}
//                                     onPress={fetchDataAndSortByZtoA}>

//                                     <AntDesign
//                                         style={HomeStyle.iconName}
//                                         name="tagso"
//                                         size={24}
//                                         color="black" />

//                                     <Text>Z-A</Text>

//                                 </TouchableOpacity>
//                             </View>
//                         </ScrollView>

//                         <View style={{ marginTop: 10, marginLeft: 13, }} >

//                             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gợi ý hôm nay</Text>

//                         </View>

//                         {/*Products */}
//                         <View style={{ marginTop: 10 }} >

//                             <View style={HomeStyle.itemRow}>

//                                 {/* Render danh sách sản phẩm sau khi lọc */}
//                                 {filterProducts().map((item, index) => (
//                                     <ProductItem
//                                         item={item}
//                                         key={index}
//                                     />
//                                 ))}

//                             </View>
//                             {/* Phân trang */}
//                             <View style={HomeStyle.paginationContainer}>
//                                 {/* Trang trước*/}
//                                 <TouchableOpacity
//                                     style={HomeStyle.paginationBox}
//                                     onPress={handlePrevPage}
//                                     disabled={currentPage === 1}>
//                                     <Text style={HomeStyle.paginationText}>Trang trước</Text>
//                                 </TouchableOpacity>
//                                 {/* Trang hiện tại*/}
//                                 <View style={{ backgroundColor: 'darkgray', borderRadius: 30, marginHorizontal: 10, }}>

//                                     <Text style={HomeStyle.paginationText}>
//                                         {currentPage}
//                                     </Text>

//                                 </View>
//                                 {/* Trang sau*/}
//                                 <TouchableOpacity
//                                     style={HomeStyle.paginationBox}
//                                     onPress={handleNextPage}
//                                     disabled={endIndex >= allProducts.length}>

//                                     <Text style={HomeStyle.paginationText}>Trang sau</Text>

//                                 </TouchableOpacity>
//                             </View>
//                         </View>
//                     </View>
//                 </ScrollView>
//             </View>
//         </TouchableWithoutFeedback>
//     );
// }



//old n full of comments
// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { Text, View, ScrollView, TextInput, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Image, FlatList, Alert, ActivityIndicator } from 'react-native';
// import { NavigationContainer, useNavigation } from '@react-navigation/native';
// import { DropdownPicker } from 'react-native-dropdown-picker';
// import HomeStyle from '../styles/HomeStyle';
// import { AntDesign } from '@expo/vector-icons';
// import { Feather } from '@expo/vector-icons';
// import products from '../tempData/ProductData'
// import axios from 'axios';
// import ProductItem from '../components/ProductItem';
// export default function HomeScreen() {

//     const [products, setProducts] = useState([]);
//     //phân trang
//     const [allProducts, setAllProducts] = useState([]); // Dùng để lưu trữ tất cả sản phẩm từ API
//     const [currentPage, setCurrentPage] = useState(1);
//     const [totalPages, setTotalPages] = useState(0);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetchData();
//     }, [currentPage]);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get(`https://fakestoreapi.com/products?page=${currentPage}`);
//             setAllProducts(response.data);

//             // // Tính toán số lượng trang dựa trên số lượng sản phẩm trả về
//             const totalItems = response.data.length; // Đây có thể là số lượng sản phẩm thực tế hoặc được trả về từ API
//             const totalPages = calculateTotalPages(totalItems);
//             setTotalPages(totalPages);
//             setLoading(false);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     const ITEMS_PER_PAGE = 10; // Số lượng sản phẩm trên mỗi trang

//     const calculateTotalPages = (totalItems) => {
//         return Math.ceil(totalItems / ITEMS_PER_PAGE);
//     };

//     // để quay lại đầu trang sau khi nhấn nút "trang sau". Dưới đây là một cách tiếp cận:

//     // 1. Sử dụng hook useRef để tạo một tham chiếu đến ScrollView.
//     // 2. Trong hàm xử lý khi nhấn nút "trang sau", bạn có thể sử dụng phương thức scrollTo của ScrollView để di chuyển đến vị trí đầu trang.
//     const scrollViewRef = useRef(null); // Tạo tham chiếu đến ScrollView

//     const handleNextPage = () => {
//         scrollViewRef.current.scrollTo({ x: 0, y: 0, animated: true });

//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };
//     // Tính chỉ mục bắt đầu và kết thúc của sản phẩm trên trang hiện tại
//     const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
//     const endIndex = currentPage * ITEMS_PER_PAGE;

//     // Lấy các sản phẩm cho trang hiện tại bằng cách sử dụng slice trên mảng tất cả sản phẩm
//     const currentProducts = allProducts.slice(startIndex, endIndex);


//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //         try {
//     //             const response = await axios.get(`https://fakestoreapi.com/products`);
//     //             setProducts(response.data);
//     //         } catch (error) {
//     //             console.log(error);
//     //         }
//     //     }

//     //     fetchData();
//     // }, [])
//     // Sắp xếp theo tên từ a đến z

//     // const fetchDataAndSortByAtoZ = () => {
//     //     axios.get('https://fakestoreapi.com/products').then(response => {
//     //         const sortedData = sortByNameAZ(currentProducts);
//     //         //console.log(sortedData);
//     //         setProducts(sortedData);
//     //     }).catch(error => {
//     //         console.error('Error fetching data:', error);
//     //     });
//     // };
//     // const fetchDataAndSortByZtoA = () => {
//     //     axios.get('https://fakestoreapi.com/products').then(response => {
//     //         const sortedData = sortByNameZA(response.data);
//     //         console.log(sortedData);
//     //         setProducts(response.data);
//     //     }).catch(error => {
//     //         console.error('Error fetching data:', error);
//     //     });
//     // };
//     // const fetchDataAndSortByAscending = () => {
//     //     axios.get('https://fakestoreapi.com/products').then(response => {
//     //         const sortedData = sortByPriceAscending(response.data);
//     //         console.log(sortedData);
//     //         setProducts(response.data);
//     //     }).catch(error => {
//     //         console.error('Error fetching data:', error);
//     //     });
//     // };
//     // const fetchDataAndSortByDescending = () => {
//     //     axios.get('https://fakestoreapi.com/products').then(response => {
//     //         const sortedData = sortByPriceDescending(response.data);
//     //         console.log(sortedData);
//     //         setProducts(response.data);
//     //     }).catch(error => {
//     //         console.error('Error fetching data:', error);
//     //     });
//     // };
//     const fetchDataAndSortByAscending = () => {
//         const sortedData = [...allProducts].sort((a, b) => a.price - b.price);
//         setAllProducts(sortedData);
//         // const sortedData = sortByPriceAscending(currentProducts);
//         // setAllProducts(sortedData);
//     };

//     const fetchDataAndSortByDescending = () => {
//         const sortedData = [...allProducts].sort((a, b) => b.price - a.price);
//         setAllProducts(sortedData);
//         // const sortedData = sortByPriceDescending(currentProducts);
//         // setAllProducts(sortedData);
//     };
//     const fetchDataAndSortByAtoZ = () => {
//         const sortedData = [...allProducts].sort((a, b) => a.title.localeCompare(b.title));
//         setAllProducts(sortedData);
//         // const sortedData = sortByNameAZ(currentProducts);
//         // setAllProducts(sortedData);
//     };

//     const fetchDataAndSortByZtoA = () => {
//         const sortedData = [...allProducts].sort((a, b) => b.title.localeCompare(a.title));
//         setAllProducts(sortedData);
//         // const sortedData = sortByNameZA(currentProducts);
//         // setAllProducts(sortedData);
//     };

//     //sort xong là 1 chuyện, vậy muốn giữ màn hình thì sao??
//     //eh.....

//     // const sortByNameAZ = (data) => {
//     //     return data.sort((a, b) => a.title.localeCompare(b.title));
//     // };
//     // // Sắp xếp theo tên từ z đến a
//     // const sortByNameZA = (data) => {
//     //     return data.sort((a, b) => b.title.localeCompare(a.title));
//     // };
//     // // Sắp xếp theo giá tăng dần
//     // const sortByPriceAscending = (data) => {
//     //     return data.sort((a, b) => a.price - b.price);
//     // };
//     // // Sắp xếp theo giá giảm dần
//     // const sortByPriceDescending = (data) => {
//     //     return data.sort((a, b) => b.price - a.price);
//     // };



//     const navigation = useNavigation();

//     //function for search bar
//     const [searchText, setSearchText] = useState('');
//     // Hàm lọc sản phẩm dựa trên giá trị nhập vào trong search bar
//     const filterProducts = () => {
//         return currentProducts.filter(product =>
//             product.title.toLowerCase().includes(searchText.toLowerCase()) ||
//             product.price.toString().includes(searchText.toLowerCase()) ||
//             product.category.toString().includes(searchText.toLowerCase())
//             // tìm tên shop, nhưng chưa có data cho cái đó
//             // || product.description.toLowerCase().includes(searchText.toLowerCase())
//         );
//     };




//     return (

//         <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//             <View style={HomeStyle.container}>

//                 {/* <ScrollView showsVerticalScrollIndicator={false}> */}
//                 {/*Header
//                         Header có search bar + cart */}
//                 <View style={HomeStyle.header}>

//                     <TouchableOpacity
//                         onPress={filterProducts}
//                         style={HomeStyle.headerContent}>
//                         <AntDesign
//                             style={HomeStyle.searchIcon}
//                             name="search1"
//                             size={27}
//                             color="gray" />
//                         <TextInput
//                             style={{ width: 300, height: 50, }}
//                             placeholder='Bạn muốn tìm gì?.....'
//                             placeholderTextColor={'gray'}
//                             onChangeText={text => setSearchText(text)}
//                         />
//                     </TouchableOpacity>

//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('Cart')}>
//                         <View style={HomeStyle.cartContainer}>

//                             <AntDesign
//                                 name="shoppingcart"
//                                 size={30}
//                                 color="black"
//                                 style={HomeStyle.cart}
//                             />
//                             <View style={HomeStyle.onCart}>
//                                 {/*Truyền hàm đếm số lượng sản phẩm vào */}
//                                 <Text style={HomeStyle.numberOnCart}>{0}</Text>
//                             </View>

//                         </View>
//                     </TouchableOpacity>



//                 </View>
//                 <ScrollView
//                     ref={scrollViewRef}
//                     showsVerticalScrollIndicator={false}
//                 >

//                     <View style={{ marginTop: 5, }} />

//                     {/*filter n products container //'#F3F2ED' */}
//                     <View>
//                         {/*Filters*/}
//                         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
//                             <View style={{ flexDirection: 'row', }}>
//                                 {/*Filter */}
//                                 <TouchableOpacity
//                                     style={{
//                                         flexDirection: 'row',
//                                         marginLeft: 13,
//                                         marginRight: 15,
//                                         padding: 7,
//                                         borderRadius: 5,
//                                         borderWidth: 0.5,

//                                     }}
//                                     onPress={() => {
//                                         console.log('pressed');
//                                     }}>
//                                     <AntDesign
//                                         style={{
//                                             marginRight: 10,
//                                             borderRightWidth: 0.5,
//                                             paddingRight: 7,
//                                             paddingTop: 2,
//                                         }}
//                                         name="filter"
//                                         size={24}
//                                         color="gray" />
//                                     <Text style={{
//                                         paddingRight: 7,
//                                         paddingTop: 2,
//                                     }}>Lọc theo: </Text>
//                                 </TouchableOpacity>



//                                 {/*Giá */}
//                                 <TouchableOpacity style={HomeStyle.priceFilter}
//                                     onPress={fetchDataAndSortByAscending}>
//                                     <Feather
//                                         style={HomeStyle.priceIcon}
//                                         name="dollar-sign"
//                                         size={24}
//                                         color="gray" />
//                                     <Text >Giá </Text>
//                                     <AntDesign style={{
//                                         paddingRight: 5,
//                                         marginLeft: 5,
//                                     }}
//                                         name="up" size={24} color="black" />

//                                 </TouchableOpacity>

//                                 <TouchableOpacity style={HomeStyle.priceFilter}
//                                     onPress={fetchDataAndSortByDescending}>
//                                     <Feather
//                                         style={HomeStyle.priceIcon}
//                                         name="dollar-sign"
//                                         size={24}
//                                         color="gray" />
//                                     <Text >Giá </Text>
//                                     <AntDesign style={{
//                                         paddingRight: 5,
//                                         marginLeft: 5,
//                                     }}
//                                         name="down" size={24} color="black" />

//                                 </TouchableOpacity>

//                                 {/*Tên */}
//                                 <TouchableOpacity
//                                     style={HomeStyle.AtoZFilter}
//                                     onPress={fetchDataAndSortByAtoZ}>
//                                     <AntDesign
//                                         style={HomeStyle.iconName}
//                                         name="tagso"
//                                         size={24}
//                                         color="black" />
//                                     <Text>A-Z</Text>
//                                 </TouchableOpacity>

//                                 <TouchableOpacity
//                                     style={HomeStyle.ZtoAFilter}
//                                     onPress={fetchDataAndSortByZtoA}>
//                                     <AntDesign
//                                         style={HomeStyle.iconName}
//                                         name="tagso"
//                                         size={24}
//                                         color="black" />
//                                     <Text>Z-A</Text>
//                                 </TouchableOpacity>
//                             </View>

//                         </ScrollView>

//                         <View style={{ marginTop: 10, marginLeft: 13, }} >
//                             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gợi ý hôm nay</Text>
//                         </View>

//                         {/*Products */}
//                         <View style={{ marginTop: 10 }} >

//                             <View style={HomeStyle.itemRow}>

//                                 {/* Render danh sách sản phẩm sau khi lọc */}
//                                 {/* {currentProducts.map((item, index) => (
//                                     <ProductItem
//                                         item={item}
//                                         key={index}
//                                     />
//                                 ))} */}

//                                 {filterProducts().map((item, index) => (
//                                     <ProductItem
//                                         item={item}
//                                         key={index}
//                                     />
//                                 ))}


//                             </View>
//                             {/* Phân trang */}
//                             <View style={HomeStyle.paginationContainer}>
//                                 <TouchableOpacity
//                                     style={HomeStyle.paginationBox}
//                                     onPress={handlePrevPage}
//                                     disabled={currentPage === 1}>
//                                     <Text style={HomeStyle.paginationText}>Trang trước</Text>
//                                 </TouchableOpacity>
//                                 <View style={{ backgroundColor: 'darkgray', borderRadius: 30, marginHorizontal: 10, }}>
//                                     <Text style={HomeStyle.paginationText}>
//                                         {currentPage}
//                                     </Text>
//                                 </View>

//                                 <TouchableOpacity
//                                     style={HomeStyle.paginationBox}
//                                     onPress={handleNextPage}
//                                     disabled={endIndex >= allProducts.length}>
//                                     <Text style={HomeStyle.paginationText}>Trang sau</Text>
//                                 </TouchableOpacity>
//                             </View>


//                         </View>
//                     </View>


//                 </ScrollView>

//             </View>
//         </TouchableWithoutFeedback>
//     );
// }

