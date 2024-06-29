import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import HomeStyle from '../styles/HomeStyle';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Rating from './Rating';
const ProductItem = ({ item }) => {
    const navigation = useNavigation();
    return (
        <View style={HomeStyle.ProductImageContainer}>
            {/* 1st 20 sp */}
            <TouchableOpacity onPress={() => navigation.navigate('Product', {
                id: item.id,
                title: item.title,
                price: item?.price,
                rating: item.rating,
                description: item.description,
                image: item.image,
                category: item.category,

            })}>
                
                <Image
                    source={{ uri: item?.image }}
                    alt={item?.name}
                    style={HomeStyle.ProductImage} />

                {/*rating */}
                <View style={{ marginTop: 5, padding: 2 }}>

                    <Text
                        numberOfLines={2}
                        style={{ width: 150, marginTop: 10,marginLeft:2, fontWeight:'500' }}
                    >
                        {item?.title}
                    </Text>




                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 5, }}>
                        
                        <Text style={{ marginTop: 2, color: 'gray', fontWeight: 'bold' }}>
                            {item?.price}₫
                        </Text>

                        {/*đưa rating thành ngôi sao */}
                        <View style={{ marginTop: 2, flexDirection: 'row', }}>
                            <Text style={{ fontSize: 13, fontWeight: 'bold', color: '#FFC72C', marginRight: 5, }}>
                                {item?.rating?.rate}
                            </Text>
                            <FontAwesome name="star" size={20} color="#FFC72C" />
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>

    )
}
export default ProductItem;
