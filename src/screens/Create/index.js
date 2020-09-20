import React, { useContext, useState, useRef, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import * as S from "./styles";
import { Context } from "../../context/BlogContext";
import BlogPost from "../../components/BlogPost/BlogPost";

const index = ({ navigation }) => {
  const { addBlogPost } = useContext(Context);

  const submitData = useCallback(() => {
    return addBlogPost(title, content, () => {
      navigation.navigate("Index");
    });
  }, []);

  return (
    <BlogPost
      onSubmit={(title, content) => {
        addBlogPost(title, content, () => {
          navigation.navigate("Index");
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default index;
