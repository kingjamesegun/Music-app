import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import HeaderTab from "../../components/header/HeaderTab";
import ThrowbackCard from "../../components/cards/ThrowbackCard";
import BeatlessCard from "../../components/cards/BeatlessCard";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<StatusBar style="light" />
			<View style={styles.details}>
				<HeaderTab />
				<ScrollView showsVerticalScrollIndicator={false}>
					<View style={styles.welcomeTextContainer}>
						<Text style={styles.welcomeText}>Hello,</Text>
						<Text style={styles.welcomeText}>Diavanda</Text>
					</View>
					<View style={styles.scroll}>
						<Text style={styles.throwbackText}>Throwback</Text>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<ThrowbackCard artistImage={false} />
							<ThrowbackCard artistImage={false} />
							<ThrowbackCard artistImage={false} />
							<ThrowbackCard artistImage={false} />
						</ScrollView>
					</View>
					<View style={styles.scroll}>
						<Text style={styles.throwbackText}>The Beatless</Text>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<BeatlessCard />
							<BeatlessCard />
							<BeatlessCard />
							<BeatlessCard />
							<BeatlessCard />
							<BeatlessCard />
						</ScrollView>
					</View>
					<View style={styles.scroll}>
						<Text style={styles.throwbackText}>Recentely Played</Text>
						<ScrollView
							horizontal={true}
							showsHorizontalScrollIndicator={false}
						>
							<ThrowbackCard artistImage={true} />
							<ThrowbackCard artistImage={true} />
							<ThrowbackCard artistImage={true} />
						</ScrollView>
					</View>
				</ScrollView>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: 15,
		flex: 1,
		backgroundColor: colors.primaryBlue,
	},
	details: {
		paddingHorizontal: 20,
	},
	welcomeTextContainer: {
		marginTop: 20,
	},
	welcomeText: {
		color: colors.white,
		fontSize: 40,
		fontWeight: "bold",
	},
	throwbackText: {
		color: colors.white,
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 15,
	},
	scroll: {
		marginVertical: 20,
	},
});
