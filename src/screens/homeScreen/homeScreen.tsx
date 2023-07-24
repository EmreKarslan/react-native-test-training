import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { HomeScreenNavigationProp } from "../../types/NavigationTypes";

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleNavigateToCounter = () => {
    navigation.navigate("Counter");
  };

  const handleNavigateToTodo = () => {
    navigation.navigate("Todo");
  };

  return (
    <View>
      <Text>Welcome to the Home Screen!</Text>
      <Button onPress={handleNavigateToCounter} title="Go to Counter Screen" />
      <Button onPress={handleNavigateToTodo} title="Go to Todo Screen" />
    </View>
  );
};

export default HomeScreen;
