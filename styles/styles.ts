import { StyleSheet } from "react-native";

const stylesProfile = StyleSheet.create({
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

const stylesLogin = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    marginTop: 50,
    backgroundColor: "#ffffff", // ต้งัค่าสีพ้ืนหลงัเป็นสีขาว
    borderRadius: 10, // เพิ่มความมนให้กบัขอบคอนเทนเนอร์
    elevation: 3, // เพิ่มเงาให้กบัคอนเทนเนอร์(เฉพาะ Android)
    width: "100%", // ต้งัความกวา้งของ container ให้เต็มหน้าจอ
  },
  input: {
    height: 45, // เพิ่มความสูงของ TextInput
    borderColor: "gray", // เปลี่ยนสีขอบเป็นสีเทาอ่อน
    borderWidth: 1,
    borderRadius: 8, // เพิ่มความมนให้กบัขอบ TextInput
    marginBottom: 15, // เพิ่มระยะห่างดา้นล่างระหวา่ ง TextInput
    paddingHorizontal: 15, // เพิ่มระยะห่างภายใน TextInput
    backgroundColor: "#f9f9f9", // ต้งัค่าสีพ้ืนหลงัของ TextInput
  },
});

const stylesFlatlist = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    //backgroundColor: "#f9c2ff",
    backgroundColor: "green",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  email: {
    fontSize: 14,
  },
});

const stylesFlatlistBackend = StyleSheet.create({
  container: {
    justifyContent: "center",
    paddingTop: 50,
  },
  item: {
    //backgroundColor: "#f9c2ff",
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
});

export {
  stylesProfile,
  stylesPractice,
  stylesLogin,
  stylesFlatlist,
  stylesFlatlistBackend,
};
