import { Button, Text, View, Image } from "react-native";
import React, { useState } from "react";
import styles from "../styles/styles";

const ProfileScreen = (): React.JSX.Element => {
  const [profileImg, setprofileImg] = useState(require("../assets/pfp.jpg"));
  const [name, setName] = useState("Pattrawut Buachuang");
  let check = true;

  const handleChangeName = () => {
    setName(name == "Pattrawut Buachuang" ? "New Name" : "Pattrawut Buachuang");
  };

  const handleChangeImg = () => {
    setprofileImg(require("../assets/pfp2.jpg"));
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image source={profileImg} style={styles.profileImg} />
        <View>
          <Text style={styles.profileName}>{name}</Text>

          <View style={{ minWidth: "50%" }}>
            <Button title="change name" onPress={handleChangeName} />
            <Text>{"\n"}</Text>
            <Button title="change image" onPress={handleChangeImg} />
          </View>
        </View>
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
