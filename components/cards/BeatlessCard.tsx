import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

const BeatlessCard = () => {
	return (
		<TouchableOpacity style={styles.container}>
			<Image
				source={require("../../assets/me.jpg")}
				style={styles.coverImage}
			/>
			<Text style={styles.title}>90 Anthem - Old School </Text>
		</TouchableOpacity>
	);
};

export default BeatlessCard;

const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		width: 90,
		alignItems: "center",
		marginRight: 10,
	},
	coverImage: {
		height: 90,
		width: 90,
		borderRadius: 10,
		marginBottom: 10,
	},
	title: {
		color: colors.white,
		fontSize: 12,
		fontWeight: "400",
		textAlign: "center",
	},
});
