import React, { useState, useEffect } from "react";
import { View, FlatList } from "react-native";
import { Text, Button } from "@rneui/themed";


const Favorites = ({ route }) => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (route.params && route.params.exerciseName) {
      handleAddExercise(route.params.exerciseName);
    }
  }, [route.params]);

  const handleAddExercise = (exerciseName) => {
    setExercises((prevState) => [...prevState, exerciseName]);
  };

  const handleRemoveExercise = (exercise) => {
    const updatedExercises = exercises.filter((item) => item !== exercise);
    setExercises(updatedExercises);
  };

  const renderExerciseItem = ({ item }) => {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
        }}
      >
        <Text>{item}</Text>
        <Button onPress={() => handleRemoveExercise(item)}>
          <Text>Remove</Text>
        </Button>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={exercises}
        renderItem={renderExerciseItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Text>No favorite exercises added yet</Text>}
      />
    </View>
  );
};

export default Favorites;
