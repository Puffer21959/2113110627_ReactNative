import {
  View,
  Text,
  ListRenderItem,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  HeaderButton,
  HeaderButtons,
  Item,
} from "react-navigation-header-buttons";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { findAllProduct } from "../services/product-service";
import { Avatar, ListItem } from "@rneui/base";
import { FlatList } from "react-native-gesture-handler";
import DetailScreen from "./DetailScreen";

const MaterialHeaderButton = (props: any) => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={MaterialIcon} iconSize={23} {...props} />
);

const ProductScreen = (): React.JSX.Element => {
  const navigation = useNavigation<any>();

  const [product, setProduct] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Product",
      headerTitleAlign: "center",
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={MaterialHeaderButton}>
          <Item
            title="menu"
            iconName="menu"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findAllProduct();
      setProduct(response.data.data);
      //console.log(response.data.data);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProduct();
    }, [])
  );

  const _renderItem: ListRenderItem<any> = ({ item }) => {
    return (
      <>
        <ListItem
          bottomDivider
          onPress={() =>
            navigation.navigate("Detail", { id: item.id, title: item.title })
          }
        >
          <Avatar source={{ uri: item.picture }} />
          <ListItem.Content>
            <ListItem.Title>{item.title}</ListItem.Title>
            <ListItem.Subtitle>{item.detail}</ListItem.Subtitle>
          </ListItem.Content>
          <ListItem.Chevron />
          <ListItem.Subtitle
            style={{
              backgroundColor: "#50D145FF",
              borderRadius: 12.5,
              padding: 1.5,
              color: "white",
              paddingHorizontal: 7.5,
            }}
          >
            {item.view}
          </ListItem.Subtitle>
        </ListItem>
      </>
    );
  };

  return (
    <View>
      {/* <Text>ProductScreen</Text> */}
      {/*<Text>{JSON.stringify(product)}</Text>*/}
      <FlatList
        data={product}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={loading}
      />
    </View>
  );
};

export default ProductScreen;
