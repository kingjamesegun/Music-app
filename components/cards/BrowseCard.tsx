import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

const BrowseCard = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/podcast.jpg")}
				style={styles.image}
			/>
			<Text style={styles.title}>BrowseCard</Text>
		</View>
	);
};

export default BrowseCard;

const styles = StyleSheet.create({
	container: {
		width: 250,
		height: 250,
		position: "relative",
		marginRight: 20,
	},
	image: {
		width: 250,
		height: 250,
		borderRadius: 20,
	},
	title: {
		position: "absolute",
		bottom: 25,
		left: 15,
		fontSize: 23,
		color: colors.white,
		fontWeight: "bold",
	},
});
