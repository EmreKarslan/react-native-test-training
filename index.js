import registerRootComponent from "expo/build/launch/registerRootComponent";
import App from "./src/App";
export const Main = () => {
  return <App />;
};

registerRootComponent(Main);
