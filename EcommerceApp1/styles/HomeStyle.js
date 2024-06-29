import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#F3F2ED',
    },
    header: {
        backgroundColor: '#E8E9EB',//'#F3F2ED' winter sky,//
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center'
    },

    headerContent: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 7,
        gap: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        height: 38,
        borderBottomWidth: 0.5,

    },
    searchIcon: {
        paddingLeft: 10,
    },

    cartContainer: {
        borderWidth: 0.5,
        borderRadius: 8,
    },
    cart: {
        marginRight: 5,
        padding: 5,
        paddingTop: 7,
    },
    onCart: {
        position: 'absolute',
        backgroundColor: 'red',
        width: 16,
        height: 16,
        borderRadius: 15 / 2,
        right: 5,
        top: +2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    numberOnCart: {
        alignItems: 'center',
        justifyContent: 'center',
        color: "#FFFFFF",
        fontSize: 7,
    },
    itemRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between',



    },
    Products: {
        //borderWidth:0.5,
        borderRadius: 8,
        marginVertical: 10,
        //flexDirection:'row',
        marginHorizontal: 10,
        padding: 10,
        //alignItems:'center'
        backgroundColor: 'white',

    },
    ProductImageContainer: {
        marginHorizontal: 15,
        marginVertical: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 5,


    },
    ProductImage: {
        height: 150,
        width: 150,
        //resizemode làm ảnh show 100%
        resizeMode: 'contain',
        marginBottom: 10,
    },
    priceIcon: {
        marginRight: 10,
        borderRightWidth: 0.5,
        paddingRight: 7,
        paddingTop: 2,
        paddingLeft: 10,
    },
    priceFilter: {
        flexDirection: 'row',
        width: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 0.5,
        marginHorizontal: 10,
    },
    AtoZFilter: {
        flexDirection: 'row',
        marginLeft: 13,
        marginRight: 15,
        padding: 7,
        borderRadius: 5,
        borderWidth: 0.5,
    },
    ZtoAFilter: {
        flexDirection: 'row',
        marginRight: 15,
        padding: 7,
        borderRadius: 5,
        borderWidth: 0.5,
    },

    iconName: {
        marginRight: 10,
        borderRightWidth: 0.5,
        paddingRight: 7,
        paddingTop: 2,

    },
    paginationContainer: {
        flexDirection: 'row',
        //alignItems:'center',
        justifyContent: 'space-around',
        marginHorizontal: 40,
        marginBottom: 15,

    },
    paginationBox: {
        borderRadius: 20,
        backgroundColor: 'gray',
        width: 160,
        marginHorizontal: -70

    },
    paginationText: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 17,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    }
})
