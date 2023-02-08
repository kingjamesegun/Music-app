import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	SafeAreaView,
	Image,
} from "react-native";
import React from "react";
import BackTab from "../../components/header/BackTab";
import { colors } from "../../styles/colors";
import { Feather, Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import SongList from "../../components/cards/SongList";

const SingleSong = () => {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../assets/gradientBg.jpg")}
				style={styles.imageBg}
			>
				<SafeAreaView>
					<View style={styles.details}>
						<BackTab />

						<View style={styles.postImageContainer}>
							<Image
								source={require("../../assets/me.jpg")}
								style={styles.postImage}
							/>
							<Text style={styles.title}>90s Rock </Text>
						</View>
						<View style={styles.songDetails}>
							<Text style={styles.rockedText}>
								The song rocked in 90s. Cover: Nirvana
							</Text>
							<View style={styles.postDetails}>
								<Text style={styles.likes}>12,943 likes</Text>
								<Text style={styles.time}>6h 12m</Text>
							</View>
							<View style={styles.songIcons}>
								<View style={styles.leftIcons}>
									<Feather name="heart" size={24} color={colors.white} />
									<View style={styles.arrowDown}>
										<Feather name="arrow-down" size={12} color={colors.white} />
									</View>
									<View style={styles.dots}>
										<Entypo
											name="dots-three-horizontal"
											size={12}
											color={colors.white}
										/>
									</View>
								</View>
								<View style={styles.playBtn}>
									<Feather name="play" size={24} color={colors.white} />
								</View>
							</View>
						</View>

						<ScrollView style={styles.songList}>
							<SongList />
							<SongList />
							<SongList />
							<SongList />
						</ScrollView>
					</View>
				</SafeAreaView>
			</ImageBackground>
		</View>
	);
};

export default SingleSong;

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	imageBg: {
		flex: 1,
	},
	details: {
		paddingHorizontal: 15,
	},

	postImage: {
		width: 250,
		height: 250,
		borderRadius: 15,
	},
	postImageContainer: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 15,
		position: "relative",
	},
	title: {
		color: colors.greenLight,
		fontSize: 18,
		fontWeight: "bold",
		position: "absolute",
		bottom: 19,
		left: 70,
		width: 150,
	},
	songDetails: {
		marginTop: 20,
	},
	rockedText: {
		fontWeight: "bold",
		color: colors.white,
		fontSize: 16,
		marginBottom: 10,
	},
	postDetails: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
	},
	likes: {
		color: colors.white,
		opacity: 0.4,
		marginRight: 10,
		fontWeight: "400",
	},
	time: {
		color: colors.white,
		opacity: 0.4,
		marginRight: 10,
		fontWeight: "400",
	},
	songIcons: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	leftIcons: {
		flexDirection: "row",
		alignItems: "center",
		gap: "20px",
	},
	arrowDown: {
		borderWidth: 2,
		borderColor: colors.white,
		borderRadius: 20,
		paddig: 5,
		marginHorizontal: 10,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	dots: {
		borderWidth: 2,
		borderColor: colors.white,
		borderRadius: 15,
		paddig: 2,
		width: 25,
		height: 25,
		alignItems: "center",
		justifyContent: "center",
	},
	songList: {
		marginTop: 15,
	},
	playBtn: {
		backgroundColor: colors.pink,
		width: 45,
		height: 45,
		alignItems: "center",
		justifyContent: "center",
		borderRadius: 30,
	},
});
