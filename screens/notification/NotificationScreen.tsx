import {
	View,
	Text,
	StyleSheet,
	Button,
	SafeAreaView,
	StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../styles/colors";
import BackTab from "../../components/header/BackTab";
import { ScrollView } from "react-native-gesture-handler";
import NotificationCard from "../../components/cards/NotificationCard";

const NotificationScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar barStyle="light-content" />
			<View style={styles.details}>
				<BackTab />

				<View style={styles.tabs}>
					<View style={styles.btns}>
						<Text style={styles.inactiveBtn}>Songs</Text>
						<View style={styles.activeBtnContainer}>
							<Text style={styles.activeBtn}>Podcasts</Text>
						</View>
					</View>
					<View>
						<Ionicons name="filter-outline" size={24} color={colors.white} />
					</View>
				</View>

				<ScrollView>
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
					<NotificationCard />
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default NotificationScreen;

const styles = StyleSheet.create({
	container: {
		backgroundColor: colors.primaryBlue,
		flex: 1,
	},
	details: {
		paddingHorizontal: 15,
	},
	tabs: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 10,
		alignItems: "center",
	},
	btns: {
		flexDirection: "row",
		alignItems: "center",
	},
	inactiveBtn: {
		color: colors.gray,
		paddingVertical: 5,
		paddingHorizontal: 10,
		fontSize: 16,
	},
	activeBtn: {
		paddingVertical: 5,
		color: colors.white,
		fontSize: 16,
		paddingHorizontal: 10,
		fontWeight: "bold",
	},
	activeBtnContainer: {
		borderRadius: 50,
		backgroundColor: colors.pink,
		paddingVertical: 5,
		paddingHorizontal: 10,
	},
});
