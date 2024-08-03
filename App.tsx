import { StatusBar } from "expo-status-bar";
import { View, TextInput } from "react-native";
import AppFooter from "./components/AppFooter";
import AppHeader from "./components/AppHeader";
import Content from "./components/Content";
import { stylesPractice } from "./styles/styles";
import React, { useState, useEffect } from "react";

export default function App(): React.JSX.Element {
  /*React.JSX make this component a JSX */

  const [fullname, setFullname] = useState("");
  const [message, setMessage] = useState("Message from App.tsx");
  const [footerMessage, setFooterMessage] = useState(
    "Thai Nichi Institute of Technology"
  );

  useEffect(() => {
    console.log("Component has mounted");
  }, []);

  useEffect(() => {
    console.log(`Fullname has changed to: ${fullname}`);
  }, [fullname]);

  return (
    <View style={stylesPractice.container}>
      {/*use of prop sent title to AppHeader.tsx */}
      <AppHeader fullname={fullname} subtitle={message} />

      <Content fullname={fullname} message={message} />

      <AppFooter footerMessage={footerMessage} />

      <TextInput
        style={stylesPractice.input}
        placeholder="Enter your fullname"
        value={fullname}
        onChangeText={setFullname}
      />

      <StatusBar style="auto" />
    </View>
  );
}

/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});*/
