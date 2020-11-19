import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import TableSchedule from '../../components/TableSchedule'

const jadwal = () => {
    return (
        <View style={styles.page}>
            <Text>JADWAL JENGKI FUTSAL</Text>
            <View style={styles.wrapperHeader}>
                <TableSchedule />
            </View>
        </View>
    )
}

export default jadwal

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapperHeader: {
        paddingHorizontal: 30,
        paddingTop: 30,
    }
})