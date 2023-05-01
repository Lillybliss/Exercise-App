import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "@rneui/themed";
import { Button } from "@rneui/themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const Repetition = ({ route, navigation }) => {
  const { exerciseName, exerciseTypes } = route.params;

  const exercises = exerciseTypes.find(
    (type) => type.id === "repetition"
  ).exercises;

  const renderExerciseButton = (exercise) => (
    <Button
      key={exercise.id}
      title={exercise.name}
      onPress={() =>
        navigation.push("exercise", {
          exerciseName: exercise.name,
          exerciseCount: exercise.count,
          suggestedExercise: exercise.suggested,
        })
      }
      containerStyle={{ marginVertical: 10 }}
    />
  );

  return (
    <View style={styles.container}>
      <Text h2>{exerciseName}</Text>
      {exercises.map(renderExerciseButton)}
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Repetition;
