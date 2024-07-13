import { View, Text, Alert, Button, StyleSheet } from "react-native";
import React from "react";

type ContentProps = {
  name: string;
  message?: string;
};

const onClickMe = () => {
  Alert.alert("Hello", 'Input your fullname');
}; //prep function of <Button/>

const Content = ({ name, message }: ContentProps) => {
  return (
    <View style={styles.content}>
      <Text style={styles.text}>{message}</Text>
      <Button
        title="Click Me"
        //onPress={onClickMe} //call function in parameter
        onPress={() => {
        Alert.alert("Hi", 'Input your fullname');
        }}
        color={"magenta"}
      />
    </View>
  );
};

export default Content;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});
