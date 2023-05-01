import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Repetition from "./Repetition";
import Duration from "./Duration";
import Exercise from "./Exercise";
import Favorites from "./Favorites";


const Stack = createNativeStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />
          <Stack.Screen
            name="repetition"
            component={Repetition}
            options={{ title: "Repetition Exercises" }}
          />
          <Stack.Screen
            name="duration"
            component={Duration}
            options={{ title: "Duration Exercises" }}
          />
          <Stack.Screen name="Favorites" component={Favorites} />
          <Stack.Screen name="exercise" component={Exercise} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
