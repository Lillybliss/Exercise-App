import { StyleSheet, View } from "react-native";
import { FlatList } from "react-native";
import { Button } from "@rneui/themed";
import * as React from "react";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const exerciseTypes = [
  {
    id: "repetition",
    title: "Repetition Exercises",
    exercises: [
      { id: "pushups", name: "Push Ups", count: 0, suggested: "Jumping Jacks" },
      {
        id: "jumpingjacks",
        name: "Jumping Jacks",
        count: 0,
        suggested: "Push ups",
      },
    ],
  },
  {
    id: "duration",
    title: "Duration Exercises",
    exercises: [
      { id: "running", name: "Running", time: 0, suggested: "bicycling" },
      { id: "bicycling", name: "Bicycling", time: 0, suggested: "running" },
    ],
  },
];

const favData = [
  {
    id: "favorites",
    title: "Favorites",
    screen: "Favorites",
  },
];

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <Button
        title={item.title}
        onPress={() =>
          navigation.navigate(item.id, {
            title: item.title,
            exercises: item.exercises,
            exerciseTypes: exerciseTypes,
          })
        }
        containerStyle={{ marginVertical: 10 }}
      />
    );
  };

  const renderFav = ({ item }) => {
    return (
      <Button
        title={item.title}
        onPress={() => navigation.navigate("Favorites")}
        containerStyle={{ marginVertical: 10 }}
      />
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={exerciseTypes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList data={favData} renderItem={renderFav} />
    </View>
  );
};

export default Home;
