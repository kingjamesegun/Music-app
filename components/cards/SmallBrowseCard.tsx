import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

const SmallBrowseCard = () => {
	return (
		<View style={styles.container}>
			<Image source={require("../../assets/me.jpg")} style={styles.image} />
			<Text style={styles.text}>SmallBrowseCard</Text>
		</View>
	);
};

export default SmallBrowseCard;

const styles = StyleSheet.create({
	container: {
		width: 110,
		height: 110,
		marginBottom: 20,
		position: "relative",
	},
	image: {
		width: 110,
		height: 110,
		borderRadius: 10,
	},
	text: {
		color: colors.white,
		position: "absolute",
		fontSize: 14,
		fontWeight: "500",
		width: "60%",
		bottom: 15,
		left: 5,
	},
});
