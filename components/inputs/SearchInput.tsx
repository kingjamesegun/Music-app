import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { colors } from "../../styles/colors";

const SearchInput = () => {
	return (
		<View style={styles.container}>
			<View>
				<Feather
					name="search"
					color={colors.brown}
					size={21}
					style={styles.searchIcon}
				/>
			</View>
			<TextInput
				placeholder="Search"
				style={styles.input}
				placeholderTextColor={colors.brown}
				autoFocus={true}
			/>
		</View>
	);
};

export default SearchInput;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.blueLight,
		paddingHorizontal: 10,
		paddingVertical: 13,
		flexDirection: "row",
		borderRadius: 5,
		marginVertical: 5,
	},
	searchIcon: {
		opacity: 0.5,
	},
	input: {
		fontSize: 18,
		color: colors.white,
		paddingHorizontal: 10,
		fontWeight: "bold",
	},
});
