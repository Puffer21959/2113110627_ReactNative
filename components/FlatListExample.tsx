import React from "react";
import { View, Text, FlatList } from "react-native";
import { stylesFlatlist } from "../styles/styles";

interface UserItem {
  id: string;
  name: string;
  email: string;
}

const FlatListExample = (): React.JSX.Element => {
  const user: UserItem[] = [
    { id: "1", name: "Alice", email: "alice@example.com" },
    { id: "2", name: "Bob", email: "bob@example.com" },
    { id: "3", name: "Cara", email: "cara@example.com" },
  ];

  //Create _renderItem function
  //if arrow function dont have return use "()" instead of "{}"
  const _renderItem = ({ item }: { item: UserItem }) => (
    <View style={stylesFlatlist.item}>
      <Text style={stylesFlatlist.name}>{item.name}</Text>
      <Text style={stylesFlatlist.email}>{item.email}</Text>
    </View>
  );

  return (
    <View style={stylesFlatlist.container}>
      <FlatList
        data={user} //กำหนดข้อมูลให้ FlatList
        renderItem={_renderItem} //Create function _renderItem
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
};

export default FlatListExample;
