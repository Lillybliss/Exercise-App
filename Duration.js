import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import LapTracker from "./LapTracker";
import { useState } from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const Duration = ({ route, navigation }) => {
  const { exercises } = route.params;
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleSelectExercise = (exercise) => {
    setSelectedExercise(exercise);
  };

  const handleLapPress = () => {
    // handle any logic for when the user presses the lap button
    // carries over into LapTracker component
  };

  return (
    <View style={styles.container}>
      {exercises.map((exercise) => (
        <Button
          key={exercise.id}
          title={exercise.name}
          onPress={() => handleSelectExercise(exercise)}
          containerStyle={{ marginVertical: 10 }}
        />
      ))}
      {selectedExercise && selectedExercise.id === "running" && (
        <LapTracker
          exerciseName={selectedExercise.name}
          handleLapPress={handleLapPress}
          navigation={navigation}
        />
      )}
      {selectedExercise && selectedExercise.id === "bicycling" && (
        <LapTracker
          exerciseName={selectedExercise.name}
          handleLapPress={handleLapPress}
          navigation={navigation}
        />
      )}
    </View>
  );
};

export default Duration;
