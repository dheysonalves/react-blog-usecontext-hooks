import styled from 'styled-components/native';

export const Container = styled.View`
	display: flex;
	flex-direction: column;
	padding: 20px;
	background-color: #fff;
	height: 100%;
`;

export const Title = styled.Text`
	color: #D74E09;
	font-style: normal;
	font-weight: 600;
	font-size: 24px;
	line-height: 24px;
	display: flex;
	align-items: center;
`;

export const Description = styled.Text`
	font-style: normal;
	font-weight: normal;
	font-size: 18px;
	line-height: 21px;
	margin-top: 8px;
	color: #000000;
`;
