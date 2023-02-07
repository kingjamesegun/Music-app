import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import Input from "../../components/inputs/Input";

import { AntDesign } from "@expo/vector-icons";
import Button from "../../components/button/Button";

const SuccessScreens = () => {
	return (
		<View style={styles.container}>
			<View style={styles.backArrow}>
				<AntDesign name="arrowleft" size={18} color="white" />
			</View>
			<View style={styles.message}>
				<Image
					source={require("../../assets/success.png")}
					style={styles.image}
				/>
				<Text style={styles.title}>Congratulations</Text>
				<Text style={styles.desc}>
					Your new password has been changes successfully. Update your password
					periodically and secure your account.
				</Text>
			</View>
			<View style={styles.btn}>
				<Button title="Login" />
			</View>
		</View>
	);
};

export default SuccessScreens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryBlue,
		paddingHorizontal: 20,
		paddingTop: 70,
		position: "relative",
	},
	message: {
		display: "flex",
		alignItems: "center",
		alignContent: "center",
	},
	image: {
		width: 300,
		height: 300,
		marginBottom: 30,
	},
	title: {
		fontSize: 30,
		fontWeight: "bold",
		color: colors.white,
	},
	desc: {
		color: "#cccccc",
		fontSize: 16,
		marginTop: 15,
		textAlign: "center",
	},
	btn: {
		position: "absolute",
		top: 800,
		width: "100%",
		marginHorizontal: 20,
	},
	backArrow: {
		borderWidth: 1,
		borderColor: colors.white,
		width: 20,
		marginBottom: 50,
		borderRadius: 10,
	},
});
