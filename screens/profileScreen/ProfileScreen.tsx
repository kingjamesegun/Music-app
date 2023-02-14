import { View, Text, SafeAreaView, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../../styles/colors";
import LibraryHeader from "../../components/header/LibraryHeader";

const ProfileScreen = () => {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.details}>
				<LibraryHeader />
				<View style={styles.profileDetails}>
					<Image
						source={require("../../assets/me.jpg")}
						style={styles.profileImage}
					/>
					<Text style={styles.name}>Adams Smith</Text>
					<Text style={styles.mail}>adamsmith@gmail.com</Text>
					<View style={styles.editBtn}>
						<Text style={styles.editText}>Edit</Text>
					</View>
					<View style={styles.follow}>
						<View style={styles.followDetails}>
							<Text style={styles.number}>1.232</Text>
							<Text style={styles.followTag}> Followers</Text>
						</View>
						<View style={styles.followDetails}>
							<Text style={styles.number}>1.232</Text>
							<Text style={styles.followTag}> Following</Text>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default ProfileScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: colors.primaryBlue,
	},
	details: {
		paddingHorizontal: 15,
	},
	profileDetails: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	profileImage: {
		width: 150,
		height: 150,
		borderRadius: 75,
	},
	name: {
		color: colors.white,
		fontSize: 30,
		fontWeight: "bold",
		marginTop: 5,
	},
	mail: {
		fontSize: 14,
		color: colors.gray,
		marginVertical: 5,
	},
	editBtn: {
		borderRadius: 20,
		borderColor: colors.white,
		borderWidth: 1,
		marginTop: 5,
	},
	editText: {
		fontSize: 16,
		paddingHorizontal: 25,
		paddingVertical: 8,
		color: colors.white,
		fontWeight: "bold",
	},
	follow: {
		flexDirection: "row",
	},
	followDetails: {
		paddingVertical: 10,
		paddingHorizontal: 15,
		alignItems: "center",
	},
	number: {
		fontSize: 20,
		color: colors.white,
		fontWeight: "bold",
	},
	followTag: {
		fontSize: 16,
		color: colors.gray,
	},
});
