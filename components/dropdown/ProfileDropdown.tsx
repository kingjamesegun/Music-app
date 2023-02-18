import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

type ProfileDropdownProps = {
	label: string;
};

const ProfileDropdown = ({ label }: ProfileDropdownProps) => {
	const [open, setOpen] = useState(false);
	const handlePress = () => {
		setOpen((prev: boolean) => !prev);
	};
	return (
		<View style={styles.container}>
			<View style={styles.dropdown}>
				<Text style={styles.label}>{label}</Text>
				{!open ? (
					<MaterialIcons
						onPress={handlePress}
						name="navigate-next"
						size={24}
						color={colors.white}
					/>
				) : (
					<MaterialIcons
						onPress={handlePress}
						name="keyboard-arrow-down"
						size={24}
						color={colors.white}
					/>
				)}
			</View>
			{open ? (
				<View>
					<Text>Blah blah</Text>
				</View>
			) : null}
		</View>
	);
};

export default ProfileDropdown;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
		borderBottomWidth: 0.5,
		borderTopWidth: 0.5,
		borderColor: colors.brown,
		paddingVertical: 15,
		paddingHorizontal: 15,
	},
	dropdown: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	label: {
		color: colors.white,
		fontSize: 22,
		fontweight: "bold",
	},
});
