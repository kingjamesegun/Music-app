import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

const CategoryCard = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/podcast.jpg")}
				style={styles.image}
			/>
			<Text style={styles.text}>Podcast</Text>
		</View>
	);
};

export default CategoryCard;

const styles = StyleSheet.create({
	container: {
		width: " 50%",
		position: "relative",
		paddingHorizontal: 10,
		marginVertical: 10,
	},
	image: {
		height: 120,
		width: "100%",
		borderRadius: 5,
	},
	text: {
		fontSize: 18,
		color: colors.white,
		fontWeight: "bold",
		position: "absolute",
		bottom: 10,
		width: "100%",
		left: 15,
	},
});
