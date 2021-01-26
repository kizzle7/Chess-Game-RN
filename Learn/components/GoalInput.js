import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button, Modal } from "react-native";
export default function GoalInput(props) {
  const [enteredGoal, setEnteredGoal] = useState("");

  const onChange = (e) => {
    setEnteredGoal(e);
  };

  const addGoal = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <TextInput
          placeholder="Enter your Goal"
          style={styles.textInput}
          onChangeText={onChange}
          value={enteredGoal}
        />
        <View style={styles.underButton}>
            <View style={styles.btnSize}>
            <Button title="ADD GOAL" onPress={addGoal} />
            </View>
            <View style={styles.btnSize}>
            <Button title="Cancel" color="red" onPress={props.cancel} />
            </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  textInput: {
    width: "90%",
    padding: 5,
    borderBottomColor: "black",
    borderWidth: 1,
    marginBottom: 10,
  },
  underButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  btnSize: {
      width: '30%',
      marginRight:10
  }
});
