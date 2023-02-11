import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import LibraryScreen from "../screens/libraryScreen/LibraryScreen";
import SearchScreen from "../screens/searchScreens/SearchScreen";
import { colors } from "../styles/colors";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import HomeNavigator from "./HomeNavigator";
import { Text } from "react-native";

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
	return (
		<BottomTab.Navigator
			initialRouteName="Home"
			screenOptions={{
				tabBarActiveTintColor: colors.brown,
				tabBarStyle: {
					height: 90,
					backgroundColor: colors.primaryBlue,
				},
				headerShown: false,
			}}
		>
			<BottomTab.Screen
				name="Home"
				component={HomeNavigator}
				options={{
					tabBarLabel: ({ focused, color }) => (
						<Text style={{ color: focused ? colors.brown : colors.gray }}>
							Home
						</Text>
					),
					tabBarIcon: ({ color, focused, size }) => (
						<Feather
							name="home"
							color={focused ? colors.brown : colors.blueLight}
							size={size}
						/>
					),
					tabBarBackground: () => <BlurView tint="light" intensity={100} />,
				}}
			/>
			<BottomTab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarLabel: ({ focused, color }) => (
						<Text style={{ color: focused ? colors.brown : colors.gray }}>
							Search
						</Text>
					),
					tabBarIcon: ({ color, focused, size }) => (
						<Feather
							name="search"
							color={focused ? colors.brown : colors.blueLight}
							size={size}
						/>
					),
				}}
			/>
			<BottomTab.Screen
				name="Library"
				component={LibraryScreen}
				options={{
					tabBarLabel: ({ focused, color }) => (
						<Text style={{ color: focused ? colors.brown : colors.gray }}>
							Library
						</Text>
					),
					tabBarIcon: ({ color, focused, size }) => (
						<Feather
							name="music"
							color={focused ? colors.brown : colors.gray}
							size={size}
						/>
					),
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default TabNavigation;
