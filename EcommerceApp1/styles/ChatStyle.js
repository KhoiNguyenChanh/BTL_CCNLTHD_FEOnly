import { StyleSheet } from "react-native";

export default StyleSheet.create({
    chatContainer:{
         alignItems:'center', 
         justifyContent:'center',
         flex:1,
         
    },
    chatboxList:{
        //flex:1,
       // backgroundColor:'coral',
        marginTop:5,
        padding:10,
        borderTopWidth:0.5,
        borderBottomWidth:1,
        borderRadius:3,
    },
    content:{
        borderWidth:0.5,
        width:330,
        height:70,
        flexDirection:'row',
        marginTop:5,
        borderRadius:15,

    },
    avatarContainer:{
        width:50,
        height:50,
        margin:10,
        borderRadius:30,
        borderWidth:0.5,
        alignItems:'center',
    },
    avatar:{
        //backgroundColor:'blue',
        width:45,
        height:45,
        marginTop:5,
        borderRadius:30,
        

    }
})