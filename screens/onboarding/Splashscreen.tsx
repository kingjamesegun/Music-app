import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

const Splashscreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.logoText}>melodius</Text>
		</View>
	);
};

export default Splashscreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.primaryBlue,
	},
	logoText: {
		color: colors.pink,
		fontWeight: "bold",
		fontSize: 24,
	},
});
