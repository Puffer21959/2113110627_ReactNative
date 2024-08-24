import { Text, View, FlatList, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { styleAxiosgetData } from "../styles/styles";

type User = {
  id: number;
  name: string;
  email: string;
};

const AxiosgetData = (): React.JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  //get data by axios
  const fetchData = async () => {
    try {
      //<User[]> check if fetch data match the type of User[]
      const response = await axios.get<User[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data);
    } catch {
      setError("Fail to fetch users");
    } finally {
      setLoading(false);
    } //end of try/catch
  }; //end of fetchData

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <View style={styleAxiosgetData.centered}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styleAxiosgetData.centered}>
        <Text style={styleAxiosgetData.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      contentContainerStyle={styleAxiosgetData.container}
      data={users}
      renderItem={({ item }) => (
        <View style={styleAxiosgetData.item}>
          <Text style={styleAxiosgetData.name}>{item.name}</Text>
          <Text style={styleAxiosgetData.email}>{item.email}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default AxiosgetData;
