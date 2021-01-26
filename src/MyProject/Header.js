import React from 'react'
import {View,Text, TextInput, StyleSheet} from 'react-native';

export default function Header() {
    return (
        <View style={styles.screen}>
            <Text style={styles.headerText}>Guess Game</Text>
        </View>
            
    )
}

const styles =  StyleSheet.create({
    screen : {
        backgroundColor: 'red',
        height: '3.6rem',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    
    },
    headerText: {
        color: 'white',
        fontSize: 20,
    }

})
