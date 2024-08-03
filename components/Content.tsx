import { View, Text, Alert, Button } from "react-native";
import React, { useState } from "react";
import { stylesPractice } from "../styles/styles";

/*type ContentProps = {
  name: string;
  message?: string;
};

const onClickMe = () => {
  Alert.alert("Hello", 'Input your fullname');
}; //prep function of <Button/>

const Content = ({ name, message }: ContentProps) => {
  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      <Button
        title="Click Me"
        //onPress={onClickMe} //call function in parameter
        onPress={() => {
        Alert.alert("Hi", 'Input your fullname');
        }}
        color={"magenta"}
      />
    </View>
  );
};*/

interface ContentProps {
  /*fullname: string;*/
  message: string;
  onButtonClick: () => void;
}

const Content = ({ onButtonClick, message }: ContentProps): React.JSX.Element => {
  /*const [displayFullname, setDisplayFullname] = useState("");

  const handleButtonClick = () => {
    setDisplayFullname(fullname);
    Alert.alert("Hello", `Input your fullname: ${fullname}`);
  };*/

  //() => Alert.alert("Hello", `Input your fullname: ${fullname}`)

  return (
    <View style={stylesPractice.content}>
      <Text style={stylesPractice.text}>{message}</Text>
      {/* <Text style={stylesPractice.text}>{displayFullname}</Text> */}
      <Button title="Click Me" onPress={onButtonClick} color={"magenta"} />
    </View>
  );
};

export default Content;

/*const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
  },
});*/
