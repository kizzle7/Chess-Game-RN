import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Test(props) {
    console.log(props.nice)
    return (
        <View style={styles.screen}>
            <Text>Test Component</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
