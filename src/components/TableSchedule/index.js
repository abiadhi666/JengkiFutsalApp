import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDefaultUser } from '../../assets'

const TableSchedule = () => {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <IconDefaultUser />
                <View>
                    <Text>Tim EUIS</Text>
                </View>
            </View>
        </View>
    )
}

export default TableSchedule

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fafafa'
    }
})
