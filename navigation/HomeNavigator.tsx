import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import RecentlyPlayed from "../screens/homeScreen/RecentlyPlayed";
import { StatusBar } from "expo-status-bar";
import SingleSong from "../screens/homeScreen/SingleSong";

const Stack = createStackNavigator();

const HomeNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="RecentlyPlayed" component={SingleSong} />

			{/* <Stack.Screen name="HomeMain" component={HomeScreen} /> */}
		</Stack.Navigator>
	);
};

export default HomeNavigator;
