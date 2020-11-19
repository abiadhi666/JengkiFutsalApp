import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { IconDefaultUser } from '../../assets'

const HeaderInformation = () => {
    return (
        <View style={styles.container}>
            <View style={styles.userInfo}>
                <IconDefaultUser />
                <View>
                    <Text style={styles.hello}>Hello,</Text>
                    <Text style={styles.username}>Abay</Text>
                </View>
            </View>
            <View style={styles.jadwalInfo}>
                  
            </View>
        </View>
    )
}

export default HeaderInformation

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    userInfo: {
        flexDirection: 'row',
    },
    hello: {
        
    }
})
