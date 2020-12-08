import {
  api_key,
  articles_url,
  category,
  country_code,
} from "../config/restConfig";
import * as Font from "expo-font";

export const getArticles = async (category = "general") => {
  try {
    await Font.loadAsync({
      "roboto-medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    });

    let _articles = await fetch(
      `${articles_url}?country=${country_code}&category=${category}`,
      {
        headers: {
          "X-API_KEY": api_key,
        },
      }
    );

    let result = await _articles.json();
    let finalResult = result.articles;
    return finalResult;
  } catch (error) {
    throw error.message;
  }
};
