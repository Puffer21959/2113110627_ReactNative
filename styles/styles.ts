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

const stylesPractice = StyleSheet.create({
  //app
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },

  //header
  /*header: {
    backgroundColor: "#AEC6CF",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },*/
  header: {
    padding: 16,
    backgroundColor: "yellow" /*#f8f8f8 */,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 100,
  },

  headerText: {
    /*fontSize: 20,
    fontWeight: "bold",
    color: "#fff",*/
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  subtitleText: {
    /*fontSize: 16,
    color: "#fff",*/
    fontSize: 16,
    color: "#666",
  },

  //content
  content: {
    /*flex: 1,
    alignItems: "center",
    justifyContent: "center",*/
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "azure" /*#f9f9f9 */,
    borderRadius: 8,
    marginVertical: 16,
    width: "90%",
  },
  text: {
    /*fontSize: 18,
    marginBottom: 20,*/
    fontSize: 16,
    marginBottom: 8,
    color: "#444",
  },

  //footer
  footer: {
    /*backgroundColor: "#f8f8f8",
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,*/
    padding: 16,
    backgroundColor: "#f8f8f8",
    width: "100%",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
  },
  footerText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },

  //input
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginTop: 16,
    paddingHorizontal: 8,
    width: "80%",
    borderRadius: 8,
    marginBottom: 500,
  },
});

export { styles, stylesPractice };
