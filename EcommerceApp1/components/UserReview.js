import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useLayoutEffect, useReducer, useState } from "react";
import { View, Text, ScrollView, Image, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity } from 'react-native';
import ProfileStyle from "../styles/ProfileStyle";
import Rating from "./Rating";
import { TextInput } from "react-native-gesture-handler";
import ProductItem from "./ProductItem";
import { FontAwesome } from '@expo/vector-icons';


const UserReview = () => {
    const route = useRoute();
    //console.log(route);
    const navigation = useNavigation();
    const [text, setText] = useState('');
    
    const handleSubmit = () => {
        if (text.trim('') === '') {
            Alert.alert('Lỗi', 'Vui lòng nhập đánh giá trước khi gửi.');
            return;

            
        }
        Alert.alert('Thành công', 'Đã gửi đánh giá thành công.', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ]);
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1 }}>
                <ScrollView>

                    <View style={{ marginTop: 15, backgroundColor: 'white' }}>

                        <View style={{ flexDirection: 'row', padding: 10, }}>
                            <Image style={{ height: 65, width: 65, resizeMode: 'contain', }}
                                source={{ uri: route.params.image }} />
                            <View style={{ margin: 5, width: 270 }}>
                                <Text numberOfLines={1}> {route.params.title} </Text>
                                <Text style={{ marginTop: 10, marginLeft: 5, fontSize: 15, color: 'gray' }}>Phân loại: {route.params.category}</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ marginTop: 15, backgroundColor: 'white', padding: 20, }}>
                        <View style={{
                            //padding: 15,
                            backgroundColor: 'white',
                            borderWidth: 0.5,
                            borderRadius: 10,
                            borderColor: 'gray',
                            height: 400,
                        }}>
                            <TextInput
                                style={{ padding: 10, borderRadius: 5 }}
                                value={text}
                                onChangeText={setText}
                                multiline={true}
                                placeholder="Nhập đánh giá của bạn...." />
                        </View>

                        <View style={{flexDirection:'row', marginTop:5,}}>
                            <Text style={{ marginTop:3,}}>Chất lượng sản phẩm:  </Text>
                            <TextInput keyboardType="numeric" placeholder="1 ,2, 3, 4, 5"/>
                            <Text style={{ marginTop:2,}}> /5</Text>
                            <FontAwesome style={{ marginTop: 3, marginLeft:5, }} name="star" size={20} color="#FFC72C" />
                        </View>
                            

                        
                        <View  style={{ width:130,backgroundColor: 'gray', padding: 10, borderRadius: 10, marginTop:10, left:225 }}>
                            <TouchableOpacity onPress={handleSubmit}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Gửi đánh giá</Text>
                            </TouchableOpacity>
                        </View>
                        
                    </View>

                    
                </ScrollView>

                
            </View>
        </TouchableWithoutFeedback>
    )
}
export default UserReview;