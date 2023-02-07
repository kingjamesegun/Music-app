import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";

type ButtonProps = {
	title: string;
};

const Button = ({ title }: ButtonProps) => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
};

export default Button;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.pink,
		borderRadius: 5,
	},
	title: {
		fontSize: 16,
		paddingVertical: 18,
		color: colors.white,
		textAlign: "center",
		fontWeight: "bold",
	},
});
