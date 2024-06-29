import { StyleSheet } from "react-native";

export default StyleSheet.create({
    //container bọc nguyên màn hình
    container: {
        flex: 1,

    },
    //title
    titleContainer: {
        marginTop: 100,
        marginLeft: 15,
        marginBottom: 50,

    },
    bigText: {
        fontSize: 45,
        fontWeight: '500'
    },
    smallText: {
        color: 'gray',
        fontSize: 15
    },
    //input
    inputContainer: {
        marginLeft: 15,
    },
    Input: {
        color: 'gray',
        marginVertical: 10,
        //width:'93%',
        // height: 65,
        // backgroundColor:'#E8E9EB', //brightgray
        // borderLeftWidth: 0.5,
        // borderBottomWidth: 1,
        // borderRadius:5,
        // borderColor: '#A7A6BA',
        // padding: 15,
        // marginBottom:20,
    },
    abvInput: {
        color: 'gray'
    },
    iconInputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        paddingVertical: 5,
        width: '95%',
        height: 65,
        backgroundColor: '#E8E9EB', //brightgray
        borderLeftWidth: 0.5,
        borderBottomWidth: 1,
        borderRadius: 5,
        borderColor: '#A7A6BA', //purple gray
        padding: 10,
        marginBottom: 10,
    },
    icon: {
        marginRight: 3,
    },
    //quên mật khẩu
    forgotContainer: {
        marginTop: -7,
        marginRight: 25,
        alignItems: 'flex-end',

    },
    forgotText: {
        color: '#708090', //slate gray
        fontWeight: '500'
    },
    //buttonđăngnhập
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    btn: {
        width: 225,
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#C0C0C0', //silver
        borderRadius: 8,
    },
    btnText: {
        color: '#2B2523', //blackstrap molasses
        padding: 20,
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    //or 
    orContainer: {
        marginTop: 10,
        alignItems: 'center',


    },
    btnLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,

    },
    googleLogo: {
        width: 45,
        height: 45
    },
    //to Register
    toReg: {
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textToReg: {
        textAlign: 'center',
        color: 'gray',
        paddingTop: 8,
    },
    touchToReg: {
        marginLeft: 5,
        fontWeight: '500',
        fontSize: 20,
        backgroundColor: '#E8E9EB',
        borderRadius: 6,
        height: 40,
        paddingLeft: 5,
        paddingRight: 5,
        padding: 2,
        color: '#708090'
    }

})