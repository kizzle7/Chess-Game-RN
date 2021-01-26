import React, {useState, useRef, useEffect} from 'react'
import {View, Text, StyleSheet, Button, Alert} from 'react-native'
import Number from '../components/Number'
import Card from '../components/Card'

const generateGuessNumber = (min,max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const randomNumber =  Math.floor(Math.random() * (max-min)) + min;
    if(randomNumber === exclude){
        return generateGuessNumber(min, max, exclude);
    }
    else{
        return randomNumber
    }
}
export default function GameScreen(props) {
    const [guessNum, setGuessNum] = useState(generateGuessNumber(1, 100, props.userChoice))
    const [rounds, setRounds] = useState(0)
    const currentLow = useRef(1);
    const currentHigh  = useRef(100)
    
    const computeNum = (condition) => {
        if((condition === "lower" && guessNum < props.userChoice) || (condition === "higher" && guessNum > props.userChoice)){
            Alert.alert('Dont\'t Lie', 'You know this is wrong' , [{style: 'destructive', text: 'Okay'}])
            return;
        }
        if(condition === "lower"){
            currentHigh.current = guessNum;
        }
        else if(condition === "higher"){
            currentLow.current = guessNum;
        }
        const numberGuess = generateGuessNumber(currentLow.current, currentHigh.current, guessNum)
        setGuessNum(numberGuess)
        setRounds(numRounds => numRounds +  1) 


    }

    useEffect(() => {
        if(guessNum === props.userChoice){
            props.gameOver(rounds)
        }
    })

    return (
        <View style={styles.screen}>
            <Text>Game Screen Interface</Text>
            <Number>{guessNum}</Number>
            <Card style={styles.btnContainer}>
                <Button title="Lower" onPress={computeNum.bind(this, 'lower')} />
                <Button title = "Higher" onPress={computeNum.bind(this, 'higher')} />
            </Card>
        </View>
    )
}

const styles =  StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
        width: 300,
        maxWidth: '80%',
        padding:20
    }
})
