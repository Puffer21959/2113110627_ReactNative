import { View, Text, StyleSheet } from "react-native";
import React from "react";

type AppHeaderProps = {
  name: string;
  message?: string /* '?' mean optional parameter may or may not have it*/;
};

//use of prop
const AppHeader = ({ name, message }: AppHeaderProps): React.JSX.Element => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>
        {name}{'\n'}
        <Text style={styles.subtitleText}>
            {message}
        </Text>
      </Text>
      {/*if 'year' is sent we add 543 to year*/}
    </View>
  );
};

export default AppHeader;

const styles = StyleSheet.create({
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
});
