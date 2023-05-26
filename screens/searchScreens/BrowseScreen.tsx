import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	FlatList,
} from "react-native";
import { useRef, useState, useEffect } from "react";
import HeaderTab from "../../components/header/HeaderTab";
import { colors } from "../../styles/colors";
import SearchInput from "../../components/inputs/SearchInput";
import BrowseCard from "../../components/cards/BrowseCard";
import { categories } from "../../utils/DummyData";
import CategoryCard from "../../components/cards/CategoryCard";
import SmallBrowseCard from "../../components/cards/SmallBrowseCard";

const BrowseScreen = () => {
	const ref = useRef<FlatList>(null);

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<HeaderTab />
				<SearchInput />
				<View style={styles.action}>
					<Text style={styles.browseText}>Browse</Text>
					<Text style={styles.seeText}>See All</Text>
				</View>
				<ScrollView
					style={styles.scroll}
					horizontal={true}
					showsHorizontalScrollIndicator={false}
				>
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
					<BrowseCard />
				</ScrollView>

				<View style={styles.smallCards}>
					<FlatList
						ref={ref}
						numColumns={3}
						data={categories}
						renderItem={({ item }) => <SmallBrowseCard />}
						columnWrapperStyle={{ justifyContent: "space-between" }}
						key={3}
						keyExtractor={(item) => item.title}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default BrowseScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryBlue,
	},
	details: {
		paddingHorizontal: 15,
	},
	action: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 15,
	},
	browseText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "bold",
	},
	seeText: {
		color: colors.gray,
	},
	scroll: {
		flexDirection: "row",
	},
	smallCards: {
		marginTop: 20,
	},
});
