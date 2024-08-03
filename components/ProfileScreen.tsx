import { Button, Text, View, Image } from "react-native";
import React, { useState } from "react";
import { stylesProfile } from "../styles/styles";
import Login from "./Login";

const ProfileScreen = (): React.JSX.Element => {
  const pfp1 = require("../assets/pfp.jpg");
  const pfp2 = require("../assets/pfp2.jpg");
  const [profileImg, setprofileImg] = useState(require("../assets/pfp.jpg"));
  const [name, setName] = useState("Pattrawut Buachuang");
  let check = true;

  const handleChangeName = () => {
    setName(name == "Pattrawut Buachuang" ? "New Name" : "Pattrawut Buachuang");
  };

  const handleChangeImg = () => {
    setprofileImg(profileImg == pfp1 ? pfp2 : pfp1);
  };

  return (
    <View style={stylesProfile.container}>
      <View style={stylesProfile.profileContainer}>
        <Image source={profileImg} style={stylesProfile.profileImg} />
        <View style={{ width: 200 }}>
          <Text style={stylesProfile.profileName}>{name}</Text>

          <Button title="change name" onPress={handleChangeName} />
          <Text>{"\n"}</Text>
          <Button title="change image" onPress={handleChangeImg} />
        </View>
      </View>

      <Login />
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
