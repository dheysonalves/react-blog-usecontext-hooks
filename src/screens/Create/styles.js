import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;

export const GroupItem = styled.View`
    flex-direction: column;
    justify-content: space-between;
`;

export const Label = styled.Text`
  color: #363636;
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const Input = styled.TextInput`
  border: 1px solid #363636;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 6px;
`;
