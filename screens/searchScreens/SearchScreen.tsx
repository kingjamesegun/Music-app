import {
	View,
	Text,
	SafeAreaView,
	StyleSheet,
	ScrollView,
	FlatList,
} from "react-native";
import React from "react";
import HeaderTab from "../../components/header/HeaderTab";
import { colors } from "../../styles/colors";
import SearchInput from "../../components/inputs/SearchInput";
import CategoryCard from "../../components/cards/CategoryCard";
import { categories } from "../../utils/DummyData";

const SearchScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<HeaderTab />
				<SearchInput />
			</View>
			<ScrollView>
				<View style={styles.row}>
					<FlatList
						numColumns={2}
						data={categories}
						renderItem={({ item }) => <CategoryCard />}
						columnWrapperStyle={{ justifyContent: "space-between" }}
						key={2}
						keyExtractor={(item) => item.title}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default SearchScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryBlue,
	},
	details: {
		paddingHorizontal: 15,
	},
	row: {
		flexDirection: "row",
		flex: 2,
		justifyContent: "space-between",
		paddingHorizontal: 5,
		marginTop: 15,
	},
	scrollDetails: {
		width: "50%",
	},
});
