import React from "react";
import { View, Text, TouchableOpacity, TextInput, Alert, ScrollView, Keyboard, TouchableWithoutFeedback, Image } from 'react-native';
import HomeStyle from "../styles/HomeStyle";
import { AntDesign } from '@expo/vector-icons';
import ChatStyle from "../styles/ChatStyle";
import { useNavigation, useRoute } from "@react-navigation/native";
import {GiftedChat} from 'react-native-gifted-chat';
const ChatScreen1 = () => {
    const navigation = useNavigation();
    return (
        
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={{ flex:1, marginVertical: 3, }}>
                {/*chức năng temp, tìm người dùng để chat */}
                <View style={[HomeStyle.header]}>

                    <TouchableOpacity
                        onPress={() => { Alert.alert('pressed, rember to give a function') }}
                        style={HomeStyle.headerContent}>
                        <AntDesign
                            style={HomeStyle.searchIcon}
                            name="search1"
                            size={27}
                            color="gray" />
                        <TextInput
                            style={{width:300}}
                            placeholder='Nhập tên người bạn muốn nhắn tin.....'
                            placeholderTextColor={'gray'} />
                    </TouchableOpacity>
                </View>

                <View style={{marginHorizontal:20, marginVertical:10,}}>
                    <Text style={{fontSize:20, fontWeight:'500', color:'#2B2523'}}>Danh sách tin nhắn</Text>
                </View>

                <View style={{ flex:1, //backgroundColor: 'blue' 
                }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={ChatStyle.chatContainer}>
                        
                            <View style={ChatStyle.chatboxList}>
                                <TouchableOpacity onPress={()=> navigation.navigate('Chat2')}>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:8, fontWeight:'500'}}>Tên người dùng</Text>
                                        <Text style={{marginTop:3, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                         />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                                <TouchableOpacity>
                                     <View style={ChatStyle.content}>

                                    <View style={ChatStyle.avatarContainer}>
                                        <Image style={ChatStyle.avatar}
                                        source={require('../assets/profile_default.png')} />
                                    </View>

                                    <View>
                                        <Text style={{marginTop:5,}}>Tên người dùng</Text>
                                        <Text style={{marginTop:5, fontSize:15, color:'gray'}}>Tin nhắn người dùng.....</Text>
                                    </View>
                                    
                                </View>

                                
                                </TouchableOpacity>
                            </View>
                        </View>

                    </ScrollView>

                </View>

                
            </View>
        </TouchableWithoutFeedback>
     )
}
export default ChatScreen1;