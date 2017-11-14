import React from "react";
import { StatusBar } from "react-native";
import RootNavigator from './src/navigation';
import Home from "./src/features/home";

StatusBar.setHidden(true);


const App = () => <RootNavigator />;
export default App;
