import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {View, Text, TouchableOpacity} from 'react-native';

const SpecialFunc = () => {
    const navigation = useNavigation();
    return (
      <View style={{alignItems:'center', justifyContent:'center', marginTop:120}}>
         
                
                <Text> for seller:</Text>
                 <TouchableOpacity onPress={()=>navigation.navigate('CreateShop')}
                 style={{borderWidth:1, backgroundColor:'lightblue', padding:20, marginVertical:20,}}>
                    <Text>CreateShop</Text>
                 </TouchableOpacity>

                 <Text> for staffs:</Text>
                 <TouchableOpacity onPress={()=>navigation.navigate('VerifySeller')}
                 style={{borderWidth:1, backgroundColor:'lightblue', padding:20, marginVertical:20,}}>
                    <Text>VerifySeller</Text>
                 </TouchableOpacity>

                 <Text> for seller:</Text>
                 <TouchableOpacity onPress={()=>navigation.navigate('PushProduct')}
                 style={{borderWidth:1, backgroundColor:'lightblue', padding:20, marginVertical:20,}}>
                    <Text>PushProduct</Text>
                 </TouchableOpacity>
       
                 <Text> for seller:</Text>
                 <TouchableOpacity onPress={()=>navigation.navigate('Statistic')}
                 style={{borderWidth:1, backgroundColor:'lightblue', padding:20, marginVertical:20,}}>
                    <Text>Statistic</Text>
                 </TouchableOpacity>
      </View>  
       
    )
}
export default SpecialFunc;