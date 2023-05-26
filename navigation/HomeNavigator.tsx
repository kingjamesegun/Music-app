import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";
import HomeScreen from "../screens/homeScreen/HomeScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="RecentlyPlayed" component={HomeScreen} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;
