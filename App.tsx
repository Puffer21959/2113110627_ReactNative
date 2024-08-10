import { View, Text } from "react-native";
import React from "react";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewApp from "./components/NewApp";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/*<View>{ProfileScreen()}</View>*/}
      {/* <UseEffectExample /> */}
      {/*<View>{FlatListExample()}</View>*/}
      {/*<FlatListcallBackend />*/}
      <NewApp />
    </View>
  );
};

export default App;
