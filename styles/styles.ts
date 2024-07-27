import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
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
  });

  export default styles;