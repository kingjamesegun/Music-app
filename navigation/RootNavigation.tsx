import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigation";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import ProfileNavigator from "./ProfileNavigator";

const Stack = createStackNavigator();

const RootNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="Tab" component={TabNavigator} />
			<Stack.Screen name="Profile" component={ProfileNavigator} />
		</Stack.Navigator>
	);
};

export default RootNavigation;
