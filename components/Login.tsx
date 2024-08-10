import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { stylesLogin } from "../styles/styles";

const Login = (): React.JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passsword, setPassword] = useState("");

  const validateEmail = (email: string): boolean => {
    const recheckEmail = /\S+@\S+\.\S+/;

    console.log(/\S+@\S+\.S+/);
    return recheckEmail.test(email); // regex
    // \S+ = any 1 or more character that not empty space
    // @ = find "@" character
    // \. = find "." character
    // start regex with "/" and end with "/"
  };

  const handleSubmit = () => {
    //console.log("test");

    let errorMessage = "";

    if (!name) {
      //console.log("name null");
      //Alert.alert("Alert", "Please Enter Name", [{ text: "OK" }]);
      //return;
      errorMessage += "Please Enter Name.\n";
    }
    if (!email) {
      //Alert.alert("Alert", "Please Enter Email", [{ text: "OK" }]);
      //return;
      errorMessage += "Please Enter Email.\n";
    } else if (!validateEmail(email)) {
      errorMessage += "Invalid Email Format.\n";
    }

    if (!passsword) {
      errorMessage += "Please Enter Password.\n";
    } else if (passsword.length < 6) {
      errorMessage += "Password must be at least 6 character.\n";
    }

    if (errorMessage) {
      Alert.alert("Error", errorMessage.trim(), [{ text: "OK" }]);
      return;
    }

    //console.log("Success");
    Alert.alert("Alert", "Success", [{ text: "OK" }]);
  };

  return (
    <View style={stylesLogin.container}>
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={stylesLogin.input}
        placeholder="Enter Passsword"
        value={passsword}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <View>
        <Button title="Submit" onPress={handleSubmit} />
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
