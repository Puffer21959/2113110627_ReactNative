import { View, Text } from "react-native";
import React from "react";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";

const App = (): React.JSX.Element => {
  return (
    <View>      
      {/*<View>{ProfileScreen()}</View>*/}
      {/* <UseEffectExample /> */}
      {/*<View>{FlatListExample()}</View>*/}
      <FlatListcallBackend />
    </View>
  );
};

export default App;
