import styled from "styled-components/native";

export const Wrapper = styled.View`
  padding: 15px;
  flex: 1;
  background-color: #F9F9F9;
`;

export const Container = styled.View`
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  margin: 10px;
  padding: 30px;
  border: 2px solid #36363689;
  border-radius: 5px;
  background-color: #F9F9F9;
`;

export const TitleText = styled.Text`
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.05px;
  color: #d74e09;
`;

export const IconsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 18%;
`;

export const CardHeader = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 100%;
  margin-bottom: 10px;
`;

export const DataText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 0.05px;
`;

export const PostTitle = styled.Text`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05px;
  color: #d74e09;
`;
