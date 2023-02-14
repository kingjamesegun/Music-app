import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import LibraryHeader from "../../components/header/LibraryHeader";
import SearchInput from "../../components/inputs/SearchInput";
import SingleSong from "../homeScreen/SingleSong";
import SongList from "../../components/cards/SongList";

const LibraryScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<LibraryHeader />
				<SearchInput />
				<ScrollView>
					<View style={styles.scrollContainer}>
						<SongList />
						<SongList />
						<SongList />
						<SongList />
						<SongList />
					</View>
				</ScrollView>
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
	scrollContainer: {
		marginTop: 15,
	},
});
