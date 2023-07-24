import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

// Define your stack navigator param list here
// For example, if you have two screens (Home and Counter), you would define it like this:

type RootStackParamList = {
  Home: undefined;
  Counter: undefined;
  Todo: undefined;
};

// Define your screen-specific types
// For each screen, define its corresponding route prop and navigation prop types:

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;
type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type CounterScreenRouteProp = RouteProp<RootStackParamList, "Counter">;
type CounterScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Counter"
>;

type TodoScreenRouteProp = RouteProp<RootStackParamList, "Todo">;
type TodoScreenNavigationProp = StackNavigationProp<RootStackParamList, "Todo">;

// Export the param list and screen-specific types

export type {
  RootStackParamList,
  HomeScreenRouteProp,
  HomeScreenNavigationProp,
  CounterScreenRouteProp,
  CounterScreenNavigationProp,
  TodoScreenRouteProp,
  TodoScreenNavigationProp,
};
