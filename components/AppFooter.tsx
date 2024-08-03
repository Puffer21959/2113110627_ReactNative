import { Text, View } from "react-native";
import React from "react";
import { stylesPractice } from "../styles/styles";

type AppFooterProps = {
  footerMessage: string;
};

const AppFooter = ({ footerMessage }: AppFooterProps): React.JSX.Element => {
  const hello = "Hello TNI Footer"; //use of variable
  const hello2 = <Text>Hello JSX</Text>; //variable use with JSX
  const isLogin = true;
  //const isLogin = false;

  return (
    <View style={stylesPractice.footer}>
      <Text style={stylesPractice.footerText}>{footerMessage}</Text>
    </View>
  );
};

export default AppFooter;

/*const styles = StyleSheet.create({
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
});*/
