import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

const ProfileDropdown = () => {
	return (
		<View style={styles.container}>
			<View style={styles.dropdown}>
				<Text>Settings</Text>
				<MaterialIcons name="navigate-next" size={24} color={colors.white} />
			</View>
		</View>
	);
};

export default ProfileDropdown;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
	},
	dropdown: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
