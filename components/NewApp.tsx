import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { stylesNewApp } from "../styles/styles";

interface Article {
  title: string;
  publishedAt: string;
  description: string;
  url: string;
}

const NewApp = (): React.JSX.Element => {
  //create state for containing data and loading status
  const [data, setData] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const API_KEY = "ac790e083cfd43eeb42c9f14ea1ba47e"; // ใส่ API Key ของนักศึกษาที่นี่
    const URL = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ac790e083cfd43eeb42c9f14ea1ba47e`;

    //console.log("test");
    //fetch json data into variable data
    fetch(URL)
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

  const _renderItem = ({ item }: { item: Article }) => (
    <TouchableOpacity style={stylesNewApp.card}>
      <Text style={stylesNewApp.headline}>{item.title}</Text>
      <Text style={stylesNewApp.description}>{item.description}</Text>
      <Text style={stylesNewApp.date}>
        {new Date(item.publishedAt).toLocaleDateString()}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={stylesNewApp.container}>
      <Text>TESTasdasd</Text>
      {loading ? ( //loading spinning thing
        <ActivityIndicator size="large" color="red" />
      ) : (
        //if data is loaded show flatlist
        <FlatList
          data={data}
          renderItem={_renderItem}
          keyExtractor={(item) => item.url.toString()}
        ></FlatList>
      )}
    </View>
  );
};

export default NewApp;
