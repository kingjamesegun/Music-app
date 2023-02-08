import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import RecentlyPlayed from "../screens/homeScreen/RecentlyPlayed";

const Stack = createStackNavigator();

const HomeNavigator = () => {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="RecentlyPlayed" component={RecentlyPlayed} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;
