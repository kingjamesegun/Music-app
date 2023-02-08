import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigation from "./TabNavigation";
import HomeScreen from "../screens/homeScreen/HomeScreen";

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Tab" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default RootNavigation;
