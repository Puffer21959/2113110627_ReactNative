import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  return (
    <View style={stylesLogin.container}>
      <TextInput style={stylesLogin.input} placeholder="Enter name" />
      <TextInput style={stylesLogin.input} placeholder="Enter email" />
      <Button title="Submit" />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
