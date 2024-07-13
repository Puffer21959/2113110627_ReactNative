import { StyleSheet, Text, View } from "react-native";
import React from "react";

type AppFooterProps = {
  data: string;
};

const AppFooter = ({ data }: AppFooterProps): React.JSX.Element => {
  const hello = "Hello TNI Footer"; //use of variable
  const hello2 = <Text>Hello JSX</Text>; //variable use with JSX
  const isLogin = true;
  //const isLogin = false;

  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>{data}</Text>
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
