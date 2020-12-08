import { Container, Content, List } from "native-base";
import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  View,
  ActivityIndicator,
  Text,
  Modal,
} from "react-native";
import { getArticles } from "../service/news";
import NewsDataItem from "../component/newsDataItem";
import NewsModal from "../component/NewsModal";

const tabThree = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalArticleData, setModalArticleData] = useState({});

  useEffect(() => {
    Alert.alert("UseEffect Loaded");
    getArticles("technology").then(
      (_data) => {
        setData(_data);
        setIsLoading(false);
        Alert.alert("Data: ", data);
      },
      (error) => {
        Alert.alert("Error", error.message);
      }
    );

    return () => {
      //
    };
  }, []);

  const handleitemDataOnPress = (articleData) => {
    setModalVisible(true);
    setModalArticleData(articleData);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setModalArticleData({});
  };

  return (
    <Container>
      {isLoading ? (
        <Content>
          <List
            dataArray={data}
            renderRow={(item) => (
              <NewsDataItem onPress={handleitemDataOnPress} data={item} />
            )}
          />
        </Content>
      ) : (
        <View>
          <ActivityIndicator animating={isLoading} />
          <Text style={{ marginTop: 10 }}>Please wait...</Text>
        </View>
      )}
      <NewsModal
        showModal={modalVisible}
        articleData={modalArticleData}
        onClose={handleModalClose}
      />
    </Container>
  );
};

export default tabThree;
