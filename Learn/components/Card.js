import React from 'react'
import {View, StyleSheet, Text} from 'react-native'

export default function Card(props) {
    return (
        <View style={{...styles.card, ...props.style}}>{props.children}</View>
    )
}

const styles =  StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOpacity: 0.6,
        shadowRadius: 6,
        shadowOffset: {width: 0, height: 2},
        elevation: 9,
        backgroundColor: 'white',
        borderRadius: 6

    }
 

})
