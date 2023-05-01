import React, { useState } from "react";
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

const Exercise = ({ route, navigation }) => {
  const { exerciseName, exerciseCount, suggestedExercise } = route.params;
  const [count, setCount] = useState(exerciseCount);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  const handleAddToFavorite = () => {
    navigation.navigate("Favorites", { exerciseName });
  };

  return (
    <View style={styles.container}>
      <Text h2>{exerciseName}</Text>
      <Text h3>Count: {count}</Text>
      <Button title="Increase Count" onPress={increaseCount} />
      <Button title="Reset Count" onPress={resetCount} />
      {suggestedExercise && (
        <>
          <Button
            title={`Suggested: ${suggestedExercise}`}
            onPress={() =>
              navigation.push("exercise", {
                exerciseName: suggestedExercise,
                exerciseCount: 0,
              })
            }
          />
        </>
      )}
      <Button title="Add to Favorites" onPress={handleAddToFavorite} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default Exercise;
