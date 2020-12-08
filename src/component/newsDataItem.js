import { Body, Button, Left, ListItem, Right, Thumbnail } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import NewsTime from "./newsTime";

const NewsDataItem = ({ data, onPress }) => {
  const [eachData, setEachData] = useState(data);

  const handlePress = () => {
    const { url, title } = data;
    onPress({ url, title });
  };

  return (
    <ListItem thumbnail>
      <Left>
        <Thumbnail
          circular
          source={{
            uri: eachData?.urlToImage || "",
          }}
        />
      </Left>
      <Body>
        <Text numberOfLines={2}>{eachData?.title}</Text>
        <Text note numberOfLines={3}>
          {eachData?.description}
        </Text>
        <View
          style={{ flex: 1, flexDirection: "row", marginTop: 8, marginLeft: 8 }}
        >
          <Text note>{data.source.name}</Text>
          <NewsTime time={data.publishedAt} />
        </View>
      </Body>
      <Right>
        <Button transparent onPress={handlePress}>
          <Text>View</Text>
        </Button>
      </Right>
    </ListItem>
  );
};

export default NewsDataItem;

const styles = StyleSheet.create({});
