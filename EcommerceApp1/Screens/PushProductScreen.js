import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Alert, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';


const PushProductScreen = ()=>{
      const [productName, setProductName] = useState('');
      const [productDescription, setProductDescription] = useState('');
      const [productPrice, setProductPrice] = useState('');
      const [productImage, setProductImage] = useState(null);
    
      const handleChooseImage = () => {
        const options = {
          mediaType: 'photo',
          quality: 0.5,
        };
        launchImageLibrary(options, response => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.errorMessage) {
            console.log('ImagePicker Error: ', response.errorMessage);
          } else {
            setProductImage(response.uri);
          }
        });
      };
    
      const handleSellProduct = () => {
        // Validate input
        if (!productName || !productDescription || !productPrice ) {
          Alert.alert('Thông báo', 'Vui lòng nhập đầy đủ thông tin sản phẩm');
          return;
        }
    
        // Thực hiện các logic như đăng sản phẩm lên server
        // Sau khi đăng thành công thì reset lại các trường nhập
        setProductName('');
        setProductDescription('');
        setProductPrice('');
        setProductImage(null);
    
        //THông báo thành cống
        Alert.alert('Thông báo', 'Đã đăng sản phẩm thành công');
      };
    
      return (
        <View style={ProductStyles.container}>
             <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={ProductStyles.title}>Đăng Sản Phẩm</Text>
          <Text style={{fontSize:17, color:'gray', marginBottom:20,}}>Đăng sản phẩm muốn bán lên cho người dùng</Text>
          
          <View>
            <Text style={{fontSize:15, color:'gray',}}>Hình ảnh sản phẩm</Text>

          <TouchableOpacity onPress={handleChooseImage} style={ProductStyles.imagePicker}>
            {productImage ? (
              <Image source={{ uri: productImage }} style={ProductStyles.productImage} />
            ) : (
              <Text style={ProductStyles.imagePickerText}>Chọn Ảnh</Text>
            )}
          </TouchableOpacity>
          </View>

          <Text style={{fontSize:15, color:'gray',}}>Tên sản phẩm</Text>
          <TextInput
            value={productName}
            onChangeText={setProductName}
            placeholder="Tên Sản Phẩm"
            style={ProductStyles.input}
          />
          <Text style={{fontSize:15, color:'gray',}}>Mô tả sản phẩm</Text>

          <TextInput
            value={productDescription}
            onChangeText={setProductDescription}
            placeholder="Mô Tả"
            multiline
            style={[ProductStyles.input, { height: 100 }]}
          />
          <Text style={{fontSize:15, color:'gray',}}>Giá tiền sản phẩm</Text>

          <TextInput
            value={productPrice}
            onChangeText={setProductPrice}
            placeholder="Giá (VNĐ)"
            keyboardType="numeric"
            style={ProductStyles.input}
          />
          <TouchableOpacity onPress={handleSellProduct} style={ProductStyles.button}>
            <Text style={ProductStyles.buttonText}>Đăng Sản Phẩm</Text>
          </TouchableOpacity>
        </ScrollView>
        </View>
       
      );
};
export default PushProductScreen;
const ProductStyles= StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
      },
      title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 5,
      },
      input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
      },
      imagePicker: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        height: 200,
        marginBottom: 20,
      },
      imagePickerText: {
        fontSize: 18,
        color: '#666',
      },
      productImage: {
        width: '100%',
        height: '100%',
        borderRadius: 5,
      },
      button: {
        backgroundColor: 'gray',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
}, })