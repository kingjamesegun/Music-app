import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import Button from "../../components/button/Button";

const SplashScreenOne = () => {
	return (
		<View style={styles.container}>
			<View style={styles.image}></View>
			<View style={styles.details}>
				<View style={styles.dots}>
					<View style={styles.dot}></View>
					<View style={styles.dot}></View>
					<View style={styles.dot}></View>
				</View>
				<Text style={styles.title}>Melodius. </Text>
				<Text style={styles.title}>The capital of music.</Text>
				<View style={styles.buttons}>
					<Button title="Continue with email" />
				</View>
				<Text style={styles.tos}>
					By continuig you agree to out Terms of Services & Privacy Policy
				</Text>
			</View>
		</View>
	);
};

export default SplashScreenOne;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
		flex: 1,
		alignItems: "center",
	},
	dots: {
		display: "flex",
		flexDirection: "row",
		marginBottom: 20,
	},
	image: {
		height: 400,
		width: 400,
		backgroundColor: colors.pink,
		display: "flex",
		alignContent: "center",
		borderRadius: 200,
		marginTop: 50,
	},
	dot: {
		height: 10,
		width: 10,
		borderRadius: 50,
		backgroundColor: colors.pink,
		marginRight: 5,
		color: colors.pink,
	},
	title: {
		color: colors.white,
		fontSize: 40,
		fontWeight: "bold",
	},
	details: {
		marginTop: "25%",
		paddingHorizontal: 20,
	},
	buttons: {
		marginTop: 60,
	},
	tos: {
		color: colors.white,
		fontSize: 14,
		textAlign: "center",
		marginTop: 20,
	},
});
