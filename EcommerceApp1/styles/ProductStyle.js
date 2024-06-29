import { StyleSheet } from "react-native";

export default StyleSheet.create({
    itemPrice:{
        fontSize:20,
        color:'#708090',
        marginLeft:15,

    },
    itemTitle:{
        fontSize:17,
        marginHorizontal:15,
        fontWeight:"bold"
    },
    itemRating:{
        fontSize:15,
        //marginLeft:15,
        color:"#FFC72C",
        marginRight: 5,
        fontWeight:"500"

       
    },
    addToCart:{
        borderWidth:1,
        padding:10,
        backgroundColor:'lightgray',
        marginVertical: 17,
        borderRadius:30,
        marginHorizontal:40,
        justifyContent:'center',
        
    },
    addCartText:{
        fontSize:20,
        fontWeight:'500',
        color:'#2B2523',
        textAlign:'center'

    },
    shopContainer:{
        //marginHorizontal:15,
        backgroundColor:'white',
        marginTop:10,
        //borderWidth:0.5,
    },
    shopContent:{
        paddingLeft:10,
        padding:10,
        flexDirection:'row',

    },
    shopAvatar:{
        //backgroundColor:'blue',
        width:60,
        height:60,
        borderRadius:40,
        marginBottom:5,
        alignItems:'center',
        borderWidth:0.5,
        marginRight:10,
    },
    textName:{
        fontWeight:'500',
        fontSize:20,

    },
    text_10:{
        fontSize:10,
    }


})