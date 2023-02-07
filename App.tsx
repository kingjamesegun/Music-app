import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import Splashscreen from "./screens/onboarding/Splashscreen";
import { colors } from "./styles/colors";
import SplashScreenOne from "./screens/onboarding/SplashScreenOne";
import SignUpScreen from "./screens/authentication/SignUpScreen";
import ForgetPassword from "./screens/authentication/ForgetPassword";
import SetPassword from "./screens/authentication/SetPassword";
import SuccessScreens from "./components/successScreens/SuccessScreens";

export default function App() {
	return (
		<NavigationContainer>
			{/* <StatusBar
				StatusBarStyle="light-content"
				hidden={false}
				backgroundColor={colors.primaryBlue}
				translucent={true}
			/> */}
			<SuccessScreens />
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
