import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/homeScreen/HomeScreen";
import LibraryScreen from "../screens/libraryScreen/LibraryScreen";
import SearchScreen from "../screens/searchScreens/SearchScreen";
import { colors } from "../styles/colors";
import { Feather } from "@expo/vector-icons";
import { BlurView } from "expo-blur";

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
				component={HomeScreen}
				options={{
					tabBarLabel: "Home",
					tabBarIcon: ({ color, size }) => (
						<Feather name="home" color={colors.blueLight} size={size} />
					),
					tabBarActiveTintColor: colors.blueLight,
					tabBarInactiveTintColor: colors.brown,
					tabBarBackground: () => <BlurView tint="light" intensity={100} />,
				}}
			/>
			<BottomTab.Screen
				name="Search"
				component={SearchScreen}
				options={{
					tabBarLabel: "Search",
					tabBarIcon: ({ color, size }) => (
						<Feather name="search" color={colors.blueLight} size={size} />
					),
					tabBarActiveTintColor: colors.blueLight,
					tabBarInactiveTintColor: colors.brown,
				}}
			/>
			<BottomTab.Screen
				name="Library"
				component={LibraryScreen}
				options={{
					tabBarLabel: "Library",
					tabBarIcon: ({ color, size }) => (
						<Feather name="music" color={colors.blueLight} size={size} />
					),
					tabBarActiveTintColor: colors.blueLight,
					tabBarInactiveTintColor: colors.brown,
				}}
			/>
		</BottomTab.Navigator>
	);
};

export default TabNavigation;
