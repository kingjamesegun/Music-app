import {
	View,
	Text,
	StyleSheet,
	SafeAreaView,
	ScrollView,
	ImageBackground,
} from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import HeaderTab from "../../components/header/HeaderTab";
import ThrowbackCard from "../../components/cards/ThrowbackCard";
import BeatlessCard from "../../components/cards/BeatlessCard";

const image = { uri: "https://reactjs.org/logo-og.png" };
const RecentlyPlayed = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../assets/recentlybg.png")}
				resizeMode="cover"
				style={styles.image}
			>
				<SafeAreaView style={styles.container}>
					<View style={styles.details}>
						<HeaderTab />
						<ScrollView showsVerticalScrollIndicator={false}>
							<View style={styles.beatless}>
								<View style={styles.scroll}>
									<Text style={styles.beatlessText}>Recently Played</Text>
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
							</View>
							<View style={styles.scroll}>
								<Text style={styles.throwbackText}>Favourites</Text>
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
			</ImageBackground>
		</View>
	);
};

export default RecentlyPlayed;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	details: {
		paddingHorizontal: 20,
	},
	welcomeTextContainer: {
		marginTop: 20,
	},
	beatless: {
		marginTop: 250,
	},
	image: {
		flex: 1,
		justifyContent: "center",
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
	beatlessText: {
		color: colors.white,
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 15,
	},
	scroll: {
		marginVertical: 20,
	},
});
