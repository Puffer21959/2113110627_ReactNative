import {
  View,
  Text,
  ListRenderItem,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { useCallback, useLayoutEffect, useState } from "react";
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { findProductbyId } from "../services/product-service";
import { ListItem, Tile } from "@rneui/base";
import { FlatList } from "react-native-gesture-handler";

const DetailScreen = (): React.JSX.Element => {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const [detail, setDetail] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation, route]);

  const getProduct = async () => {
    try {
      setLoading(true);
      const response = await findProductbyId(route.params.id);
      setDetail(response.data.data);
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
        <Tile
          imageSrc={{
            //uri: "https://www.mediastorehouse.com/p/191/sunset-porthmeor-beach-st-ives-cornwall-11702500.jpg.webp",
            uri: "data:image/jpeg;base64,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",
            cache: "force-cache",
          }}
          title={item.ch_title}
          titleStyle={styles.titleStyle}
          containerStyle={styles.tileContainer}
          caption={item.ch_dateadd}
          captionStyle={styles.captionStyle}
          featured
          activeOpacity={0.9}
          width={Dimensions.get("screen").width - 20} // ลบขอบเล็กน้อยทั้งสองข้าง
        />
        {/* <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.titleStyle}>
              {item.ch_title}
            </ListItem.Title>
            <ListItem.Subtitle style={styles.captionStyle}>
              {item.ch_dateadd}
            </ListItem.Subtitle>
          </ListItem.Content>
        </ListItem> */}
      </>
    );
  };

  return (
    <View>
      {/* <Text>DetailScreen</Text>
      <Text>{JSON.stringify(detail)}</Text> */}
      <FlatList
        data={detail}
        renderItem={_renderItem}
        keyExtractor={(item: any) => item.ch_id.toString()}
        onRefresh={async () => {
          await getProduct();
        }}
        refreshing={loading}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0", // สีพื้นหลัง
  },
  listContent: {
    paddingHorizontal: 10, // การเว้นวรรคขอบซ้ายและขวาเท่ากัน
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "blue", // สีขาวส าหรับชื่อ
  },
  tileContainer: {
    borderRadius: 10, //ก าหนดให้มุมของ container มีความโค้งมน
    overflow: "hidden", //ก าหนดให้เนื้อหาที่อาจล้นออกจากขอบของ container ไม่แสดงผล
    marginBottom: 10, //ก าหนดระยะห่างจากขอบล่างของ container ไปยัง element ต่อไปที่อยู่ด้านล่าง
    elevation: 5, // เงาส าหรับ Android
    shadowOffset: { width: 0, height: 2 }, //ก าหนดต าแหน่งของเงาที่แสดงผล
    shadowOpacity: 0.25, //ก าหนดระดับความโปร่งแสงของเงา
    shadowRadius: 3.84, //ก าหนดรัศมีของการกระจายตัวของเงา
    opacity: 0.5, // ความโปร่งใสของภาพ , ค่าน้อยจะโปร่งใสมาก
  },
  captionStyle: {
    fontSize: 14,
    color: "blue", // สีขาวส าหรับวันที่
  },
});
