import { View, Text, Button } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { RootState } from "@/store/index";
import { increment, decrement } from "@/store/reducers/counter/counter.reducer";
import { CounterScreenNavigationProp } from "@/types/NavigationTypes";

const CounterScreen = () => {
  const counterValue = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const navigation = useNavigation<CounterScreenNavigationProp>();

  return (
    <View>
      <Text>Counter Value: {counterValue}</Text>
      <Button onPress={() => dispatch(increment())} title="Increment" />
      <Button onPress={() => dispatch(decrement())} title="Decrement" />
      <Button onPress={() => navigation.goBack()} title="Go Back" />
    </View>
  );
};

export default CounterScreen;
