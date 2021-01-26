import React from 'react'
import {View, Text, StyleSheet} from 'react-native' 
import Header from './Header'
// import StartGameScreen from './StartGameScreen'

export default function Index() {
    return (
        <View style={styles.screen}>
            <Header />
            {/* <StartGameScreen /> */}

        </View>
    )
}

const styles = StyleSheet.create({
    screen :{
        backgroundColor: 'white',
        alignItems: 'center',
    }
})