import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function NumberContainer(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    )
}

const styles=  StyleSheet.create({
    container: {
        borderWidth: 2,
        padding: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        color: 'red',
        borderRadius: 3,
        

    },
    number: {
        fontSize:22,
        textAlign: 'center'
    }

})
