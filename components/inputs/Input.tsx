import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { colors } from "../../styles/colors";

type InputProps = {
	label: string;
	placeholder: string;
	keyboardType?: string;
};

const Input = ({ label, placeholder, keyboardType }: InputProps) => {
	const [value, setvalue] = useState("");
	return (
		<View style={styles.inputField}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				value={value}
				onChange={() => {}}
				placeholder={placeholder}
				placeholderTextColor={colors.white}
				keyboardType="numeric"
			/>
		</View>
	);
};

export default Input;

const styles = StyleSheet.create({
	inputField: {
		marginVertical: 20,
	},
	label: {
		textTransform: "uppercase",
		color: colors.white,
		fontWeight: "700",
		opacity: 0.5,
	},
	input: {
		paddingVertical: 20,
		borderColor: "#cccccc",
		borderBottomWidth: 0.6,
		width: "100%",
		color: colors.white,
		fontSize: 20,
		fontWeight: "bold",
	},
});
