import React, { useState } from "react";
import {View, Text, TouchableOpacity} from 'react-native';
import ReviewStyle from "../styles/ReviewStyle";
import ProductStyle from "../styles/ProductStyle";
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation, useRoute } from "@react-navigation/native";

const ReviewScreen = ()=>{
    const navigation = useNavigation();
    const route = useRoute();
    const [isPressed1, setIsPressed1] = useState(false);
    const handleIconPressed1 = () => {
        setIsPressed1(!isPressed1);
    };
    
    const [isPressed2, setIsPressed2] = useState(false);
    const handleIconPressed2 = () => {
        setIsPressed2(!isPressed2);
    };
    const [isPressed3, setIsPressed3] = useState(false);
    const handleIconPressed3 = () => {
        //setIsPressed3(!isPressed3);
        navigation.navigate('Comment');
    };
    return (
        <View style={{flex:1}}>

            {/*Title */}
            <View style={{backgroundColor:'white', marginTop:10,}}>
                
                <Text style={{fontSize:20, fontWeight:'bold', marginHorizontal:15, marginVertical:10,}}>ĐÁNH GIÁ</Text>
                {/*phần user tự riview */}
                <TouchableOpacity onPress={()=> navigation.navigate('UserReview', 
                   {id: route.params.id,
                    title: route.params.title,
                    price: route.params.price,
                    rating: route.params.rating,
                    description: route.params.description,
                    image: route.params.image,
                    category: route.params.category}

                )}>
                    <View style={ReviewStyle.userReviewContainer}>
                        <Text style={{color:'gray', padding:20,}}>Nhấn để đánh giá sản phẩm </Text>
                    </View>
                    
                </TouchableOpacity>

            </View>
            
            

            {/*phần review/comment của user */}
            <View style={ReviewStyle.reviewContainer}>
                <Text style={{marginLeft:15, fontSize:20, fontWeight:'bold', marginVertical:15, }}>BÌNH LUẬN</Text>
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text numberOfLines={2}>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                <View style={ReviewStyle.reviewContent}>
                    <Text style={{fontWeight:'bold'}}>UserName</Text>
                    <View style={{ flexDirection: 'row' }}>

                            <Text style={ProductStyle.itemRating}>
                                {4}/5 
                            </Text>
                            <FontAwesome style={{ marginTop: 2 }} name="star" size={20} color="#FFC72C" />
                    </View>
                    <TouchableOpacity onPress={handleIconPressed3}>
                        <View style={ReviewStyle.reviewBox}>
                            <Text>placeHolderReview of huh? user Username placeHolderReview of user Username placeHolderReview of user Username</Text>
                        </View>
                    </TouchableOpacity>
                    

                    <View style={{flexDirection:'row', justifyContent:'flex-end', marginTop:10,}}>
                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed1}>
                            {isPressed1 ? (
                                <AntDesign name="like1" size={24} color="black" />
                                ):(
                                    <AntDesign name="like2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed2}>
                            {isPressed2 ? (
                                <AntDesign name="dislike1" size={24} color="black" />
                                ):(
                                    <AntDesign name="dislike2" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>

                        <TouchableOpacity 
                        style={{marginHorizontal:5,}}
                        onPress={handleIconPressed3}>
                            {isPressed3 ? (
                                <FontAwesome name="comment" size={24} color="black" />
                                ):(
                                    <FontAwesome name="comment-o" size={24} color="black" />
                                )
                            }
                        </TouchableOpacity>
                    </View>

                    
                </View> 
                
              
                 
            </View>
            
        
        
        
        </View>
    )
}
export default ReviewScreen;