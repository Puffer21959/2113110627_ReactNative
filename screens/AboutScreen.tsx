import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  ImageBackground,
} from "react-native";
import React from "react";

const AboutScreen = ({ route }: any): React.JSX.Element => {
  const { companyName, companyId } = route.params;

  return (
    <ImageBackground
      source={require("../assets/images/bg.png")}
      style={styles.bgImage}
    >
      <SafeAreaView>
        <Image
          source={require("../assets/images/building.png")}
          resizeMode="contain"
          style={styles.myImage}
        />

        <Text>
          {companyName} {companyId}
        </Text>

        <Image
          source={{ uri: "https://codingthailand.com/site/img/camera.png" }}
          style={styles.myImageNetwork}
        ></Image>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  myImage: {
    width: "100%",
    height: 200,
    marginTop: 20,
  },
  myImageNetwork: {
    width: 50,
    height: 50,
    marginTop: 10,
  },
  bgImage: {
    width: "100%",
    height: "100%",
  },
});
