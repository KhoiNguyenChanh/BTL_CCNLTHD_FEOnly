import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatisticsScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Thống kê</Text>
            <View style={styles.statisticItem}>
                <Text style={styles.statisticLabel}>Tổng số sản phẩm:</Text>
                <Text style={styles.statisticValue}>100</Text>
            </View>
            <View style={styles.statisticItem}>
                <Text style={styles.statisticLabel}>Tổng doanh thu:</Text>
                <Text style={styles.statisticValue}>1,000,000đ</Text>
            </View>
            {/* Thêm các dữ liệu thống kê khác ở đây */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    statisticItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    statisticLabel: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    statisticValue: {
        fontSize: 18,
    },
});

export default StatisticsScreen;