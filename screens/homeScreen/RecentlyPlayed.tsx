import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import HeaderTab from "../../components/header/HeaderTab";

const RecentlyPlayed = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<HeaderTab />
			</View>
		</SafeAreaView>
	);
};

export default RecentlyPlayed;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		flex: 1,
		backgroundColor: colors.primaryBlue,
	},
	details: {
		paddingHorizontal: 20,
	},
	welcomeTextContainer: {
		marginTop: 20,
	},
	welcomeText: {
		color: colors.white,
		fontSize: 40,
		fontWeight: "bold",
	},
	throwbackText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 15,
	},
	scroll: {
		marginVertical: 20,
	},
});
