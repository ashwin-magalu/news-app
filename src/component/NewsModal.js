import React, { useState } from "react";
import { Text, View, Dimensions, Modal, Share } from "react-native";
import {
  Container,
  Header,
  Content,
  Body,
  Left,
  Icon,
  Right,
  Title,
  Button,
} from "native-base";
import { WebView } from "react-native-webview";

const webViewHeight = Dimensions.get("window").height - 56;
const webViewWidth = Dimensions.get("window").width - 20;

const NewsModal = ({ showModal, articleData, onClose }) => {
  const { url } = articleData;

  const handleClose = () => {
    return onClose();
  };

  const handleShare = () => {
    const { url, title } = articleData;
    const message = `${title}\n\nRead more @${url}\n\nShared via Ashwin's News App`;
    return Share.share(
      { title, message, url: message },
      { dialogTitle: `Share ${title}` }
    );
  };

  return (
    <View>
      {url != undefined ? (
        <Modal
          animationType="slide"
          transparent
          visible={showModal}
          onRequestClose={handleClose}
        >
          <Container
            style={{ margin: 15, marginBottom: 0, backgroundColor: "white" }}
          >
            <Header style={{ backgroundColor: "#009387" }}>
              <Left>
                <Button onPress={handleClose} transparent>
                  <Icon name="close" style={{ color: "white", fontSize: 12 }} />
                </Button>
              </Left>
              <Body>
                <Title
                  children={articleData.title}
                  style={{ color: "white" }}
                ></Title>
              </Body>
              <Right>
                <Button onPress={handleShare} transparent>
                  <Icon name="share" style={{ color: "white", fontSize: 12 }} />
                </Button>
              </Right>
            </Header>
            <Content
              contentContainerStyle={{
                height: webViewHeight,
                width: webViewWidth,
              }}
            >
              <WebView
                source={{ uri: url }}
                style={{ flex: 1 }}
                onError={handleClose}
                startInLoadingState
                scalesPageToFit
              />
            </Content>
          </Container>
        </Modal>
      ) : (
        <View>
          <Text>Loading...</Text>
        </View>
      )}
    </View>
  );
};

export default NewsModal;
