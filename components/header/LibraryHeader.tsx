import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { AntDesign } from "@expo/vector-icons";

const LibraryHeader = () => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greetings}>Library</Text>
			</View>
			<View style={styles.rightHeader}>
				<AntDesign name="pluscircleo" size={24} color={colors.white} />
				<Image source={require("../../assets/me.jpg")} style={styles.image} />
			</View>
		</View>
	);
};

export default LibraryHeader;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		paddingVertical: 10,
		justifyContent: "space-between",
		flexDirection: "row",
		alignItems: "center",
	},
	greetings: {
		color: colors.white,
		fontSize: 25,
		fontWeight: "bold",
	},
	image: {
		width: 30,
		height: 30,
		borderRadius: 15,
		marginLeft: 10,
	},
	rightHeader: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
});
