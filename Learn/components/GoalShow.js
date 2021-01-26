import React from 'react'
import {Text,TextInput,StyleSheet, View, TouchableOpacity} from 'react-native'
export default function GoalShow(props) {
    return (
        <TouchableOpacity activeOpacity={0.6} onPress={props.delete}>
                    <View style={styles.goals}><Text>{props.goals}</Text></View>


        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    goals : {
    
        borderWidth: 1,
        borderColor: 'black',
        padding:10,
        backgroundColor: '#ccc',
        marginVertical: 10
       
    
      },
})
