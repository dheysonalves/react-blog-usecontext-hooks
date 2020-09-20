import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import IndexScreen from "./src/screens/Index";
import DetailScreen from './src/screens/Details';
import CreateScreen from './src/screens/Create';
import EditScreen from './src/screens/Edit';
import { Provider } from "./src/context/BlogContext";
import { TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons"; 

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Details: DetailScreen,
    Create: CreateScreen,
    Edit: EditScreen,
  },
  {
    initialRouteName: "Index",
    defaultNavigationOptions: {
      title: "Home",
      headerTintColor: "#353535",
      headerTitleStyle: {
        fontWeight: "bold",
        textAlign: "center",
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
