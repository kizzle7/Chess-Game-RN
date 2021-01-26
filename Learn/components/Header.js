import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

const Header = props => {
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor:'purple',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        paddingVertical: 20
    },
    title: {
        color: 'white'
    }
})