import React, {useState} from 'react'
import {View, TextInput, StyleSheet} from 'react-native'

export default function Input(props) {

 
    return (
        <View >
            <TextInput  {...props} style={{...styles.input, ...props.style}}  />
        </View>
    )
}


const styles =  StyleSheet.create({
    input : {
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        height: 30,
        marginVertical: 20,
    }
})