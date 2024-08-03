import { View, Text } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type AppHeaderProps = {
  fullname: string;
  subtitle?: string /* '?' mean optional parameter may or may not have it*/;
};

//use of prop
const AppHeader = ({
  fullname,
  subtitle,
}: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={stylesPractice.header}>
      <Text style={stylesPractice.headerText}>
        Input your fullname: {fullname}
        {"\n"}
        <Text style={stylesPractice.subtitleText}>{subtitle}</Text>
      </Text>
      {/*if 'year' is sent we add 543 to year*/}
    </View>
  );
};

export default AppHeader;

/*const styles = StyleSheet.create({
  header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitleText: {
    fontSize: 16,
    color: "#fff",
  },
});*/
