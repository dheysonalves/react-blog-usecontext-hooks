import React, { useContext, useState, useRef, useCallback } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import * as S from "./styles";
import { Context } from "../../context/BlogContext";
import BlogPost from "../../components/BlogPost/BlogPost";

const index = ({ navigation }) => {
  const { state, editBlogPost } = useContext(Context);
  const id = navigation.getParam("id");
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPost
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) => {
        editBlogPost(id, title, content, () => navigation.popToTop());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default index;
