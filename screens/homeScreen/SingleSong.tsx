import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	SafeAreaView,
	Image,
} from "react-native";
import React from "react";
import HeaderTab from "../../components/header/HeaderTab";
import BackTab from "../../components/header/BackTab";
import { colors } from "../../styles/colors";

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
							<Text style={styles.title}>90s Rock Anthem</Text>
						</View>
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
		marginTop: 20,
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
});
