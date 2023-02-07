import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import Input from "../../components/inputs/Input";

import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button/Button";

const SetPassword = () => {
	return (
		<View style={styles.container}>
			<View style={styles.backArrow}>
				<AntDesign name="arrowleft" size={18} color="white" />
			</View>
			<Text style={styles.title}>Set New Password</Text>
			<Text style={styles.desc}>
				Your new password must be differnet from the previous one(s).
			</Text>
			<View style={styles.inputs}>
				<Input label="Your Password" placeholder="*******" />
				<Input label="Retype your password" placeholder="*******" />
				<Text style={styles.forgot}>Forgot Password?</Text>
			</View>
			<View style={styles.btn}>
				<Button title="Next" />
			</View>
		</View>
	);
};

export default SetPassword;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryBlue,
		paddingHorizontal: 20,
		paddingTop: 70,
		position: "relative",
	},
	username: {
		fontWeight: "bold",
	},
	anotherUser: {
		textDecorationLine: "underline",
	},
	title: {
		fontSize: 40,
		fontWeight: "bold",
		color: colors.white,
	},
	desc: {
		color: "#cccccc",
		fontSize: 16,
		marginTop: 20,
	},
	inputs: {
		marginTop: 30,
	},
	btn: {
		position: "absolute",
		top: 800,
		width: "100%",
		marginHorizontal: 20,
	},
	forgot: {
		fontSize: 16,
		color: colors.white,
		marginBottom: 20,
		opacity: 0.5,
	},
	backArrow: {
		borderWidth: 1,
		borderColor: colors.white,
		width: 20,
		marginBottom: 50,
		borderRadius: 10,
	},
});
