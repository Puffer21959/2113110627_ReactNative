import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";

export default function App(): React.JSX.Element {
  /*React.JSX make this component a JSX */

  const onClickMe = () => {
    Alert.alert("Hi", "hello React.JS");
  }; //prep function of <Button/>

  const users = [
    { id: 1001, name: "John" },
    { id: 1002, name: "Marry" },
  ]; //prep List and Key

  return (
    <View style={styles.container}>
      {/*use of prop sent title to AppHeader.tsx */}
      <AppHeader title="This is Header" year={2024} />
      <AppHeader title="This is Header2" />

      <Text>Hello React Native YEASHHHHH</Text>

      {/*List and Key */}
      {users.map((data, index) => {
        return (
          <Text key={data.id}>
            No. {index + 1} ID: {data.id} Name: {data.name}
          </Text>
        );
      })}

      <Button
        title="Click Me"
        onPress={onClickMe} //call function in parameter
        /* onPress={() => {
        Alert.alert("Hi", "React Native is Fun");
        }} */
        color={"magenta"}
      />

      <AppFooter />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
