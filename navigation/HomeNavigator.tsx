import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen from "../screens/profileScreen/ProfileScreen";

const Stack = createStackNavigator();

const HomeNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="RecentlyPlayed" component={ProfileScreen} />
		</Stack.Navigator>
	);
};

export default HomeNavigator;
