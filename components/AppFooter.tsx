import { StyleSheet, Text, View } from "react-native";
import React from "react";

const AppFooter = (): React.JSX.Element => {
  const hello = "Hello TNI Footer"; //use of variable
  const hello2 = <Text>Hello JSX</Text>; //variable use with JSX
  const isLogin = true;
  //const isLogin = false;

  return (
    <View>
      <Text style={styles.myText}>
        {hello} Date:{new Date().toLocaleDateString()}
        {/*Date Time*/}
      </Text>

      {hello2}

      {isLogin && <Text>Welcome Boss</Text>}
      {/*'&&' check condition if true */}
      {/* '===' compare both boolean and Data Type */}

      {isLogin ? <Text>Welcome Marry</Text> : <Text>Welcome not Marry</Text>}
      {/*Ternary*/}
    </View>
  );
};

export default AppFooter;

const styles = StyleSheet.create({
  myText: {
    color: "red",
    backgroundColor: "black",
  },
});
