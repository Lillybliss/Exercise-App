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

const LapTracker = ({ exerciseName, handleLapPress, navigation }) => {
  const [laps, setLaps] = useState(0);

  const handleLap = () => {
    setLaps(laps + 1);
    handleLapPress();
  };

  const resetLap = () => {
    setLaps(0);
  };

  const handleAddToFavorite = () => {
    navigation.navigate("Favorites", { exerciseName });
  };

  return (
    <View style={styles.container}>
      <Text h2>{exerciseName}</Text>
      <Text h3>Laps: {laps}</Text>
      <Button title="Lap" onPress={handleLap} />
      <Button title="Reset" onPress={resetLap} />
      <Button title="Add to Favorites" onPress={handleAddToFavorite} />
      <Button title="Home" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default LapTracker;
