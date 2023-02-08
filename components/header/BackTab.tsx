import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const BackTab = () => {
	return (
		<View style={styles.container}>
			<Ionicons
				name="arrow-back-outline"
				size={16}
				color={colors.white}
				style={styles.backIcon}
			/>
		</View>
	);
};

export default BackTab;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	backIcon: {
		borderColor: colors.white,
		borderWidth: 2,
		borderRadius: 10,
		padding: 2,
	},
});
