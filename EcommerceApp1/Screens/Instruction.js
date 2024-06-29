import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Intruction =()=> {
    return (
      <View style={{marginHorizontal:20, marginVertical:20, flex:1, width:300}}>
        <Text style={styles.textTitle}>Để thực hiện phê duyệt người bán. Quý nhân viên vui lòng thực hiện như sau:</Text>  
        <Text style={styles.text}>1. Nhấn vào avatar để phê duyệt người bán</Text>
        <Text style={styles.text}>2. Nhấn vào avatar lần nữa để xóa đi người bán đã được phê duyệt</Text>
        <Text style={styles.text}>Chúc một ngày làm việc tốt lành!</Text>
      </View>
    )
}
export default Intruction;
const styles = StyleSheet.create({
    textTitle:{
        fontSize:25,
        fontWeight:'bold'
    },
    text:{
        fontSize:17,
    }
})