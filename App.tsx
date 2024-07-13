import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";

export default function App(): React.JSX.Element {
  /*React.JSX make this component a JSX */

  const fullname = "Pattrawut Buahchuang"
  const greeting = "Hello from App.tsx"
  const school = 'Thai Nichi Institute of Technology'

  return (
    <View style={styles.container}>
      {/*use of prop sent title to AppHeader.tsx */}
      <AppHeader name={fullname} message={greeting} />

      <Content name={fullname} message={greeting}/>

      <AppFooter data={school} />

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
