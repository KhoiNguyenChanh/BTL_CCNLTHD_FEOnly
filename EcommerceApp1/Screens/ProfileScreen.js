import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useContext, useEffect, useLayoutEffect, useState } from "react";
import {View, Text, ScrollView, Image, Alert} from 'react-native';
import ProfileStyle from "../styles/ProfileStyle";
import { TouchableOpacity } from "react-native-gesture-handler";
import UserProfile from "../components/UserProfile";
import Order from "../components/Order";
import ImagePicker from 'react-native-image-picker'; 

const ProfileScreen = ()=>{
    const navigation = useNavigation();
    // const [userId, setUserID] = useContext(userType);
    // const [user,setUser] = useState();
    // useEffect(() =>{
    //     const fetchUserProfile = async ()=>{
    //         try{
    //             //http://localhost:8081/profile
    //             const res = await axios.get(`https://dummyapi.io/data/v1/${userID}`)
    //             const {user} = response.data;
    //             setUser=(user);
    //         }catch(error){
    //             console.log('Error', error)
    //         }
    //     }
    //      fetchUserProfile();
    // },[])
    const [isProfilePressed, setIsProfilePressed] = useState(false);
    const [isOrderPressed, setIsOrderPressed] = useState(false);

    const handleProfile = () => {
        setIsProfilePressed(true);
        setIsOrderPressed(false);
    }

    const handleOrder = () => {
        setIsProfilePressed(false);
        setIsOrderPressed(true);
    }
    const handleLogout=()=>{
        Alert.alert('Đăng xuất', 'Bạn có chắc chắn muốn đăng xuất không?',
        [  { text:'OK', onPress:()=> {  navigation.navigate('Login'); }   }, 
            { text: 'Không',  style: 'cancel', },
        ]);
    }
    const [avatarSource, setAvatarSource] = useState(require('../assets/profile_default.png'));
    // Hàm để chọn ảnh từ thư viện
    const selectImage = () => {
        ImagePicker.showImagePicker({}, response => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };
                // Cập nhật nguồn ảnh mới cho avatar
                setAvatarSource(source);
            }
        });
    };
    return (
        <View style={ProfileStyle.container}>
            <ScrollView>
                <View style={ProfileStyle.headerContainer}>
                    <TouchableOpacity 
                        onPress={selectImage}   
                        style={ProfileStyle.avatarContainer}>
                        <Image style={ProfileStyle.avatar}source={require('../assets/profile_default.png')}/>
                    </TouchableOpacity>
                    {/*Tên người dùng, nếu có api để bắt :)) */}
                    <Text style={ProfileStyle.textName}>
                       { 'NGUYEN VAN A' }
                    </Text>
                    <Text style={ProfileStyle.textRole}>
                        Vai trò: {'ROLE'}
                    </Text>
                    <TouchableOpacity
                        onPress={handleLogout}
                        style={ProfileStyle.buttonContainer}>
                        <Text style={ProfileStyle.textLogout}>LOGOUT</Text>
                    </TouchableOpacity>
                </View>
                {/*dùng tab? Nah, trễ quá r :(( */}
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <TouchableOpacity 
                        onPress={handleProfile}
                        style={ProfileStyle.tabTextContainer} >
                             <Text style={isProfilePressed ? ProfileStyle.tabTextPress : ProfileStyle.tabTextUnpress}>Profile</Text>

                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress={handleOrder}
                        style={ProfileStyle.tabTextContainer} >
                        <Text style={isOrderPressed ? ProfileStyle.tabTextPress : ProfileStyle.tabTextUnpress}>Order</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    {/*Thiết lập làm sao để nhấn lại lần nữa sẽ tắt cái tab đi - fail */}
                    {isProfilePressed && <UserProfile />}
                    {isOrderPressed && <Order />}
                </View>

                <View style={{marginVertical:20, marginHorizontal:10, alignItems:'center'}}>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('specialFunc')}
                        style={{backgroundColor:'darkgray', borderRadius:10,width:300, }}>
                        <Text style={{color:'white',padding:10, textAlign:'center', fontSize:16}}>Chức năng đặc biệt</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default ProfileScreen;