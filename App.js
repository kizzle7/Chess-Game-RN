  import React, { useState } from "react";
  import { StyleSheet, Text, View, TextInput, Image, Button, ScrollView, FlatList} from "react-native";
  import { onChange } from "react-native-reanimated";
  // import Index from './src/Navigation/index'
  import GoalInput from './Learn/components/GoalInput'
  import GoalShow from './Learn/components/GoalShow'
  import Header from './Learn/components/Header'
  import StartGameScreen from './Learn/screens/StartGameScreen'
  import GameScreen from './Learn/screens/GameScreen'
  import GameScreenOver from './Learn/screens/GameScreenOver'
  import Test from './Learn/components/Test'
  export default function App() {
    const [courseGoals, setCourseGoals] = useState([]);
    const [modal, setModal] = useState(false);
    const [gameNumber, setGameNum] = useState();
    const [numRounds, setNumRounds] = useState()
    


    const deleteGoal = (id) => {
      setCourseGoals(currentGoals => {
        return currentGoals.filter((goal) => goal.id !== id)
      })
      
    }

    const configureNewGame =() => {
      setNumRounds(undefined)
      setGameNum(undefined)
    }

    const gameOver = (num) => {
      setNumRounds(num)


    }

    const cancel = () => {
      setModal(false)
    }

    const startGameFunction = (num) => {
      console.log(num)
      setGameNum(num)
      console.log(numRounds)

    }

    const toggleModal = () => setModal(true)

    const addGoal = (goal) => {
    setCourseGoals( currentGoals =>  [...currentGoals, {id: Math.random().toString(), value: goal}])
    setModal(false)
    
    }
    
    
    let content = <StartGameScreen gameStart={startGameFunction}  />
    ;

    if(gameNumber && numRounds === undefined ){
      content = <GameScreen userChoice={gameNumber} gameOver={gameOver} />
    }
    else if(numRounds > 0){
      content = <GameScreenOver userNumber={gameNumber} restart={configureNewGame} rounds={numRounds}  />
    }


    
    return (
      <View style={styles.container}>
        {/* <Button title ="Add A New Goal" onPress={toggleModal} />
        <GoalInput onAddGoal = {addGoal} visible={modal} cancel={cancel} />
        <FlatList data={courseGoals}  keyExtractor={(item, index) => item.id}  renderItem ={itemData => <GoalShow   goals={itemData.item.value} delete={deleteGoal.bind(this, itemData.item.id)} />} /> */}
      <Header title="Guess A Number" />
      {content}

      </View>

      
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex:1

    },



  });
