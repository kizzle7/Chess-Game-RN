import React,  {useState} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { onChange } from 'react-native-reanimated';

export default function StartGameScreen() {
    const [textNumber, settext] =  useState('');

    const onChange = (text) => {
        settext(text.replace(/[^0-9]/g, ''));
    }

    const confirmButton = () => {
        console.log(textNumber)
    }
    return (
        <View style={styles.screen}>
            <View style={styles.mainArea}>
                <View style={styles.input}>
                <TextInput style={styles.inputStyle} maxLength={2} onChangeText={onChange} keyboardType ="numeric"   />
                </View>
                <View style={styles.btn}>
                <Button style={styles.btn_size} title="Confirm" color="green" onPress={confirmButton}  />
                <Button style={styles.btn_size} title="Reset"  color="red" />

            </View>
            </View>
            

        </View>
    )
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 60
    },

    mainArea : {
        width: 250,
        textAlign: 'center',
        padding: 15,
        backgroundColor: 'white',    
        shadowColor: 'black',
        shadowOffset: {width: 4, height: 3},
        shadowOpacity: 0.26,
        elevation: 6,
        borderRadius: 9
    },

    input: {
        alignItems: 'center'
    },

    inputStyle : {
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        height: 30,
        width: 50,
        textAlign:'center',
        

    },
    btn : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
    },
    btn_size: {
        width: '60%'
    }

})
