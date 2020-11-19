import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderInformation } from '../../components'

const home = () => {
    return (
        <View style={styles.page}>
            <View style={styles.wrapperHeader}>
                <HeaderInformation />
            </View>
        </View>
    )
}

export default home

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
