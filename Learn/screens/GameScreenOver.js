import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Button } from "react-native-paper";

const GameScreenOver = (props) => {
  return (
    <View style={styles.screen}>
      <Image source={require('../img/over.jpg')}  style = {{ width: 250, height: 200 }}
 />
      <View>
          
      </View>
      <Text style={styles.text}>Game Over Screen</Text>
      <Text style={styles.text}>Number Selected : {props.userNumber} </Text>
      <Text style={styles.text}>Number of Rounds Played: {props.rounds} </Text>
      <View style={{marginVertical: 20}}>
      <Button color="green"  style={styles.btn} onPress={props.restart}>RESTART GAME</Button>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'black',
    color:'white'
  },
  text: {
      color: 'white',
      fontSize: 16
  },
  btn:{
      backgroundColor: 'white',
      color: 'green'
  }
});
export default GameScreenOver;
