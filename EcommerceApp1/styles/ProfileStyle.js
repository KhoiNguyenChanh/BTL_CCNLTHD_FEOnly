import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex:1, 
    },
    headerContainer:{
        marginVertical:5,
        borderBottomWidth:1,
        borderColor:'gray',
        backgroundColor:'darkgray',
        alignItems:'center',
        justifyContent:'center',
        
    },
    avatarContainer:{
        borderRadius:50, 
        borderColor:'gray',
        width:100,
        height:100, 
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center',
        marginVertical:20,
    },
    avatar:{
        marginTop:15,
        width:90,
        height:90,
        borderRadius:50,
    },
    textName:{
        fontSize:25,
        fontWeight:'bold',
        color:'white',
    },
    textRole:{
        color:'white',
        fontWeight:'500',
        fontSize:17,
        marginBottom:20,
    },
    buttonContainer:{
        backgroundColor:'#C0C0C0',
        borderRadius:25,
        marginBottom:20,

    },
    textLogout:{
        textAlign:'center',
        padding:20,
        width:200,
        fontSize:15,
        fontWeight:'bold',
        color:'white',
    },
    tabTextContainer:{
        marginTop:-3,
        alignItems:'center',
        justifyContent:'center',
        borderWidth:0.5,
        borderTopWidth:0,
        width:185,
        height:70,
        marginHorizontal:5,
    },
    tabTextPress:{
        padding:10,
        fontSize:20,
        fontWeight:'bold',
        color:'#A7A6BA',

    },
    tabTextUnPress:{
        padding:20,
        fontSize:17,
        fontWeight:'500',

    },


})