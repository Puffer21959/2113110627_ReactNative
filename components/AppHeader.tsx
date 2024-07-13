import { View, Text } from "react-native";
import React from "react";

type AppHeaderProps = {
  title: string;
  year?: number;/* '?' mean optional parameter may or may not have it*/
};

//use of prop
const AppHeader = ({ title, year }: AppHeaderProps): React.JSX.Element => {
  return (
    <View>
      <Text>
        {title} {year && year + 543}
    </Text>{/*if 'year' is sent we add 543 to year*/}
    </View>
  );
};

export default AppHeader;
