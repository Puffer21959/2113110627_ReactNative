import { View, TextInput, Button, Alert } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { styleAxiospostData } from "../styles/styles";

const AxiospostData = (): React.JSX.Element => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleInputChange = (key: string, value: string) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleSubmit = async () => {
    try {
      //sent formData to the Url
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        formData
      );
      Alert.alert(
        "User Created",
        `
        ID: ${response.data.id}
        Name: ${response.data.name}
        Email: ${response.data.email}`
      );
    } catch {
      Alert.alert("Error", "Failed to create user");
    }
  };

  return (
    <View style={styleAxiospostData.container}>
      <TextInput
        style={styleAxiospostData.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInputChange("name", value)}
      />
      <TextInput
        style={styleAxiospostData.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInputChange("email", value)}
      />
      <Button title="Create User" onPress={handleSubmit} />
    </View>
  );
};

export default AxiospostData;
