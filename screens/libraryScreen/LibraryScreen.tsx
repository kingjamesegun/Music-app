import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	FlatList,
	Animated,
} from "react-native";
import React, { useRef } from "react";
import { colors } from "../../styles/colors";
import LibraryHeader from "../../components/header/LibraryHeader";
import SearchInput from "../../components/inputs/SearchInput";
import SingleSong from "../homeScreen/SingleSong";
import SongList from "../../components/cards/SongList";

export const data = [
	{
		key: "1",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: " 2",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "3",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "4",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "5",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "6",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "7",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "8",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
	{
		key: "9",
		image: "../../assets/me.jpg",
		title: "Killing the name",
		desc: "Rage against the macthc",
	},
];

const ITEM_SIZE = 70 + 10 * 3;

const LibraryScreen = () => {
	const scrollY = useRef(new Animated.Value(0)).current;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<LibraryHeader />
				<SearchInput />
				<Animated.FlatList
					data={data}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { y: scrollY } } }],
						{ useNativeDriver: true }
					)}
					keyExtractor={(item) => item.key}
					renderItem={(item) => {
						const { title, image, desc, key } = item.item;
						const inputRange = [
							-1,
							0,
							ITEM_SIZE * item.index + 1,
							ITEM_SIZE * (item.index + 2),
						];

						const scale = scrollY.interpolate({
							inputRange,
							outputRange: [1, 1, 1, 0],
						});
						return (
							<Animated.View
								style={{ ...styles.scrollContainer, transform: [{ scale }] }}
							>
								<SongList title={title} desc={desc} key={key} image={image} />
							</Animated.View>
						);
					}}
				/>
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
