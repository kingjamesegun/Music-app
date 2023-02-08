import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

const ThrowbackCard = () => {
	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/me.jpg")}
				style={styles.coverImage}
			/>
			<View style={styles.texts}>
				<Text style={styles.title}>90 Anthem </Text>
				<Text style={styles.desc}>The songs rocked the 90s....</Text>
			</View>
		</View>
	);
};

export default ThrowbackCard;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blueLight,
		paddingVertical: 25,
		borderRadius: 15,
		justifyContent: "center",
		width: 160,
		alignItems: "center",
		marginRight: 10,
	},
	coverImage: {
		height: 130,
		width: 130,
		borderRadius: 65,
	},
	texts: {
		marginTop: 15,
		paddingHorizontal: 10,
	},
	title: {
		color: colors.white,
		fontSize: 16,
		fontWeight: "bold",
	},
	desc: {
		color: colors.white,
		opacity: 0.7,
		fontSize: 14,
		marginTop: 5,
	},
});
