import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, TextInput, Alert, Button, TouchableWithoutFeedback, Keyboard} from 'react-native'
import Card from  '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/Number'
import axios from 'axios'


export default function StartGameScreen(props) {
    const [enteredText, setEnteredText] = useState("");
    const [confirm, setConfirmed] = useState(false)
    const [number, setNumber] = useState('')
    const [apiData, setApiData] = useState([])
    
    const handleInput  = (text) => {
        setEnteredText(text.replace(/[^0-9]/g, ''));

    }

    const confirmButton = () => {
        const choosenNumber  =  parseInt(enteredText)
        if(isNaN(choosenNumber) || choosenNumber <= 0 || choosenNumber > 99){
            Alert.alert('Invalid Number!',
            'Text to be entered must be a number between 1 and 99', [
                {
                    text: 'Okay',
                    style: 'destructive',
                    onPress: resetButton
                }
            ])
            console.log('error')
            
            return;
        }
        setEnteredText('')
        setConfirmed(true)
        setNumber(choosenNumber)
        Keyboard.dismiss()
        
    }

    const startingGame = () => {
       props.gameStart(number)
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/1`).
        then((res) => {
            if(res){
                
                setApiData(res.data.body)
            }

        }).
        catch((err) => {
            console.log(err)
        })
        return () => {
            console.log('clean up function')
        }
    }, [])



    

    let selectedNumber;
    if(confirm){
      
        selectedNumber = 
         <Card style={styles.summary}>
              <Text style={{fontSize: 14}}>Number you selected</Text>
              <NumberContainer>{number}</NumberContainer>
              <View style={styles.startGame}>
              <Button title="START GAME" color="green" onPress={startingGame}  />
              </View>
         </Card>
    }

    const resetButton = () => {
        setEnteredText('')
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
            <Card style={styles.textInput}> 
            <Text style={styles.textTitle}>Enter A Number</Text>
            <Input style={styles.input} blurOnSubmit autoCorrect={false} keypadType="numeric-pad" autoCapitalize="none" maxLength={2} onChangeText={handleInput} value={enteredText} />
            <View style={styles.btnContainer}>
            <View style={styles.btn}><Button title="Confirm" onPress={confirmButton} /></View>
            <View style={styles.btn}><Button title="Reset" color="red"  onPress={resetButton} /></View>
            </View>
            </Card>
            {selectedNumber}

       </View>
       </TouchableWithoutFeedback>
        
    )
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding:40

    },

    textTitle: {
        fontSize: 17,
        fontWeight: 'bold'

    },
    textInput: {
        width: 300,
        padding: 30,
        backgroundColor: 'white',
        alignItems: 'center',
        maxWidth:'100%'

    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'

    },

    btn: {
        width: '50%',
        paddingHorizontal:10,
    },
    input : {
        width: 40,
        textAlign: 'center',
        fontSize:20,
        
    },
    summary: {
         marginTop: 33,
         justifyContent: 'center',
         alignItems: 'center',
         padding:50
    },
    startGame: {
        marginVertical: 5
    }
})
