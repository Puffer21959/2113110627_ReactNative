import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const profileImg = require("../assets/pfp.jpg");

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImg} style={styles.profileImg} />
        <Text style={styles.profileName}>Pattrawut Buachuang</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

/*const styles = StyleSheet.create({
  container: { alignItems: "center", padding: 20, backgroundColor: "azure" },

  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 20,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 5,
    marginTop: 50,
  },

  profileImg: {
    borderRadius: 50,
    width: 100,
    height: 100,
    marginRight: 20,
  },

  profileName: {
    textTransform: "capitalize",
    fontWeight: "bold",
    color: "magenta",
    fontSize: 20,
  },
});*/
