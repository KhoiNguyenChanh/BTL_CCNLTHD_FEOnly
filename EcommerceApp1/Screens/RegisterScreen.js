import { useNavigation } from '@react-navigation/native';
import React, { Component, useState } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import RegisterStyle from '../styles/RegisterStyle';

const RegisterScreen = () => {
    const navigation = useNavigation();
    return (
      <View style={{flex:1
        //, alignItems:'center', justifyContent:'center'
      }}>
         {/*Tittle */}
         <View style={RegisterStyle.titleContainer}>
                        <Text style={{fontWeight:'500', fontSize:50}}>Đăng ký</Text>
                        <Text style={{fontWeight:'300', fontSize:20, color:'gray'}}>Bạn muốn trở thành ai?</Text>
                    </View>
        <View >
            <View style={{alignItems:'center', justifyContent:'center'}}>

                {/*to user */}
                <TouchableOpacity style={RegisterStyle.touchUser} 
                onPress={()=>navigation.navigate('RegisterUser')}>
                    <Text style={RegisterStyle.textUser}>NGƯỜI DÙNG</Text>
                </TouchableOpacity>

                <Text style={{fontWeight:'300'}}>HAY</Text>

                {/*to seller */}
                <TouchableOpacity  style={RegisterStyle.touchUser}
                onPress={()=>navigation.navigate('RegisterSeller')}>
                    <Text style={RegisterStyle.textUser}>NGƯỜI BÁN</Text>
                </TouchableOpacity>

            </View>
            
        </View>
      </View>
    )
}


export default RegisterScreen;


//registerscreen cũ
// import React, { useState } from 'react';
// import { ActivityIndicator, Alert, Image, Keyboard, ScrollView, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
// import RegisterStyle from '../styles/RegisterStyle';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
// import { useIsFocused, useNavigation } from '@react-navigation/native';
// //image
// import * as ImagePicker from 'expo-image-picker';
// //icons
// import { MaterialIcons } from '@expo/vector-icons';
// import { AntDesign } from '@expo/vector-icons';
// import { Entypo } from '@expo/vector-icons';
// //drop down
// import { SelectList } from 'react-native-dropdown-select-list';
// //formik form
// import { Formik } from 'formik';
// import * as yup from 'yup';
// //api
// import axios from 'axios';
// //google/fb


// export default function RegisterScreen({ setFieldValue }) {
//     //note. đăng ký, thành công thì đưa về đăng nhập để đăng nhập vào tài khoản, thất bại thì xuất thông báo đỏ
//     //xử lý oath2
//     const navigation = useNavigation();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [roles, setRoles] = useState('');
//     //google/fb
//     const [googleUser, setGoogleUser] = useState(null);

//     const handleGoogleRegister = async () => {
//         if (googleUser) {
//             Alert.alert(
//                 'Thông tin người dùng Google',
//                 `Name: ${googleUser.name}\nEmail: ${googleUser.email}`,
//                 [{ text: 'OK' }]
//             );
//         } else {
//             Alert.alert('Error', 'Cần đăng nhập Google trước', [{ text: 'OK' }]);
//         }
//     };


//     //roles - drop down select list - bug
//     // const [selected, setSelected] = useState('');
//     // const [roles, setRoles] = [
//     //     { key: 1, value: 'Người dùng thường' },
//     //     { key: 2, value: 'Người bán' },
//     //     { key: 3, value: 'Nhân viên sàn giao dịch' },

//     // ];

//     //dang ky

//     const handleRegister = () => {
//         const user = {
//             name: values.name,
//             email: values.email,
//             password: values.password,
//             roles: values.roles,
//             avatar: avatar,

//         };
//         //send A post request to the backend API
//         axios.post("http://localhost:8081/register", user).then((response) => {
//             console.log(response.data)
//             Alert.alert('Đăng ký thành công', 'Bạn đã đăng ký thành công');
//             setName('');
//             setPassword('');
//             setEmail('');
//             setRoles('');
//         }).catch((error) => {
//             Alert.alert("Đăng ký không thành công", "Đã xảy ra lỗi trong quá trình đăng ký")
//             console.log('Registration failed', error)
//         })
//         //navigation.navigate('Login');
//     };
//     //chọn ảnh đại diện
//     //cài reactnativeimagepicker
//     //vẫn còn vấn đề chưa làm dc (gọi trúng null)
//     const [avatar, setAvatar] = useState(null);

//     // const picker = async () => {
//     //     let { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     //     if (status !== 'granted') {
//     //         alert('Permission Denied!');
//     //     } else {
//     //         let res = await ImagePicker.launchImageLibraryAsync();
//     //         // if (!res.cancelled) {
//     //         //     setAvatar(() => res.uri);
//     //         //     console.log(res.uri);
//     //         // }
//     //         if (res.cancelled) {
//     //             alert('Image picking cancelled');
//     //         } else if (res.uri) {
//     //             setAvatar(res.uri);
//     //         } else {
//     //             alert('Failed to get image URI');
//     //         }
//     //     }
//     // };
//     const handleChooseAvatar = async () => {
//         try {
//             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//             if (status !== 'granted') {
//                 Alert.alert('Permission Denied', 'Please allow access to your photo library to choose an avatar.');
//                 return;
//             }

//             let result = await ImagePicker.launchImageLibraryAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.Images,
//                 allowsEditing: true,
//                 aspect: [4, 3],
//                 quality: 1,
//             });

//             if (!result.cancelled) {
//                 if (result.assets && result.assets.length > 0) {
//                 setAvatar(result.assets[0]); // Cập nhật giá trị avatar với đường dẫn mới
//                 setFieldValue('avatar', avatar.uri); // Cập nhật giá trị trong Formik
//             }}
//         } catch (error) {
//             console.error('Error choosing avatar:', error);
//         }
//     };

//     // const picker = async () => {

//     //     let {status} = await ImagePicker.requestMediaLibraryPermissionsAsync();
//     //     if (status !== 'granted'){
//     //         alert('Permission Denied!')
//     //     } else{
//     //         let res = await ImagePicker.launchImageLibraryAsync();
//     //         if( !res.canceled) {
//     //             setAvatar(() => res.uri);
//     //             console.log(setAvatar);
//     //             console.log(avatar)
//     //         }
//     //     }
//     // }

//     return (
//         //View bọc màn hình
//         <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss(); }}>
//             <View style={RegisterStyle.container}>
//                 <ScrollView>
//                     {/*Tittle */}
//                     <View style={RegisterStyle.titleContainer}>
//                         <Text style={RegisterStyle.bigText}>Đăng ký</Text>
//                         <Text style={RegisterStyle.smallText}>Trở thành người dùng mới!</Text>
//                     </View>

//                     <Formik
//                         initialValues={{ name: '', email: '', password: '', roles: '' }}
//                         validationSchema={yup.object().shape({
//                             name: yup.string().required('Không được để trống tên'),
//                             email: yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
//                             password: yup.string().min(6, 'Mật khẩu cần ít nhất 6 kí tự').required('Vui lòng nhập mật khẩu'),
//                             roles: yup.string().required('Không được để trống vai trò'),
//                         })}
//                         onSubmit={(values, { resetForm }) => {
//                             handleRegister(values);
//                             resetForm();
//                         }}
//                     >
//                         {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (

//                             < View style={[RegisterStyle.inputContainer]}>

//                                 <View>

//                                     <Text style={RegisterStyle.abvInput} >Tên người dùng</Text>
//                                     <View style={RegisterStyle.iconInputContainer}>
//                                         <MaterialIcons
//                                             style={RegisterStyle.icon}
//                                             name="person"
//                                             size={27}
//                                             color="#2B2523" />
//                                         <TextInput
//                                             style={[RegisterStyle.Input, { fontSize: name ? 16 : 16 }]}
//                                             value={values.name}
//                                             onChangeText={handleChange('name')}
//                                             onBlur={handleBlur('name')}

//                                             placeholder='Nguyễn Văn A'
//                                             placeholderTextColor={'gray'}
//                                         />
//                                     </View>
//                                     {touched.name && errors.name &&
//                                         <Text style={RegisterStyle.errorText}>{errors.name}</Text>
//                                     }
//                                 </View>

//                                 <View>
//                                     <Text style={RegisterStyle.abvInput}>Email</Text>

//                                     <View style={RegisterStyle.iconInputContainer}>
//                                         <MaterialIcons
//                                             style={RegisterStyle.icon}
//                                             name="email"
//                                             size={27}
//                                             color="#2B2523" />
//                                         <TextInput
//                                             onChangeText={handleChange('email')}
//                                             onBlur={handleBlur('email')}
//                                             value={values.email}
//                                             style={[RegisterStyle.Input, { fontSize: email ? 16 : 16 }]}
//                                             placeholder='user@gmail.com'
//                                             placeholderTextColor={'gray'}
//                                         />
//                                     </View>
//                                     {touched.email && errors.email &&
//                                         <Text style={RegisterStyle.errorText}>{errors.email}</Text>
//                                     }
//                                 </View>

//                                 <View>
//                                     <Text style={RegisterStyle.abvInput}>Mật khẩu</Text>

//                                     <View style={RegisterStyle.iconInputContainer}>
//                                         <AntDesign
//                                             style={RegisterStyle.icon}
//                                             name="lock"
//                                             size={27}
//                                             color="#2B2523" />
//                                         <TextInput
//                                             onChangeText={handleChange('password')}
//                                             onBlur={handleBlur('password')}
//                                             value={values.password}
//                                             style={[RegisterStyle.Input, { fontSize: password ? 16 : 16 }]}
//                                             placeholder='Nhập mật khẩu của bạn'
//                                             secureTextEntry={true}
//                                             placeholderTextColor={'gray'}
//                                         />
//                                     </View>
//                                     {touched.password && errors.password &&
//                                         <Text style={RegisterStyle.errorText}>{errors.password}</Text>
//                                     }
//                                 </View>


//                                 <View>
//                                     <Text style={RegisterStyle.abvInput}>Avatar</Text>
//                                     <View style={RegisterStyle.iconInputContainer}>
//                                         <AntDesign
//                                             style={RegisterStyle.icon}
//                                             name="picture"
//                                             size={27}
//                                             color="#2B2523" />
//                                         <TouchableOpacity
//                                             style={[RegisterStyle.Input, { justifyContent: 'center' }]}
//                                             onPress={handleChooseAvatar}
//                                         >

//                                             <Text style={[RegisterStyle.abvInput, { fontSize: 16 }]}>Nhấn để chọn ảnh đại diện</Text>

                                            
//                                         </TouchableOpacity>
//                                         <View style={{}}>
//                                                 {avatar && <Image source={avatar ? { uri: avatar.uri } : require('../assets/profile_default.png')}
//                                                     resizeMode='center'
//                                                     style={{ width: 75, height: 75 }} />}

//                                         </View>
//                                     </View>
//                                 </View>


//                                 <View style={RegisterStyle.marginInput}>
//                                     <Text style={RegisterStyle.abvInput}>Vai trò</Text>
//                                     <View style={RegisterStyle.iconInputContainer}>
//                                         <Entypo
//                                             style={RegisterStyle.icon}
//                                             name="briefcase"
//                                             size={27}
//                                             color="#2B2523" />

//                                         <TextInput
//                                             onChangeText={handleChange('roles')}
//                                             onBlur={handleBlur('roles')}
//                                             value={values.roles}
//                                             style={[RegisterStyle.Input, { fontSize: roles ? 16 : 16 }]}
//                                             placeholder='User/ Seller/ Nhân viên sàn...?'
//                                             secureTextEntry={true}
//                                             placeholderTextColor={'gray'}

//                                         />
//                                     </View>
//                                     {touched.roles && errors.roles &&
//                                         <Text style={RegisterStyle.errorText}>{errors.roles}</Text>
//                                     }
//                                 </View>



//                                 <View style={RegisterStyle.btnContainer}>


//                                     <View>
//                                         <TouchableOpacity style={RegisterStyle.btn}
//                                             //onPress={() => navigation.navigate('Login')}
//                                             onPress={handleSubmit}
//                                         >
//                                             <Text style={RegisterStyle.btnText}>ĐĂNG KÝ</Text>
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                             </View>
//                         )}
//                     </Formik>
//                     {/* or */}
//                     <View style={RegisterStyle.orContainer}>
//                         <Text>Hoặc đăng ký bằng</Text>
//                     </View>
//                     {/*Đăng nhập Oauth2 = ggle và fb */}
//                     <View style={RegisterStyle.btnLoginContainer}>
//                         <TouchableOpacity>
//                             <AntDesign name="facebook-square" size={45} color="darkblue" />
//                         </TouchableOpacity>

//                         <TouchableOpacity onPress={handleGoogleRegister}>
//                             <Image
//                                 style={RegisterStyle.googleLogo}
//                                 source={require('../assets/googleLogo.png')} />
//                         </TouchableOpacity>
//                     </View>
//                 </ScrollView>
//                 {/*Not a user yet?*/}
//                 <View style={RegisterStyle.toLogin}>
//                     <Text style={RegisterStyle.textToLogin}>Đã có tài khoản?</Text>
//                     <TouchableOpacity
//                         onPress={() => navigation.navigate('Login')}>
//                         <Text style={RegisterStyle.touchToLogin}>Đăng nhập</Text>
//                     </TouchableOpacity>
//                 </View>


//             </View>
//         </TouchableWithoutFeedback >
//     );
// }

