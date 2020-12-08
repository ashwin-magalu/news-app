import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  Left,
  Body,
  Title,
  Right,
} from "native-base";
import Tab1 from "../tabs/tabOne";
import Tab2 from "../tabs/tabTwo";
import Tab3 from "../tabs/tabThree";

const TabScreen = () => {
  return (
    <SafeAreaView>
      <Container>
        <Header hasTabs style={{ backgroundColor: "#009387", marginTop: 5 }}>
          <Left />
          <Body>
            <Title style={{ color: "white" }}>News App</Title>
          </Body>
          <Right />
        </Header>
        <Tabs tabBarUnderlineStyle={{ backgroundColor: "white" }}>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="General"
          >
            <Tab1 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Business"
          >
            <Tab2 />
          </Tab>
          <Tab
            tabStyle={{ backgroundColor: "#009387" }}
            activeTabStyle={{ backgroundColor: "#009387" }}
            textStyle={{ color: "white" }}
            activeTextStyle={{ color: "white" }}
            heading="Technology"
          >
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    </SafeAreaView>
  );
};

export default TabScreen;

/* 
newsapi.org
API_KEY = "dc7df25992a44671ade424b4ce975a8d"
*/
