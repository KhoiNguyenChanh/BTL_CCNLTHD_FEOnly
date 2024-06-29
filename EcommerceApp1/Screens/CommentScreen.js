import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import ReviewStyle from "../styles/ReviewStyle";
import ProductStyle from "../styles/ProductStyle";
import { FontAwesome } from '@expo/vector-icons';
import { TextInput } from "react-native";

const CommentScreen = () => {
    const navigation = useNavigation();
    const [text, setText] = useState('');

    const handleSubmit = () => {
        if (text.trim() === '') {
            Alert.alert('Lỗi', 'Vui lòng nhập bình luận trước khi gửi.');
            return;


        }
        Alert.alert('Thành công', 'Đã gửi bình luận thành công.', [
            { text: 'OK', onPress: () => navigation.goBack() }
        ]);
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <ScrollView>
                    <View style={{ backgroundColor: 'white', marginVertical: 10, }}>
                        <View style={ReviewStyle.reviewContent}>
                            <Text style={{ fontWeight: 'bold' }}>UserName</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <Text style={ProductStyle.itemRating}>
                                    {4}/5
                                </Text>
                                <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                            </View>
                            <View style={ReviewStyle.reviewBox}>
                                <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username something that you say or write that expresses your opinion:
                                    comment on I don't want any comments on my new haircut, thank you!
                                    comment about Garry made a derogatory comment about one of his teachers.
                                    make a comment He made negative comments to the press.
                                    fair comment I suppose his criticism was fair comment (= a reasonable opinion).
                                    no comment She was asked about the pay increase but made no comment (= did not give an opinion).</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 5, backgroundColor: 'white', padding: 20, }}>
                            <View style={{
                                //padding: 15,
                                backgroundColor: 'white',
                                borderWidth: 0.5,
                                borderRadius: 10,
                                borderColor: 'gray',
                                height: 200,
                            }}>
                                <TextInput
                                    style={{ padding: 10, borderRadius: 5 }}
                                    value={text}
                                    onChangeText={setText}
                                    multiline={true}
                                    placeholder="Nhập bình luận của bạn...." />
                            </View>
                        </View>
                        <View style={{ width: 130, backgroundColor: 'gray', padding: 10, borderRadius: 10, marginVertical: 5, left: 245 }}>
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text style={{ color: 'white', textAlign: 'center', fontSize: 16 }}>Gửi</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </View>

        </TouchableWithoutFeedback>


    )
}
export default CommentScreen;