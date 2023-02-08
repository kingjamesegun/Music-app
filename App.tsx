import { StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./navigation/TabNavigation";
import RootNavigation from "./navigation/RootNavigation";
import TabNavigation from "./navigation/TabNavigation";

export default function App() {
	return (
		<NavigationContainer>
			<RootNavigation />
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
