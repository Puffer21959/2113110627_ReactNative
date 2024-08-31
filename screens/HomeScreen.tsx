import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import Icon from 'react-native-vector-icons';

const HomeScreen = ({ navigation, route }: any): React.JSX.Element => {
  const gotoAbout = () => {
    navigation.navigate("About", {
      companyName: "Thai-Nichi Institute of Technology",
      companyId: 100,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>HomeScreen</Text>
      <Button title="about us" onPress={gotoAbout} />
      <View style={styles.postContainer}>
        <Button
          title="create post"
          onPress={() => navigation.navigate("Post")}
        />
        <Text style={styles.postText}>
          Post: <Text>{route.params?.post}</Text>{/*the '?' is if post is null */}
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
  },
  postContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  postText: {
    margin: 10,
    fontSize: 16,
  },
  postContent: {
    color: "blue", // เปลี่ยนสีข้อความที่ถูกส่งกลับมา
    fontWeight: "bold",
  },
});
