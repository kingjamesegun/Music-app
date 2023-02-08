import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import { Ionicons } from "@expo/vector-icons";

const HeaderTab = () => {
	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.greetings}>Good Morning</Text>
			</View>
			<View style={styles.rightHeader}>
				<Ionicons
					name="md-notifications-outline"
					size={24}
					color={colors.white}
				/>
				<Image source={require("../../assets/me.jpg")} style={styles.image} />
			</View>
		</View>
	);
};

export default HeaderTab;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		paddingHorizontal: 15,
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
	},
});
