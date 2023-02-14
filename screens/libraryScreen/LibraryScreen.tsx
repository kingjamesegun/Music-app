import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import LibraryHeader from "../../components/header/LibraryHeader";
import SearchInput from "../../components/inputs/SearchInput";

const LibraryScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<LibraryHeader />
				<SearchInput />
			</View>
		</SafeAreaView>
	);
};

export default LibraryScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
		flex: 1,
	},
	details: {
		paddingHorizontal: 15,
	},
});
