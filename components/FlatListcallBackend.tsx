import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { stylesFlatlistBackend } from "../styles/styles";

interface User {
  id: number;
  name: string;
  email: string;
}

const FlatListcallBackend = (): React.JSX.Element => {
  //create state for containing data and loading status
  const [data, setData] = useState<User[]>([]); //data type User[]
  const [loading, setLoading] = useState(true);

  //useEffect for API fetching when component is mount (run for the first time)
  useEffect(() => {
    //console.log("test");
    //fetch json data into variable data
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  //function _renderItem for FlatList
  const _renderItem = ({ item }: { item: User }) => (
    <View style={stylesFlatlistBackend.item}>
      <Text style={stylesFlatlistBackend.name}>{item.name}</Text>
      <Text style={stylesFlatlistBackend.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={stylesFlatlistBackend.container}>
      {loading ? ( //loading spinning thing
        <ActivityIndicator size="large" color="red" />
      ) : (
        //if data is loaded show flatlist
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.id.toString()}
        ></FlatList>
      )}
    </View>
  );
};

export default FlatListcallBackend;

const styles = StyleSheet.create({});
