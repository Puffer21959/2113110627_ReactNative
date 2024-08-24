import { View, Text } from "react-native";
import React from "react";
import FlatListExample from "./components/FlatListExample";
import FlatListcallBackend from "./components/FlatListcallBackend";
import NewApp from "./components/NewApp";
import AxiosgetData from "./components/AxiosgetData";
import AxiospostData from "./components/AxiospostData";
import WeatherLondon from "./components/WeatherLondon";
import WeatherBangkok from "./components/WeatherBangkok";

const App = (): React.JSX.Element => {
  return (
    <View>
      {/*<View>{ProfileScreen()}</View>*/}
      {/* <UseEffectExample /> */}
      {/*<View>{FlatListExample()}</View>*/}
      {/*<FlatListcallBackend />*/}
      {/* {<NewApp />} */}
      {/* {<AxiosgetData />} */}
      {/* {<AxiospostData />} */}
      {/* {<WeatherLondon />} */}
      <WeatherBangkok />
    </View>
  );
};

export default App;
