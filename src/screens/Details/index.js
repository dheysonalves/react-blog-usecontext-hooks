import React, { useContext, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Context } from "../../context/BlogContext";
import { FontAwesome5, Feather } from "@expo/vector-icons";

import * as S from './styles';

const index = ({ navigation }) => {
  const { state } = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam("id"));

  return (
    <S.Container>
      <S.Title>{blogPost.title}</S.Title>
      <S.Description>{blogPost.content}</S.Description>
    </S.Container>
  );
};

index.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
        style={{ marginRight: 10 }}
      >
        <Feather name="edit" size={30} color="#D74E09" />
      </TouchableOpacity>
    ),
    title: "Article details",
  };
};

export default index;

const styles = StyleSheet.create({});
