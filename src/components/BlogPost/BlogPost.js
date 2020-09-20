import React, { useState, useCallback, useRef } from "react";
import { View, Button } from "react-native";

// import { Container } from './styles';
import * as S from "./styles";

const BlogPost = ( {initialValues, onSubmit}) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  const titleRef = useRef();
  const contentRef = useRef();

  const setTitleFocus = useCallback(() => {
    return titleRef.current.focus();
  }, [titleRef]);

  const setContentFocus = useCallback(() => {
    return contentRef.current.focus();
  }, [contentRef]);


  return (
    <S.Container>
      <S.GroupItem>
        <S.Label onPress={setTitleFocus}>Title:</S.Label>
        <S.Input
          value={title}
          onChangeText={(text) => setTitle(text)}
          ref={titleRef}
        />
      </S.GroupItem>
      <S.GroupItem>
        <S.Label onPress={setContentFocus}>Content:</S.Label>
        <S.Input
          value={content}
          onChangeText={(text) => setContent(text)}
          ref={contentRef}
        />
      </S.GroupItem>
      <Button title="Submit" onPress={() => onSubmit(title, content)} />
    </S.Container>
  );
};

BlogPost.defaultProps = {
  initialValues: {
    title: "",
    content: "",
  },
};

export default BlogPost;
